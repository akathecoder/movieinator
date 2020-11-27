import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "./../utils/axios";
import "./../styles/TVPage.css";

import Poster from "../components/MainPoster";
import Navbar from "../components/Navbar";
import CastRow from "../components/CastRow";
import Similar from "../components/Similar";

function TVPage() {
  const { id } = useParams();

  const [tvShow, setTvShow] = useState([]);

  useEffect(() => {
    async function getTVDetails() {
      const request = await axios.get(`/tv/${id}`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          language: "en-US",
        },
      });
      // console.log(request.data);
      setTvShow(request.data);
      return request;
    }
    getTVDetails();
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
        "https://image.tmdb.org/t/p/original/${tvShow?.backdrop_path}"
        )`,
          backgroundPosition: "center center",
          backgroundColor: "grey",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="description">
          <Poster path={tvShow.poster_path} />

          {/* Details */}
          <div className="details">
            <h1 className="title">
              {tvShow.name}{" "}
              <span className="title-year">
                (
                {new Date(
                  tvShow.first_air_date
                ).getFullYear()}
                )
              </span>
            </h1>

            <h2 className="tagline">{tvShow.tagline}</h2>

            <h2 className="overview-title">Overview</h2>
            <p className="overview">{tvShow.overview}</p>
          </div>
        </div>

        <div className="background-fadeBottom" />
      </header>

      {/* Cast */}
      <CastRow type="tv-show" id={id} />

      {/* Top Recommendations & Similar */}
      <Similar type="tv" titleType="0" id={id} />
      <Similar type="tv" titleType="1" id={id} />
    </div>
  );
}

export default TVPage;
