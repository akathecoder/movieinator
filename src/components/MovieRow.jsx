import React, { useEffect, useState } from "react";
import axios from "./../utils/axios";
import MovieCard from "./MovieCard";
import "./../styles/MovieRow.css";

function MovieRow({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchMovies();
  }, [fetchUrl]);

  //   console.log(movies);

  return (
    <div className="row">
      <h2 className="title">{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              title={movie.name}
              imgPath={movie.poster_path}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MovieRow;
