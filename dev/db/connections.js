// require mysql2
const mysql = require('mysql2');
// create a connection to sqlDB
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Minecraft30322001',
        database: 'company_db'
    },
    console.log('Connected to company_db')
);

module.exports = db;