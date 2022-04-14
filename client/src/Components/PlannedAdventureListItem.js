import React from "react";
import { Link } from "react-router-dom";

function PlannedAdventureListItem({ title, id }) {
  let name = title;
  name = name.replace(/\s+/g, "-");
  const url = `/p/${name}/${id}`;

  return (
    <>
      <div>this is my {`${title}`} adventure!</div>
      <Link to={url} className="expand">
        {" "}
        Expand!{" "}
      </Link>
    </>
  );
}

export default PlannedAdventureListItem;
