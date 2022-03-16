import styled from 'styled-components';
import { Tokens } from '../Tokens/Tokens';


export const Container = styled.button`

  color: var(--white);
  background: ${({background}) => Tokens.types[background]};
  border: none;
  border-radius: 5px;
  padding: 0.8rem 2rem;
  width: ${({state}) => Tokens.states[state]};
  transition: filter 0.25s;
  font-size: ${({size}) => Tokens.sizes[size]};

  &:hover {
    filter: brightness(0.90); 
    }
`;
