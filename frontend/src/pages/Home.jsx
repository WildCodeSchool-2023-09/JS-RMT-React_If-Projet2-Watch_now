import React from "react";
import { useLoaderData } from "react-router-dom";

function AllProduct() {
  const movie = useLoaderData();
  return (
    <div className="App">
      <h1>Liste des films</h1>
      {movie.map((movies) => {
        return (
          <div>
            <img src={movies.poster_path} alt={movies.title} />
            <h2>{movies.title}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default AllProduct;
