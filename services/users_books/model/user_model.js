const DBClass = require('./db_connect');
const db = new DBClass();
const bcrypt = require('bcryptjs');

module.exports.users = () => {
  let prResolve;
  let pr = new Promise((resolve, reject) => {
    prResolve = resolve;
  });

  let sqlQuery = `SELECT * FROM users LIMIT 20`;
  db.connection.query(sqlQuery, (error, result) => {
    if (error) console.log(error);
    prResolve(result);
  });
  return pr;
}

module.exports.singleUser = (id) => {
  let prResolve;
  let pr = new Promise((resolve, reject) => {
    prResolve = resolve;
  });
  let sqlQuery = `SELECT * FROM users WHERE user_id=${id};`;
  db.connection.query(sqlQuery, (error, result) => {
    if (error) console.log(error);
    prResolve(result);
  });
  return pr;
}

module.exports.newUser = (data) => {
  let prResolve;
  let pr = new Promise((resolve, reject) => {
    prResolve = resolve;
  });


    let sqlQuery = `INSERT INTO users (user_id, first_name, last_name) VALUES (?,?,?) `;
    let params = [data._id, data.first_name, data.last_name];
    db.connection.query(sqlQuery, params, (err, result) => {
      if (err) throw err;
      prResolve(result);    
    });


  return pr;
}