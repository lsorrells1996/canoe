import React, { useState, useEffect } from "react";

import "./Location.css";

function Location({ city, wikiId }) {
  const [wikiData, setWikiData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/location_data/${wikiId}`).then((r) => {
      if (r.ok) {
        r.json().then((data) => setWikiData(data));
        setTimeout(() => setLoading(false), 2000);
      }
    });
  }, [wikiId]);

  return (
    <div className="locations-container">
      <h3>{city}</h3>
      {wikiData &&
        (loading ? (
          <div className="loading-container">
            <div className="loading-1"></div>
            <div className="loading-2"></div>
            <div className="loading-3"></div>
          </div>
        ) : (
          <img
            className="city-img"
            src={`${wikiData.data_hash.file.urls.file}`}
            alt=""
          />
        ))}
    </div>
  );
}

export default Location;
