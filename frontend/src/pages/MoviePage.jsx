import React from "react";
import { useLoaderData, Link } from "react-router-dom";

function MoviePage() {
  const movie = useLoaderData();

  return (
    <div>
      <h1>Details du film</h1>
      <div>
        <Link to={`/movies/${movie.id}`}>
          <img src={movie.poster_path} alt={movie.title} />
        </Link>
        <h2>{movie.title}</h2>
      </div>
    </div>
  );
}

export default MoviePage;
