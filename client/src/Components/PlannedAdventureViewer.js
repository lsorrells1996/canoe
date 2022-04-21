import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Location from "./Location";

function PlannedAdventureViewer() {
  const [adventure, setAdventure] = useState("");
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [notes, setNotes] = useState(false);
  const navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    fetch(`/planned_adventures/${params.id}`).then((r) => {
      if (r.ok) {
        r.json().then((data) => setAdventure(data));
      }
    });
  }, [params.id]);

  const addComment = (e) => {
    e.preventDefault();
    fetch("/planned_adventure_comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        planned_adventure_id: adventure.id,
        notes,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => setNotes(data));
        navigate(0);
      }
    });
  };

  let locations = adventure.location_list;
  let comments = adventure.planned_adventure_comments;
  console.log(adventure)

  return (
    <>
      <div className="upper-container" align="center">
        <div>
          <h1>{adventure.title}</h1>
          <h2>
            {adventure.trip_start} - {adventure.trip_end}
          </h2>
        </div>
        <div>
          <button onClick={() => setShowCommentForm(!showCommentForm)}>
            Add some notes
          </button>
        </div>
      </div>
      <div className="adventure-container" align="center">
        <div className="location-container">
          {locations &&
            locations.map((l) => {
              return (
                <Location
                  city={l.city}
                  id={adventure.id}
                  title={adventure.title}
                  wikiId={l.wikiDataId}
                />
              );
            })}
        </div>
        { !notes && <div className="comments-container">
          {comments &&
            comments.map((c) => {
              return <div className="comments"><p> 	• {c.notes} </p></div>
            })}
        </div>}
      </div>
      <div>
        {showCommentForm && (
          <div className="comment-form-container">
            <div className="comment-form">
              <div className="close-button">
                <button onClick={() => setShowCommentForm(!showCommentForm)}>
                  X
                </button>
              </div>
              <div className="form">
                <form onSubmit={addComment}>
                  <textarea
                    placeholder="What would you like to do on this adventure?"
                    onChange={(e) => setNotes(e.target.value)}
                  ></textarea>
                  <div className="submit-comment-button">
                    <button type="submit">Comment!</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default PlannedAdventureViewer;
