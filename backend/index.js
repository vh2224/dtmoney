const express = require('express');
const cors = require('cors');
const app = express();
const port = 3008;
const Transaction = require('./controllers/Transaction');


app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get('/transactions', (req, res) => {

  const transaction = new Transaction();

  transaction.getAll(res);

})

app.post('/new-transaction', (req, res) => {
  
  const transactions = new Transaction();
  const data = req.body;

  transactions.setTransaction(res, data)

});


app.listen(port, () => { 

  console.log(`Servidor iniciado na porta: ${port}`)

 });