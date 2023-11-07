import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>C'est moi le Home</h1>
      <br />
      <Link to="/all-movies">Browse Movies</Link>
    </div>
  );
}

export default Home;
