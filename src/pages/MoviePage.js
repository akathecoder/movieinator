import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "./../utils/axios";
import "./../styles/MoviePage.css";

import Poster from "../components/MainPoster";
import Navbar from "../components/Navbar";
import CastRow from "../components/CastRow";
import Similar from "../components/Similar";

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
  }, [id]);

  return (
    <div className="app">
      <Navbar />

      {/* Backdrop */}

      <header
        className="top-banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
          backgroundPosition: "center center",
          backgroundColor: "grey",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="description">
          <Poster path={movie.poster_path} />

          {/* Details */}
          <div className="details">
            <h1 className="title">
              {movie.title}{" "}
              <span className="title-year">
                (
                {new Date(movie.release_date).getFullYear()}
                )
              </span>
            </h1>

            <h2 className="tagline">{movie.tagline}</h2>

            <h2 className="overview-title">Overview</h2>
            <p className="overview">{movie.overview}</p>
          </div>
        </div>

        <div className="background-fadeBottom" />
      </header>

      {/* Cast */}
      <CastRow id={id} />

      {/* Top Recommendations & Similar */}
      <Similar titleType="0" id={id} />
      <Similar titleType="1" id={id} />
    </div>
  );
}

export default MoviePage;
