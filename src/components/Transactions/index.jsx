import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Transactions } from "./styles";


export function Transaction () {

  const [newTransactions, setNewTransactions] = useState([]);

  useEffect (() =>  {
    api.get('/transactions')
      .then(response => setNewTransactions(response.data));
  }, []);

  function dateFormat(date) {
    const dateObject = new Date(date);
    let  dateFormated = '';
    
    dateFormated +=`${dateObject.getDate().toString().padStart(2, '0')}/`;
    dateFormated +=`${dateObject.getMonth().toString().padStart(2, '0')}/`;
    dateFormated +=`${dateObject.getFullYear()} `;
    dateFormated +=`${dateObject.getHours().toString().padStart(2, '0')}:`;
    dateFormated +=`${dateObject.getMinutes().toString().padStart(2, '0')}`;

    return dateFormated;
  }


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

          {newTransactions.length >= 1 ?
            newTransactions.map((transaction) =>(

              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type === 'deposit' ? 'deposit' : 'withdraw'}>{transaction.type === 'withdraw' ? '-' : ''}R$ {transaction.value}</td>
                <td>{transaction.category}</td>
                <td>{dateFormat(transaction.created_at)}</td>
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