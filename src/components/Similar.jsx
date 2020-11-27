import React, { useEffect, useState } from "react";
import axios from "./../utils/axios";
import "./../styles/Similar.css";

const baseUrl = "https://image.tmdb.org/t/p/original";

function Similar({ type = "movie", titleType, id }) {
  const [similarMovieData, setSimilarMovieData] = useState(
    []
  );

  useEffect(() => {
    let url = `/${type}/${id}/recommendations`;

    if (titleType === "1") {
      url = `/${type}/${id}/similar`;
    }

    async function getData() {
      const request = await axios.get(url, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          language: "en-US",
          page: 1,
        },
      });
      // console.log(request.data.results);
      setSimilarMovieData(request.data.results);
      return request;
    }
    getData();
  }, [type, titleType, id]);

  return (
    <div className="similar-section">
      <h2 className="similar-section-title">
        {titleType === "0"
          ? "Recommendation"
          : `Similar ${type === "tv" ? "Shows" : "Movies"}`}
      </h2>
      <div className="similar-section-row">
        {similarMovieData.map((movie) => {
          return (
            <div className="movie" key={movie.id}>
              <div className="similar-movie-poster-wrapper">
                <a href={`/${type}/${movie.id}`}>
                  <img
                    src={`${baseUrl}${movie.poster_path}`}
                    alt={
                      movie?.name ||
                      movie?.title ||
                      movie?.original_title
                    }
                    className="similar-movie-poster"
                  />
                </a>
              </div>

              <h5 className="similar-movie-title">
                {movie?.name ||
                  movie?.title ||
                  movie?.original_title}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Similar;
