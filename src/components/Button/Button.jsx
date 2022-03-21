import { Container } from './styles';

export function Button ({children, onClick, type}){

  return(             
  <Container className={`type-${type}`} onClick={onClick}>
    {children}
  </Container>
  )

};

