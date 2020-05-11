const mysql = require('mysql');

module.exports = class DB {
    constructor() {
        this.connection = mysql.createConnection({
            host: process.env.DATABASE_HOST,
            user: 'root',
            database:'walking_bookshelf',
            port: process.env.MYSQL_PORT
        })
    }
    
}