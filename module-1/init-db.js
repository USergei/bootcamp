const mysql = require('mysql')
require('dotenv').config()
const {DB_HOST, DB_ROOT_USER, DB_PWD} = process.env

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_ROOT_USER,
  password: DB_PWD
})

const queryStr = [`CREATE USER IF NOT EXISTS 'fashion'@'%' IDENTIFIED BY '123123';`,
  `CREATE DATABASE IF NOT EXISTS fashion;`,
  `GRANT ALL PRIVILEGES ON fashion.* to 'fashion'@'%' IDENTIFIED BY '123123';`,
  `USE fashion;`,
  `CREATE TABLE contacts (
    id INT auto_increment,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    primary key (id)
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
