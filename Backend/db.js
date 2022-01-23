const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "admin123",
  database: "groupmania",
  host: "localhost",
  port: "5422",
});

module.exports = pool;
