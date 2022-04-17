import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Location from "./Location";

function PlannedAdventureViewer() {
  const [adventure, setAdventure] = useState("");
  let params = useParams();

  useEffect(() => {
    fetch(`/planned_adventures/${params.id}`).then((r) => {
      if (r.ok) {
        r.json().then((data) => setAdventure(data));
      }
    });
  }, [params.id]);

  let locations = adventure.location_list;
  let comments = adventure.comments;

  return (
    <div className="container" align="center">
      <div className="row">
        <h1>{adventure.title}</h1>
        <h2>
          {adventure.trip_start} - {adventure.trip_end}
        </h2>
        {locations
          ? locations.map((l) => {
              return (
                <Location
                  city={l.city}
                  id={adventure.id}
                  title={adventure.title}
                  wikiId={l.wikiDataId}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}

export default PlannedAdventureViewer;
