import React from "react";
import "../style/AllMovies.css";
import NavBar from "../components/NavBar";
import NavbarModal from "../components/NavbarModal";
import ListMovies from "../components/ListMovies";
import Filters from "../components/Filters";

function AllMovies() {
  return (
    <div>
      <NavBar />
      <NavbarModal />
      <div className="display-movies">
        <h3>Movies Catalogue</h3>
        <Filters />
        <ListMovies />
      </div>
    </div>
  );
}

export default AllMovies;
