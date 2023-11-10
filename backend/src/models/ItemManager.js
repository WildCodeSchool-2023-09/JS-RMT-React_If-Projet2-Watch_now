const AbstractManager = require("./AbstractManager");

class movieManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "movie" as configuration
    super({ table: "movie" });
  }

  // The C of CRUD - Create operation

  async create(movie) {
    // Execute the SQL INSERT query to add a new movie to the "movie" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title) values (?)`,
      [movie.title]
    );

    // Return the ID of the newly inserted movie
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific movie by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the movie
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all movies from the "movie" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of movies
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing movie

  // async update(movie) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an movie by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = movieManager;
