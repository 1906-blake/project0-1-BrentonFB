CREATE TABLE users (
   userId SERIAL PRIMARY KEY,
   username TEXT NOT NULL UNIQUE,
   pass TEXT NOT NULL,
   firstname TEXT NOT NULL,
   lastname TEXT NOT NULL,
   email TEXT NOT NULL,
   position INTEGER NOT NULL 
)

CREATE TABLE positions (
    positionId SERIAL PRIMARY KEY,
    position TEXT NOT NULL UNIQUE
)