import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "./../utils/axios";
import "./../styles/MoviePage.css";
import Backdrop from "../components/Backdrop";
import Poster from "../components/MainPoster";
import Navbar from "../components/Navbar";

function MoviePage() {
  const { id } = useParams();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function getMovieDetails() {
      const request = await axios.get(`/movie/${id}`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          language: "en-US",
        },
      });
      // console.log(request.data);
      setMovie(request.data);
      return request;
    }
    getMovieDetails();
  });

  return (
    <div className="app">
      <Navbar />

      {/* Backdrop */}
      <Backdrop path={movie.backdrop_path} />

      <div className="description">
        {/* Poster */}
        <Poster path={movie.poster_path} />

        {/* Details */}
        <div className="details">
          <h1 className="title">
            {movie.title}{" "}
            <span className="title-year">
              ({new Date(movie.release_date).getFullYear()})
            </span>
          </h1>

          <h2 className="tagline">{movie.tagline}</h2>

          <h2 className="overview-title">Overview</h2>
          <p className="overview">{movie.overview}</p>

          {/* Genres */}
          {/* <h4>
            <ul className="genres">
              {movie.genres.map((genre) => {
                return (
                  <>
                    <li className="genre">{genre.name}</li>
                    <li className="bull-dot">&#8226;</li>
                  </>
                );
              })}
            </ul>
          </h4> */}
        </div>
      </div>

      {/* Cast */}
    </div>
  );
}

export default MoviePage;
