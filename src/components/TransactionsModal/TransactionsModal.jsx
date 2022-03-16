import Modal from 'react-modal';
import { Button } from '../Button/Button';
import { Container, customStyles } from './styles';

export function TransactionsModal ({isOpen, onRequestClose}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      <h2>Cadastrar Transação</h2>
      <Container>
        <input
          placeholder="Titulo"
        />
        <input
          type="number"
          placeholder="Valor"
        />
        <input
          placeholder="Categoria"
        />
        <Button type="register" size="medium" state="full">Cadastrar</Button>
      </Container>
    </Modal>
  )
}