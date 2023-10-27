const express = require("express");
const client = require("../database/client");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
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
// Route to get a specific item by ID
// router.get("/items/:id", itemControllers.read);
router.get("/movies/:id", itemControllers.read, (req, res) => {
  client
    .query("select * from movie where id = ?")
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

// Route to add a new item
// router.post("/items", itemControllers.add);

/* ************************************************************************* */

module.exports = router;
