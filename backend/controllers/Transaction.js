const Database = require('./Database');

module.exports = class Transaction {

  constructor() {
  };

  getAll(res) {

    const db = new Database();
    db.query(res, 'SELECT * FROM transactions');
  }

  setTransaction(data, res) {


    const db = new Database();
    db.query(res, 'INSERT INTO transactions (title, value, category) VALUES (?,?,?)', data);
  }

}