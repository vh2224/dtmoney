const mariadb = require('mariadb');

module.exports = class Database {

  constructor(){
    this.connection = mariadb.createPool({supportBigNumbers: true, bigNumberStrings: true, database: 'my_system', host: 'localhost', user:'root', password: 'admin', connectionLimit: 5}); 
  }

  query(res, query, props){
    this.connection.getConnection().then( async (conn) => {
      try{
        const result = await conn.query(query, props || []);
        if(res) {
          res.json(result);
        }
      }
      catch(e) {
        console.log(e);
      }  
    })
  }
};