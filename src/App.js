import { useState } from 'react';
import { Cards } from "./components/Cards/cards";
import { Header } from "./components/Header/header";
import { Transaction } from "./components/Transactions";
import { GlobalStyles } from "./styles/global";
import Modal from 'react-modal';


Modal.setAppElement('#root');

function App() {

  const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }

    function closeModal() {
      setIsOpen(false);
    }



  return (
    <>
      <Header openNewModalTransaction={openModal}/>
      <Cards />
      <Transaction />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h2>Testando Modal</h2>
      </Modal>
      <GlobalStyles />
    </>
  );
}

export default App;
