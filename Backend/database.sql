CREATE DATABASE groupmania;

CREATE TABLE users(
  email_id SERIAL PRIMARY KEY,
  password VARCHAR(200)
);