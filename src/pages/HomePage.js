import React from "react";
import MovieRow from "../components/MovieRow";
import requests from "./../utils/requests";

function HomePage() {
  return (
    <div className="homepage">
      {/* Navbar */}
      {/* Banner */}
      {/* Movie Rows */}

      <MovieRow
        title="Test Title"
        fetchUrl={requests.fetchNetflixOriginals}
      />

      {/* Footer (Maybe) */}
    </div>
  );
}

export default HomePage;
