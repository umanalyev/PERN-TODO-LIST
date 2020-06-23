const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "t0902103003",
  port: 5432,
  host: "localhost",
  database: "perntodo",
});

module.exports = pool;
