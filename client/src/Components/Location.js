import React, { useState, useEffect } from "react";

import "./Location.css";

function Location({ city, wikiId }) {
  const [wikiData, setWikiData] = useState(null);

  useEffect(() => {
    fetch(`/location_data/${wikiId}`).then((r) => {
      if (r.ok) {
        r.json().then((data) => setWikiData(data));
      }
    });
  }, [wikiId]);

  return (
    <div className="locations-container">
      <h3>{city}</h3>
      {wikiData && (
        <img
          className="city-img"
          src={`${wikiData.data_hash.file.urls.file}`}
          alt=""
        />
      )}
    </div>
  );
}

export default Location;
