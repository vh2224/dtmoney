const mariadb = require('mariadb');

module.exports = class Database {

  constructor(){
    this.connection = mariadb.createPool({database: 'my_system', host: 'localhost', user:'root', password: 'admin', connectionLimit: 5}); 
  }

  query(res, query, props){
    this.connection.getConnection().then( async (conn) => {
      const result = await conn.query(query, props || []);
      res.json(result);
    })
  }

};