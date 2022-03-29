import { useEffect, useState } from "react";
import { api } from "./components/services/api";
import { createContext } from "react";

export const TransactionsContext = createContext({});


function TransactionsProvider ({children}) {

  const [newTransactions, setNewTransactions] = useState([]);

  useEffect (() =>  {
    api.get('/transactions')
      .then(response => setNewTransactions(response.data));
  }, []);
  
  async function createTransaction(transaction) {

    const response = await api.post ('/new-transaction', transaction);

    const newTransaction = response.data[0]

    setNewTransactions([...newTransactions, newTransaction]);

  }


  return (
    <TransactionsContext.Provider value={{newTransactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )

};

export default TransactionsProvider;