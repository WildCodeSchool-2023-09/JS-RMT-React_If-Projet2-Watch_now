import React from "react";
import "../style/AllMovies.css";
import NavBar from "../components/NavBar";
import NavbarModal from "../components/NavbarModal";
import ListMovies from "../components/ListMovies";

function AllMovies() {
  return (
    <div>
      <NavBar />
      <NavbarModal />
      <div className="display-movies">
        <h1>Liste des films</h1>
        <ListMovies />
      </div>
    </div>
  );
}

export default AllMovies;
