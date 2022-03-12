//import styled from 'styled-components';

import { Cards } from "./components/Cards/cards";
import { Header } from "./components/Header/header";
import { Transaction } from "./components/Transactions";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <>
      <Header />
      <Cards />
      <Transaction />
      <GlobalStyles />
    </>
  );
}

export default App;
