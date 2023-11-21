import React from "react";

import WidgetMovies from "../components/WidgetMoviesRecent";
import WidgetMoviesBest from "../components/WidgetMoviesBest";

import "../Index.css";
import "../style/Home.css";

function Home() {
  return (
    <div>
      <div className="display-movies">
        <h1>New entries this week</h1>
        <WidgetMovies />
        <h1>Best movies by votes</h1>
        <WidgetMoviesBest />
      </div>
    </div>
  );
}

export default Home;
