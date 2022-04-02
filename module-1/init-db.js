const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'db', 
  user: 'root',
  password: '123123'
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

queryStr.forEach((element) => {
  connection.query(element, function (err) {
    if (err) {
        console.log(err)
      return 
    }
  })
})