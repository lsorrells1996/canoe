import React, { useEffect, useState } from "react";
import AdventureListItem from "./AdventureListItem";
import PlannedAdventureListItem from "./PlannedAdventureListItem";
import "./Home.css"

function Home({ setUser, user }) {
  const [adventures, setAdventures] = useState([]);
  const [plannedAdventures, setPlannedAdventures] = useState([]);

  useEffect(() => {
    let myfetches = [];

    myfetches.push(
      fetch("/adventures").then((r) => {
        if (r.ok) {
          r.json().then((data) => setAdventures(data));
        }
      })
    );
    myfetches.push(
      fetch("/planned_adventures").then((r) => {
        if (r.ok) {
          r.json().then((data) => setPlannedAdventures(data));
        }
      })
    );

    Promise.all(myfetches);
  }, []);
  console.log(adventures[9])
  return (
    <>
      <div className="content-container">
        
          {plannedAdventures && (
            <div className="planned-container" >
              Planned Adventures
              {plannedAdventures.map((p) => {
                return (
                  <div className="planned">
                    {" "}
                    <PlannedAdventureListItem key={p.id} title={p.title} id={p.id} tripStart={p.trip_start} tripEnd={p.trip_end} />{" "}
                  </div>
                );
              })}
            </div>
          ) }
          {adventures && (
            <div className="logged-container" >
              Adventure Log
              {adventures.map((a) => {
                return (
                  <div className="logged">
                    {" "}
                    <AdventureListItem key={a.id} title={a.title} id={a.id} tripStart={a.trip_start} tripEnd={a.trip_end} />{" "}
                  </div>
                );
              })}
            </div>
          ) }
      
      </div>
    </>
  );
}

export default Home;
