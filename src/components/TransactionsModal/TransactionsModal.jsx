import { useState, useContext } from 'react';

import { TransactionsContext } from '../../TransactionsContext';

import Modal from 'react-modal';
import { Button } from '../Button/Button';
import { Container, ContainerTypesTransacation, customStyles, CloseModal } from './styles';
import closeImg from '../../assets/button-close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

export function TransactionsModal ({isOpen, onRequestClose}) {

  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');


  const {createTransaction} = useContext(TransactionsContext)

  async function handleCreateNewTransaction (e) {
      e.preventDefault();

      await createTransaction([title, value, type, category,]);

      setTitle('');
      setValue('');
      setType('');
      setCategory('');

      onRequestClose();

    };


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >

      <CloseModal className="closeModal" type="button" onClick={onRequestClose}>
        <img src={closeImg} alt="Fechar Modal" />
      </CloseModal>


      <h2>Cadastrar Transação</h2>
      <Container>
        <input
          placeholder="Titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <ContainerTypesTransacation>
          <button 
            type="button" 
            className={type === 'deposit' ? 'deposit' : ''}
            onClick={() => {setType('deposit');}}
          >
            <img src={incomeImg} alt="Entrada"></img>
            <span>Entrada</span>

          </button>

          <button 
            type="button" 
            className={type === 'withdraw' ? 'withdraw' : ''}
            onClick={() => {setType('withdraw');}}
          >
            <img src={outcomeImg} alt="Saida"></img>
            <span>Saida</span>

          </button>
        </ContainerTypesTransacation>
        <input
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <Button type="confirm" onClick={handleCreateNewTransaction}>Cadastrar</Button>
      </Container>
    </Modal>
  )
}