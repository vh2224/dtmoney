const Database = require('./Database');

module.exports = class Transaction {

  constructor() {
  };

  getAll(res) {

    const db = new Database();
    db.query(res, 'SELECT * FROM transactions');
  }

  setTransaction(res, data) {

    const db = new Database();
    db.query(res, `INSERT INTO transactions (title, value, type, category) VALUES (?, ?, ?, ?)`, data);
  }

}