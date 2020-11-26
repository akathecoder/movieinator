import React, { useEffect, useState } from "react";
import axios from "./../utils/axios";
import "./../styles/CastRow.css";
import person from "./../assets/person_icon.png";

const baseUrl = "https://image.tmdb.org/t/p/original";

function CastRow({ id }) {
  //   const url = `/movie/${id}/credits`;

  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCastDetails() {
      const request = await axios.get(
        `/movie/${id}/credits`,
        {
          params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: "en-US",
          },
        }
      );

      //   console.log(request.data.cast);
      setCast(request.data.cast);
      return request;
    }

    getCastDetails();
  }, [id]);

  return (
    <div className="cast-row">
      <h2 className="cast-title">Cast</h2>
      <div className="cast">
        {cast.map((castMember) => {
          return (
            <div
              className="cast-member"
              key={castMember.cast_id}
            >
              <img
                src={
                  castMember.profile_path
                    ? `${baseUrl}${castMember.profile_path}`
                    : person
                }
                alt={castMember.name}
                className={
                  castMember.profile_path
                    ? "cast-member-img"
                    : "person-img"
                }
              />
              <h5 className="cast-member-name">
                {castMember.name}
              </h5>
              <h5 className="cast-member-character">
                {castMember.character}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CastRow;
