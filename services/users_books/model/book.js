const DBClass = require('./db_connect');
const db = new DBClass();

module.exports.books = () => {
    let prResolve;
    let pr = new Promise((resolve, reject) => {
        prResolve = resolve;
    });

    let sqlQuery = `SELECT * FROM books LIMIT 20`;
    db.connection.query(sqlQuery, (err, result) => {
        if (err) console.log(err);
        prResolve(result);

    });
    return pr;
}

module.exports.singleBook = (id) => {
    let prResolve;
    let pr = new Promise((resolve,reject) => {
        prResolve = resolve;
    });
    let sqlQuery = `SELECT * FROM books WHERE book_id="${id}"`;
    db.connection.query(sqlQuery, (error, result) => {
        if (error) console.log(error);
        prResolve(result);
      });
      return pr;
    }