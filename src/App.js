//import styled from 'styled-components';

import { Cards } from "./components/Cards/cards";
import { Header } from "./components/Header/header";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <>
      <Header />
      <Cards />
      <GlobalStyles/>
    </>
  );
}

export default App;
