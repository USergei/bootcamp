require('dotenv').config()
const {DB_HOST, DB_ROOT_USER, DB_PWD} = process.env

const pg = require('knex')({
  client: 'pg',
  connection: {
    host: DB_HOST,
    user: DB_ROOT_USER,
    password: DB_PWD
  },
  searchPath: ['knex', 'public'],
})


// const connection = .createConnection({
//   host: DB_HOST,
//   user: DB_ROOT_USER,
//   password: DB_PWD
// })

const queryStr = [
  `DO $$
  BEGIN
  CREATE ROLE proseMirror LOGIN PASSWORD '123123' WITH CREATEDB;
  EXCEPTION WHEN duplicate_object THEN RAISE NOTICE '%, skipping', SQLERRM USING ERRCODE = SQLSTATE;
  END
  $$;`,
  `CREATE DATABASE IF NOT EXISTS proseMirror;`,
  `USE proseMirror;`,
  `CREATE TYPE status AS ENUM ('DRAFT', 'PUBLISHED', 'IN_REVIEW');`
  `CREATE TABLE author (
    id INT SERIAL,
    name VARCHAR(50) NOT NULL,
    registered_at TIMEDATE,
    PRIMARY KEY(id)
  );`,
  `CREATE TABLE document (
    id INT SERIAL,
    title TEXT,
    content JSON,
    current_status status,  
    created_at TIMEDATE,
    updated_at TIMEDATE,
    author_id INT REFERENCES author(id),
    PRIMARY KEY(id)
  );`,
  `CREATE TABLE author_document (
    author_id INT REFERENCES author(id) ON DELETE CASCADE,
    document_id INT REFERENCES document(id) ON DELETE CASCADE,
    contributor_id INT REFERENCES author(id) ON DELETE CASCADE,
    PRIMARY KEY(author_id, document_id) 
);`
]

connection.connect()

queryStr.forEach((element) => {
  connection.query(element, function (err) {
    if (err) {
        console.log(err)
      return 
    }
  })
}) 

connection.end()
