import React from "react";
import MovieRow from "../components/MovieRow";
import requests from "./../utils/requests";
import "./../styles/HomePage.css";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div className="homepage">
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <Banner />

      {/* Movie Rows */}
      {/* <MovieRow
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      /> */}
      <MovieRow
        title="Trending"
        fetchUrl={requests.fetchTrending}
      />
      <MovieRow
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
      />
      <MovieRow
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <MovieRow
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <MovieRow
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <MovieRow
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />

      {/* Footer (Maybe) */}
    </div>
  );
}

export default HomePage;
