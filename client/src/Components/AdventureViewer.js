import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Location from "./Location";

function AdventureViewer() {
  const [adventure, setAdventure] = useState("");
  let params = useParams();

  useEffect(() => {
    fetch(`/adventures/${params.id}`).then((r) => {
      if (r.ok) {
        r.json().then((data) => setAdventure(data));
      }
    });
  }, []);

  let locations = adventure.location_list;
  let comments = adventure.comments;

  // const filteredActivities = () => {
  //     if (mood === "chill") {
  //     return activityData.filter((a) => a.mood_id === 1);
  // const filteredComments = () => {
  //     if (comments.id === wikiId) {
  //         return comments.filter(a => )
  //     }
  // }

  // const filterComments = comments.filter(c => c.wikiId === wikiId)

  console.log(comments);

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
export default AdventureViewer;
