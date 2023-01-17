

const mysql = require('mysql2/promise');

const connection = await mysql.createConnection({
  host: 'host',
  user: '',
  password: '',
  database: 'tds_account'
});

const login = document.getElementById("login").value;
const password = document.getElementById("password").value;

// Insert the data into the account table
const [result] = await connection.execute(
  'INSERT INTO account (login, password) VALUES (?, ?)',
  [login, password]
);
console.log(result.affectedRows); // Prints 1 if the data was inserted successfully
