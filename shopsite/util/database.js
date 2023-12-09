const mysql = require('mysql2');

const pool = mysql.create({
    host: 'localhost',
    user: 'root',
    database: 'item-product',
    password: 'tr@ilbl@zer123'
});

module.exports = pool.promise();