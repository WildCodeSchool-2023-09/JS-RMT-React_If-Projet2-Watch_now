import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import "../style/ListMovies.css";

function ListMovies() {
  const movies = useLoaderData();
  return (
    <div id="list-movies">
      {movies.map((movie) => {
        return (
          <div>
            <Link to={`/movies/${movie.id}`}>
              <img
                className="movie"
                src={movie.poster_path}
                alt={movie.title}
              />
            </Link>
            <h2>{movie.title}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default ListMovies;
