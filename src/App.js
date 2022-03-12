import { useState } from 'react';
import { Cards } from "./components/Cards/cards";
import { Header } from "./components/Header/header";
import { Transaction } from "./components/Transactions";
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
    <>
      <Header onClickNewTransaction={openModalNewTransaction}/>
      <Cards />
      <Transaction />
      <Modal
        isOpen={openModalTransaction}
        onRequestClose={closeModalNewTransaction}
      >
        <h2>Testando Modal</h2>
      </Modal>
      <GlobalStyles />
    </>
  );
}

export default App;
