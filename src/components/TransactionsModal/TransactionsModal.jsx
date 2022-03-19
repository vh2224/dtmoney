import { useState } from 'react';

import Modal from 'react-modal';
import { Button } from '../Button/Button';
import { Container, customStyles } from './styles';
import closeImg from '../../assets/button-close.svg'
import { api } from '../services/api';

export function TransactionsModal ({isOpen, onRequestClose}) {

  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');


  function handleCreateNewTransaction (e) {
      e.preventDefault();
      const data = [
        title,
        value,
        type,
        category
      ]
      console.log(data)

      api.post ('/new-transaction', data)

    };


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >

      <button type="button" onClick={onRequestClose}>
        <img src={closeImg} alt="Fechar Modal" />
      </button>


      <h2>Cadastrar Transação</h2>
      <Container onSubmit={handleCreateNewTransaction}>
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
        <input
          placeholder="Tipo"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <input
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <Button margin="top" type="register" size="medium" state="full">Cadastrar</Button>
      </Container>
    </Modal>
  )
}