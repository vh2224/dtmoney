import { useEffect } from "react";
import { api } from "../services/api";
import { Transactions } from "./styles";


export function Transaction () {

  useEffect (() =>  {
    api.get('/transactions')
    .then(response => console.log(response.data));
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
          <tr>
            <td>Desenvolvimento de Software</td>
            <td className="deposit">R$ 1200,00</td>
            <td>Desenvolvimento</td>
            <td>10/03/2022</td>
          </tr>
          <tr>
            <td>Mensalidade Faculdade</td>
            <td className="withdraw">R$ 1200,00</td>
            <td>Faculdade</td>
            <td>10/03/2022</td>
          </tr>
        </tbody>
      </table>
    </Transactions>

  );

}