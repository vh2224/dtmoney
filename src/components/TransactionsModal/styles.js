import styled from 'styled-components';
import { darken, transparentize } from 'polished';


export const Container = styled.form `

  padding-top: 2rem;

  input {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    border-radius: 0.25rem;
    border: 2.5px solid #D7D7D7;
    background-color: #E7E9EE;

    color: var(--text-body);

    line-height: 1rem;
    font-weight: 400;


    & + input {
      margin-top: 1rem;
    }

  }

`;

export const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
  content: {
    width: '100%',
    maxWidth: '576px',
    background: 'var(--background)',
    padding: '3rem',
    position: 'relative',
    borderRadius: '0.25rem',
  }
};


export const ContainerTypesTransacation = styled.div`

  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;

  button {
    height: 3.5rem;
    border-radius: 0.25rem;
    border: 2.5px solid #D7D7D7;
    background-color: transparent;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &:hover {
      border-color: ${darken(0.1, '#D7D7D7')};
    }

    &.deposit {
      background-color: ${transparentize(0.7, '#33CC95')};
      border-color: ${transparentize(0.8 , '#33CC95')};
    }

    &.withdraw {
      border-color: ${transparentize(0.8 , '#E54E4D')};
      background-color: ${transparentize(0.7 , '#E54E4D')};
    }

    img {
      height: 1.5rem;
      width: 1.5rem;
    }

    span {
      margin-left: 0.5rem;
    }
    
  }

`;


export const CloseModal = styled.button`

  position: absolute;
  right: 15px;
  top: 15px;
  border: none;
  background: transparent;

`;