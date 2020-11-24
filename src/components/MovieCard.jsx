import React from "react";

const baseUrl = "https://image.tmdb.org/t/p/original";

function MovieCard({ title, imgPath }) {
  return (
    <div className="card">
      <img src={`${baseUrl}${imgPath}`} alt={title} />
      <h5>{title}</h5>
    </div>
  );
}

export default MovieCard;
