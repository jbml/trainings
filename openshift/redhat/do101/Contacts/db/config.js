require('dotenv').config();
const DB_CONFIG = process.env.DB_CONFIG || 'postgresql://userV4N:EABgVRTo8MWEqnCf@localhost:5432/mydb';
const { Pool } = require('pg');

const pgconn = new Pool({
    connectionString: DB_CONFIG,
    ssl: false,
});
  
module.exports = { pgconn }