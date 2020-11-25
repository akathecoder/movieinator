import React, { useEffect, useState } from "react";
import "./../styles/MainPoster.css";

function MainPoster({ path }) {
  const [posterPath, setPosterPath] = useState(
    `https://image.tmdb.org/t/p/original${path}`
  );

  useEffect(() => {
    setPosterPath(
      `https://image.tmdb.org/t/p/original${path}`
    );
  }, [path]);
  return (
    // <div className="poster-wrapper">
    <img
      className="main-poster"
      alt="Poster"
      src={posterPath}
    />
    // </div>
  );
}

export default MainPoster;
