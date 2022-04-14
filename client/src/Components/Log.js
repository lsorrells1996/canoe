import React, { useState, useEffect } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
} from "react-places-autocomplete";
import { useNavigate } from "react-router-dom";

function Log({ user }) {
  const [title, setTitle] = useState("");
  const [tripStart, setTripStart] = useState("");
  const [tripEnd, setTripEnd] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState(null);
  const [locationList, setLocationList] = useState([]);
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    setAddress(value);
    const last_address_component = results[0].address_components.length - 1;
    const country_code =
      results[0].address_components[last_address_component].short_name;
    const city = results[0].address_components[0].long_name;
    fetch(`/location_data/${city}/${country_code}`).then((r) => {
      if (r.ok) {
        r.json().then((data) => setLocation(data));
      }
    });
  };

  useEffect(() => {
    if (location) {
      setLocationList([...locationList, location.data[0]]);
    }
  }, [location]);

  const onCreateAdventure = (e) => {
    e.preventDefault();
    fetch("/adventures", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        title,
        trip_start: tripStart,
        trip_end: tripEnd,
        location_list: locationList,
      }),
    }).then((r) => {
      if (r.ok) {
        navigate("/home");
      } else {
        if (r.status === 422) {
          r.json().then((data) => setErrors(data.errors));
        }
      }
    });
  };

  return (
    <div className="container" align="center">
      <div className="row">
        <h2>Add Locations to your trip!</h2>
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <input {...getInputProps({ placeholder: "Type location" })} />
              <div>
                {loading ? <div>...loading</div> : null}
                {suggestions.map((suggestion) => {
                  const style = {
                    backgroundColor: suggestion.active
                      ? "rgb(96, 234, 249)"
                      : "#fff",
                  };
                  return (
                    <div {...getSuggestionItemProps(suggestion, { style })}>
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
      <div className="row">
        <div className="col">
          {locationList
            ? locationList.map((locale) => {
                return <p> {`${locale.city}, ${locale.country}`} </p>;
              })
            : null}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <form type="submit" onSubmit={onCreateAdventure}>
            <label /> <div>Title:</div>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title..."
            ></input>
            <label /> <div>Trip start:</div>
            <input
              type="date"
              onChange={(e) => setTripStart(e.target.value)}
            ></input>
            <label /> <div>Trip end:</div>
            <input
              type="date"
              onChange={(e) => setTripEnd(e.target.value)}
            ></input>
            <div>
              <button type="submit">submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="row">{errors ? <p> {`${errors}` + ""} </p> : null}</div>
    </div>
  );
}

export default Log;
