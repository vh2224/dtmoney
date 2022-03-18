import { Container } from './styles';

export function Button ({children, onClick, type, state, size, margin}){

  return(             
  <Container background={type} state={state} size={size} margin={margin} onClick={onClick}>
    {children}
  </Container>
  )

};

