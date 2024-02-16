const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "pl",
  password: "admin@123",
  port: 5432,
});

pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});
pool.connect((err, client, done) => {
  if (err) {
    console.error("Error connecting to the database", err);
    return;
  }
  console.log("Connected to the database");
  done(); // Release the client back to the pool
});
module.exports = pool;
