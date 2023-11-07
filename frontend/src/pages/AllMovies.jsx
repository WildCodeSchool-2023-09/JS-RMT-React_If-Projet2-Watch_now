import React from "react";
import "../style/AllMovies.css";
import { useLoaderData, Link } from "react-router-dom";

function AllMovies() {
  const movie = useLoaderData();

  return (
    <div>
      <Link to="/">Home</Link>
      <h1>Liste des films</h1>
      {movie.map((movies) => {
        return (
          <div>
            <Link to="/movie-page/:movieId">
              <img src={movies.poster_path} alt={movies.title} />
            </Link>
            <h2>{movies.title}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default AllMovies;
