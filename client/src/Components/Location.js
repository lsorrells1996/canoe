import React, { useState } from "react";

function Location({ city, id, wikiId, comments }) {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);

  const toggleCommentForm = () => setShowCommentForm(!showCommentForm);

  const addComment = (e) => {
    e.preventDefault();
    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        adventure_id: id,
        location_id: wikiId,
        comment,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => setCommentList(...commentList, data));
      }
    });
  };

  return (
    <div>
      <h3>{city}</h3>
      <h4>hold</h4>
      {showCommentForm ? (
        <form onSubmit={addComment}>
          <textarea onChange={(e) => setComment(e.target.value)}></textarea>
          <button type="submit">Comment!</button>
        </form>
      ) : (
        <button onClick={toggleCommentForm}>Comment!</button>
      )}
    </div>
  );
}

export default Location;
