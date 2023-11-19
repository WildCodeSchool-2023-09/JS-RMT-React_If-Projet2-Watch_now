import React, { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import "../style/WidgetMoviesBest.css";

function WidgetMoviesBest() {
  const movies = useLoaderData();
  const [visibleMovies, setVisibleMovies] = useState(6);
  const [clickCount, setClickCount] = useState(0);

  const handleShowMore = () => {
    setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 6);
    setClickCount((prevClickCount) => prevClickCount + 1);
  };

  if (!Array.isArray(movies)) {
    console.error("Movies data is not an array:", movies);
    return <div>Error: Movies data is not in the expected format.</div>;
  }

  // Triez les films par vote_average de manière décroissante
  const sortedMovies = [...movies].sort(
    (a, b) => b.vote_average - a.vote_average
  );

  return (
    <div className="widget">
      <div className="widget-movies">
        {sortedMovies.slice(0, visibleMovies).map((movie) => {
          return (
            <div key={movie.id}>
              <div className="widget-movie-ticket">
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
      {clickCount === 1 && (
        <Link to="/movies" className="show-more-link">
          Show All Movies
        </Link>
      )}

      {clickCount !== 1 && (
        <button
          className="show-more-button"
          type="button"
          onClick={handleShowMore}
        >
          Show More
        </button>
      )}
    </div>
  );
}

export default WidgetMoviesBest;
