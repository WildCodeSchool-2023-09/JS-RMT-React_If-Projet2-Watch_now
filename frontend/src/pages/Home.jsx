import React from "react";
import "../style/Home.css";
import WidgetMovies from "../components/WidgetMovies";

function Home() {
  return (
    <div>
      <div className="display-movies">
        <h1>New entries this week</h1>
        <WidgetMovies />
      </div>
    </div>
  );
}

export default Home;
