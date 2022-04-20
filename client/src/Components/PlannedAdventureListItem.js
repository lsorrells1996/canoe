import React from "react";
import { Link } from "react-router-dom";

function PlannedAdventureListItem({ title, id }) {
  let name = title;
  name = name.replace(/\s+/g, "-");
  const url = `/p/${name}/${id}`;

  return (
    <>
      <div>{`${title}`}</div>
      <Link to={url} className="planned-expand">
        {" "}
        Plan!{" "}
      </Link>
    </>
  );
}

export default PlannedAdventureListItem;
