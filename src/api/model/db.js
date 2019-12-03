'user strict';

const mysql = require('mysql');
const util = require('util')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'phong9876',
    database: 'todo'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('db connected')
});

module.exports = {
    query(sql, args) {
        return util.promisify(connection.query)
            .call(connection, sql, args);
    },
    close() {
        return util.promisify(connection.end).call(connection);
    }
}; 