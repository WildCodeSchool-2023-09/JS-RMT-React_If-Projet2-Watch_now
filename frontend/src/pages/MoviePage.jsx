import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import "../style/MoviePage.css";

function MoviePage() {
  const movie = useLoaderData();

  return (
    <main className="main-moviePage">
      <div>
        <Link to="/">Home</Link>
        <h1>Details du film</h1>

        <h2>{movie.title}</h2>
        <div className="image-overlay-container">
          <img
            className="overlay-image"
            src={movie.backdrop_path}
            alt={movie.title}
          />
          <img src={movie.poster_path} alt={movie.title} />
          <ol>
            <li>{movie.genre_ids}</li>
            <li>{movie.release_date}</li>
            <li>{movie.vote_average}</li>
          </ol>
          <p className="overlay-content">{movie.overview}</p>
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div id="number">{movie.vote_average}</div>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
            >
              <circle cx="80" cy="80" r="70" />
            </svg>
          </div>

          <ol>
            <li>
              {/* <button>add to cart</button>
            </li>
            <li>
              <button>logo tv</button>
            </li>
            <li>
              <button>logo j'aime</button>
            </li>
            <li>
  <button>logo favori</button> */}
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
}

export default MoviePage;
