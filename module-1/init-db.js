const mysql = require('mysql')
require('dotenv').config()
const {DB_HOST, DB_USER, DB_PWD} = process.env

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
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
console.log({DB_HOST, DB_USER, DB_PWD})
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

// connection.connect()

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

// connection.end();
// queryStr.forEach((element) => {
//   connection.query(element)
// })         
// .then(rows => {
//   console.log(rows)
//   // connection.end()
// })
// .catch(err => { 
//   throw new Error(err)  
// })

// mariadb.createConnection({host: 'mydb.com', user: 'myUser', password: 'myPwd'})
// .then(conn => {
//   conn.query("select 1", [2])
//     .then(rows => {
//       console.log(rows); // [{ "1": 1 }]
//       conn.end();
//     })
//     .catch(err => { 
//       //handle query error
//     });
// })
// .catch(err => {
//   //handle connection error
// });