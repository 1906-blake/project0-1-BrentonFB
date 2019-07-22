CREATE TABLE positions (
    positionid SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE users (
   userid SERIAL PRIMARY KEY,
   username TEXT NOT NULL UNIQUE,
   pass TEXT NOT NULL,
   firstname TEXT NOT NULL,
   lastname TEXT NOT NULL,
   email TEXT NOT NULL,
   position INTEGER REFERENCES positions(positionid)
);

CREATE TABLE reimbursementstatus (
    statusid SERIAL PRIMARY KEY,
    statusdesc TEXT NOT NULL UNIQUE
);

CREATE TABLE reimbursementtype (
    typeid SERIAL PRIMARY KEY,
    typeof TEXT NOT NULL UNIQUE
);

CREATE TABLE reimbursement (
    reimbursementid SERIAL PRIMARY KEY,
    author INTEGER REFERENCES users(userid),
    amount NUMERIC (8,2),
    datesubmitted TIMESTAMP,
    dateresolved TIMESTAMP,
    resolver INTEGER REFERENCES users(userid),
    reimbursementstatus INTEGER REFERENCES reimbursementstatus(statusid),
    reimbursementtype INTEGER REFERENCES reimbursementtype(typeid)
);