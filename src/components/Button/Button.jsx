import { Container } from './styles';

export function Button ({children, onClick, type, state, size}){

  return(             
  <Container background={type} state={state} size={size} onClick={onClick}>
    {children}
  </Container>
  )

};

