import React from "react";

import WidgetMovies from "../components/WidgetMoviesRecent";
import WidgetMoviesBest from "../components/WidgetMoviesBest";

import "../Index.css";

function Home() {
  return (
    <div>
      <div className="display-movies">
        <h3>New entries this week</h3>
        <WidgetMovies />
        <h3>Best movies by votes</h3>
        <WidgetMoviesBest />
      </div>
    </div>
  );
}

export default Home;
