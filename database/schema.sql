CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT UNIQUE,
  password TEXT
);

CREATE TABLE health_records (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  symptoms TEXT,
  prediction TEXT
);
