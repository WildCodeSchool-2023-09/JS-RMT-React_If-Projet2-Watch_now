import React from "react";
import "../style/AllMovies.css";
import { useLoaderData, Link } from "react-router-dom";
import NavBar from "../components/NavBar";

function AllMovies() {
  const movies = useLoaderData();

  return (
    <div>
      <NavBar />
      <h1>Liste des films</h1>
      {movies.map((movie) => {
        return (
          <div>
            <Link to={`/movies/${movie.id}`}>
              <img src={movie.poster_path} alt={movie.title} />
            </Link>
            <h2>{movie.title}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default AllMovies;
