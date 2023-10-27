// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all movies from the database
    const movies = await tables.movie.readAll();

    // Respond with the movies in JSON format
    res.json(movies);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific movie from the database based on the provided ID
    const movie = await tables.movie.read(req.params.id);

    // If the movie is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the movie in JSON format
    if (movie == null) {
      res.sendStatus(404);
    } else {
      res.json(movie);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the movie data from the request body
  const movie = req.body;

  try {
    // Insert the movie into the database
    const insertId = await tables.movie.create(movie);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted movie
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
};
