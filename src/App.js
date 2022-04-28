import styled from "styled-components"
import Header from "./components/Header";
import Title from "./components/Title";
import AppBrowser from "./components/AppBrowser";
import AppDesc from "./components/AppDesc";
import Features from "./components/Features";
import Ethereum from "./components/Ethereum";

function App() {
  return (
    <Container>
      <Header/>
      <Title/>
      <ContainerApp>
        <AppBrowser/>
        <AppDesc/>
      </ContainerApp>
      <Features/>
      <Ethereum/>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #28292E;
  
`
const ContainerApp = styled.div`
  display: flex;
  margin-top: 20px;
  align-content: center;
  justify-content: center;
`
export default App;
