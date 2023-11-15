import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/Filters.css";

function Filters() {
  const [genres, setGenres] = useState([]);
  const [scores, setScore] = useState([]);
  const [years, setYear] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedScore, setSelectedScore] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/genres`)
      .then((res) => setGenres(res.data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/scores`)
      .then((res) => setScore(res.data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/year`)
      .then((res) => setYear(res.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="filters">
      <select
        className="select-genre"
        name="genre"
        id="genre"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">Genres</option>
        {genres.map((genre) => (
          <option key={genre.genre_ids} value={genre.genre_ids}>
            {genre.genre_ids}
          </option>
        ))}
      </select>
      <select
        className="select-year"
        name="year"
        id="year"
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
      >
        <option value="">Year</option>
        {years.map((year) => (
          <option key={year.release_date} value={year.release_date}>
            {year.release_date}
          </option>
        ))}
      </select>
      <select
        className="select-score"
        name="score"
        id="score"
        value={selectedScore}
        onChange={(e) => setSelectedScore(e.target.value)}
      >
        <option value="">Scores</option>
        {scores.map((score) => (
          <option key={score.vote_average} value={score.vote_average}>
            {score.vote_average}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
