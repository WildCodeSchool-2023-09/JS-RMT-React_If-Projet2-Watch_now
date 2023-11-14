const express = require("express");
const client = require("../database/client");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import movieControllers module for handling movie-related operations

// Route to get a list of movies
router.get("/movies", (req, res) => {
  client
    .query("select * from movie")
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});
// Route to get a specific movie by ID
// router.get("/movies/:id", movieControllers.read);
router.get("/movies/:id", (req, res) => {
  client
    .query("select * from movie where id = ?", [req.params.id])
    .then(([movie]) => {
      if (movie[0] != null) {
        res.json(movie[0]);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

// Route to add a new movie
// router.post("/movies", movieControllers.add);

/* ************************************************************************* */

module.exports = router;
