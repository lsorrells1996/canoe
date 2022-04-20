import React from "react";
import { Link } from "react-router-dom";

function AdventureListItem({ title, id, tripStart, tripEnd }) {
  let name = title;
  name = name.replace(/\s+/g, "-");
  const url = `/${name}/${id}`;

  return (
    <>
      <div> {`${title}`} </div>
      <div> {`${tripStart} - ${tripEnd}`} </div>
      <Link to={url} className="logged-expand">
        {" "}
        View Adventure!{" "}
      </Link>
    </>
  );
}

export default AdventureListItem;
