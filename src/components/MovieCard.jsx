import React from "react";
import "./../styles/MovieCard.css";

const baseUrl = "https://image.tmdb.org/t/p/original";

function MovieCard({ id, title, imgPath }) {
  return (
    <div className="card">
      <div className="poster-wrapper">
        <a href={`/${id}`}>
          <img
            className="poster"
            src={`${baseUrl}${imgPath}`}
            alt={title}
          />
        </a>
      </div>

      <h5 className="movie-title">{title}</h5>
    </div>
  );
}

export default MovieCard;
