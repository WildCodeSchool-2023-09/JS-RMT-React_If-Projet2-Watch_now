import React from "react";
import { useLoaderData, Link } from "react-router-dom";

function MoviePage() {
  const movie = useLoaderData();

  return (
    <div>
      <Link to="/">Home</Link>
      {movie.map((movies) => {
        return (
          <div>
            <h1>{movies.title}</h1>
            <img src={movies.poster_path} alt={movies.title} />
          </div>
        );
      })}
    </div>
  );
}

export default MoviePage;
