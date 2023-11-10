import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import AllMovies from "./pages/AllMovies";
import MoviePage from "./pages/MoviePage";
import MyList from "./pages/MyList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllMovies />,
    loader: () => {
      return axios
        .get("http://localhost:3310/api/movies")
        .then((res) => res.data)
        .catch((err) => console.error(err));
    },
  },
  {
    path: "/movies",
    element: <AllMovies />,
    loader: () => {
      return axios
        .get("http://localhost:3310/api/movies")
        .then((res) => res.data)
        .catch((err) => console.error(err));
    },
  },
  {
    path: "/movies/:movieId",
    element: <MoviePage />,
    loader: ({ params }) => {
      return axios
        .get(`http://localhost:3310/api/movies/${params.movieId}`)
        .then((res) => res.data)
        .catch((err) => console.error(err));
    },
  },
  {
    path: "/mylist",
    element: <MyList />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
