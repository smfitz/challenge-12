const mySQL = require('mysql2');
require('dotenv').config();
module.exports = connections;

// connect to mysql server
const connect = mysql.createConnection({
    host: 'localhost',
    port: '3000',
    user: process.env.DB_USER,
    password: process.send.DB_PASSWORD,
    database: process.env.DB_NAME
});