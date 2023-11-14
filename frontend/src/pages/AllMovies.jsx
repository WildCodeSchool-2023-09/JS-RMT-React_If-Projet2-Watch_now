import React from "react";
import "../style/AllMovies.css";
import ListMovies from "../components/ListMovies";

function AllMovies() {
  return (
    <div>
      <div className="display-movies">
        <h1>Liste des films</h1>
        <ListMovies />
      </div>
    </div>
  );
}

export default AllMovies;
