import styled from 'styled-components';


export const Container = styled.button`

  color: var(--white);
  background-color: var(--blue-light);
  border: none;
  border-radius: 5px;
  padding: 0.8rem 2rem;
  transition: filter 0.25s;
  
  &:hover {
    filter: brightness(0.90); 
    }

  &.type-confirm {
    background-color: var(--green);
    width: 100%;
    margin-top: 1rem;
    font-size: 18px;
    line-height: 1rem;
    padding: 1.5rem 1rem;
  }
`;
