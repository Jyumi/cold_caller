var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'hrla33students'
});

connection.connect();

module.exports = connection;