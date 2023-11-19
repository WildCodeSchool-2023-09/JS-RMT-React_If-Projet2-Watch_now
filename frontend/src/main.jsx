import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

import App from "./App";
import Home from "./pages/Home";
import AllMovies from "./pages/AllMovies";
import MoviePage from "./pages/MoviePage";

import "./Index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        loader: ({ request }) => {
          const query = new URL(request.url).search;

          return axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/api/movies${query}`)
            .then((res) => res.data)
            .catch((err) => console.error(err));
        },
      },
      {
        path: "/movies",
        element: <AllMovies />,
        loader: ({ request }) => {
          const query = new URL(request.url).search;

          return axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/api/movies${query}`)
            .then((res) => res.data)
            .catch((err) => console.error(err));
        },
      },
      {
        path: "/movies/:movieId",
        element: <MoviePage />,
        loader: ({ params }) => {
          return axios
            .get(
              `${import.meta.env.VITE_BACKEND_URL}/api/movies/${params.movieId}`
            )
            .then((res) => res.data)
            .catch((err) => console.error(err));
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
