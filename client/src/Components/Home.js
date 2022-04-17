import React, { useEffect, useState } from "react";
import AdventureListItem from "./AdventureListItem";
import PlannedAdventureListItem from "./PlannedAdventureListItem";

function Home({ setUser }) {
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
  
  return (
    <>
      <div className="container">
        <div className="row">
          {plannedAdventures && (
            <div className="col" align="left">
              Planned Adventures
              {plannedAdventures.map((p) => {
                return (
                  <div>
                    {" "}
                    <PlannedAdventureListItem key={p.id} title={p.title} id={p.id} />{" "}
                  </div>
                );
              })}
            </div>
          ) }
          {adventures && (
            <div className="col" align="right">
              Adventure Log
              {adventures.map((a) => {
                return (
                  <div>
                    {" "}
                    <AdventureListItem key={a.id} title={a.title} id={a.id} />{" "}
                  </div>
                );
              })}
            </div>
          ) }
        </div>
      </div>
    </>
  );
}

export default Home;
