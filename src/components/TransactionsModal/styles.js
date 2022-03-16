import styled from 'styled-components';


export const Container = styled.form `

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