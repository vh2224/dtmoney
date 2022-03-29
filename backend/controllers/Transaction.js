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
    
    db.query(null, `INSERT INTO transactions (title, value, type, category, created_at) VALUES (?, ?, ?, ?, now())`, data);
    db.query(res, `SELECT * FROM transactions ORDER BY id DESC limit 1`, data);

  }

}