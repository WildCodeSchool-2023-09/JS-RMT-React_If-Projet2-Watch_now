import React from "react";
import "../style/AllMovies.css";
import ListMovies from "../components/ListMovies";
import Filters from "../components/Filters";

function AllMovies() {
  return (
    <div>
      <div className="display-movies">
        <h1>Movies Catalogue</h1>
        <Filters />
        <ListMovies />
      </div>
    </div>
  );
}

export default AllMovies;
