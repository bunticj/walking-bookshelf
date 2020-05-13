const DBClass = require('./db_connect');
const db = new DBClass();

module.exports.books = () => {
    let prResolve;
    let pr = new Promise((resolve, reject) => {
        prResolve = resolve;
    });

    let sqlQuery = `SELECT * FROM books LIMIT 20`;
    db.connection.query(sqlQuery, (err, result) => {
        if (err) throw err;
        prResolve(result);
    });
    return pr;
}

module.exports.singleBook = (id) => {
    let prResolve;
    let pr = new Promise((resolve, reject) => {
        prResolve = resolve;
    });
    let sqlQuery = `SELECT * FROM books WHERE book_id="${id}"`;
    db.connection.query(sqlQuery, (err, result) => {
        if (err) throw err;
        prResolve(result);
    });
    return pr;
}

module.exports.newBook = (data) => {
    let prResolve;
    let pr = new Promise((resolve) => {
        prResolve = resolve;
    });
    let sqlQuery = `INSERT INTO books (owner_id, title, author, genre) VALUES (?,?,?,?) `;
    let params = [data.owner_id, data.title, data.author, data.genre];
    db.connection.query(sqlQuery, params, (err, result) => {
        if (err) throw err;
        prResolve(result);
    });
    return pr;
}