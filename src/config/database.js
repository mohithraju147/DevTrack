const { Pool } = require("pg");

const pool = new Pool({
  user: "mohithraju",
  host: "localhost",
  database: "devtrack",
  port: 5432
});

module.exports = pool;