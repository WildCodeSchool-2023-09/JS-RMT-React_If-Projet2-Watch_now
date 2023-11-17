import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import "../style/ListMovies.css";

function ListMovies() {
  const movies = useLoaderData();
  return (
    <div className="list-movies">
      {movies.map((movie) => {
        return (
          <div>
            <div className="movie-ticket">
              <Link to={`/movies/${movie.id}`}>
                <img
                  className="movie"
                  src={movie.poster_path}
                  alt={movie.title}
                />
              </Link>

              <h4 className="title-movie">{movie.title}</h4>
              <div className="movie-ticket-desc">
                <h5 className="date-movie">{movie.release_date}</h5>
                <h5 className="genre-movie">{movie.genre_ids}</h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListMovies;
