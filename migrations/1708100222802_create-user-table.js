/* eslint-disable camelcase */
const pg = require("../config/db");
exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
  CREATE TABLE USERS(
    id SERIAL PRIMARY KEY,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(256) NOT NULL,
    bio TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  )
  `);
};

exports.down = (pgm) => {};
