import React, { useState, useEffect } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
} from "react-places-autocomplete";
import { useNavigate } from "react-router-dom";

function Planning({ user }) {
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
    setAddress("");
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
    fetch("/planned_adventures", {
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
    <div className="container">
      <div className="form-container">
        <div className="title" align="center">
          <h2>Use The Search Bar To Add Locations To Your Trip!</h2>
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
              <div className="places-input">
                <input {...getInputProps({ placeholder: "Find a city..." })} />
                <div>
                  {loading ? <div>...loading</div> : null}
                  {suggestions.map((suggestion) => {
                    const style = {
                      backgroundColor: suggestion.active
                        ? "#ffbf86"
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
        <form type="submit" onSubmit={onCreateAdventure}>
          <div className="log-form-container">
            <label /> Title:
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title of adventure..."
            ></input>
            <label /> Trip Start:
            <input
              type="date"
              onChange={(e) => setTripStart(e.target.value)}
            ></input>
            <label /> Trip End:
            <input
              type="date"
              onChange={(e) => setTripEnd(e.target.value)}
            ></input>
            <div>
              <button type="submit" className="submit-button">Add To Future Plans</button>
            </div>
          </div>
        </form>

        <div className="errors">{errors && <p> {`${errors}` + ""} </p>}</div>
      </div>
      <div className="list-items">
          {locationList &&
            locationList.map((locale) => {
              return <p> {`${locale.city}, ${locale.country}`} </p>;
            })}
      </div>
    </div>
  );
}

export default Planning;
