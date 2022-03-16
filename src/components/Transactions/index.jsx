import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Transactions } from "./styles";


export function Transaction () {

  const [newTransactions, setNewTransactions] = useState([]);

  useEffect (() =>  {
    api.get('/transactions')
      .then(response => setNewTransactions(response.data));
  }, [])


  return (
    <Transactions>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>

          {newTransactions.length > 1 ?
            newTransactions.map((transaction) =>(
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className="deposit">R$ {transaction.value}</td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))
            :
            <p>Não Existem Dados.</p>
        }
        </tbody>
      </table>
    </Transactions>
  );

}