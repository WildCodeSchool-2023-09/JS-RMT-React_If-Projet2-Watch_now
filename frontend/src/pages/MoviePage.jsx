import React from "react";
import { useLoaderData } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "../style/Circular.css";
import "../style/MoviePage.css";

function MoviePage() {
  const movie = useLoaderData();
  const normalizedVote = (movie.vote_average / 10) * 100;
  return (
    <main className="main-moviePage">
      <div className="background-img">
        <img src={movie.backdrop_path} alt={movie.title} />
      </div>
      <div className="overlay">
        <h1 className="title">{movie.title}</h1>
        <div className="overlay-buttons">
          <h4>{movie.genre_ids}</h4>
          <h5>{movie.release_date}</h5>
          <h6>{movie.vote_average}</h6>
        </div>
        <img
          className="poster-movie"
          src={movie.poster_path}
          alt={movie.title}
        />
        <p className="description-movie">{movie.overview}</p>
        <div className="vote-movie">
          <span>{movie.vote_average}</span>
          <CircularProgressbar
            value={normalizedVote}
            styles={buildStyles({
              pathColor: "#FE0A3D",
              trailColor: "#0F1014",
            })}
          />
        </div>
      </div>
    </main>
  );
}

export default MoviePage;
