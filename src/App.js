import { useState } from 'react';
import { Cards } from "./components/Cards/cards";
import { Header } from "./components/Header/header";
import { Transaction } from "./components/Transactions";
import { TransactionsModal } from "./components/TransactionsModal/TransactionsModal"
import  TransactionsProvider  from './TransactionsContext';
import { GlobalStyles } from "./styles/global";
import Modal from 'react-modal';


Modal.setAppElement('#root');

function App() {

  const [openModalTransaction, setOpenModalTransaction] = useState(false);

    function openModalNewTransaction() {
      setOpenModalTransaction(true);
    }

    function closeModalNewTransaction() {
      setOpenModalTransaction(false);
    }

  return (
    <TransactionsProvider>
      <Header onClickNewTransaction={openModalNewTransaction}/>
      <Cards />
      <Transaction />
      <TransactionsModal
        isOpen={openModalTransaction}
        onRequestClose={closeModalNewTransaction}
      />
      <GlobalStyles />
    </TransactionsProvider>
  );
}

export default App;
