import React, { useEffect, useState } from "react";
import "./../styles/Backdrop.css";

function Backdrop({ path }) {
  //   console.log(path);

  const [backdropPath, setBackdropPath] = useState(
    `https://image.tmdb.org/t/p/original${path}`
  );

  useEffect(() => {
    setBackdropPath(
      `https://image.tmdb.org/t/p/original${path}`
    );
  }, [path]);

  return (
    <div className="backdrop">
      <img
        src={backdropPath}
        alt="Backdrop"
        className="backdrop-img"
      />
    </div>
  );
}

export default Backdrop;
