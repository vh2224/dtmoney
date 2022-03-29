import { useContext } from 'react';
import { Transactions } from "./styles";
import { TransactionsContext } from '../../TransactionsContext';

export function Transaction () {

  const {newTransactions} = useContext(TransactionsContext);

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
            newTransactions.map(transaction => {

              return (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>{transaction.type === 'withdraw' ? '-' : '+'} {new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(transaction.value)}</td>
                  <td>{transaction.category}</td>
                  <td>{dateFormat(transaction.created_at)}</td>
                </tr>
              )

            })
            :
            <tr>
              <td>
                Não existem transações.
              </td>
            </tr>
        }
        </tbody>
      </table>
    </Transactions>
  );

}