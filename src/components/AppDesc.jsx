import React from 'react'
import styled from "styled-components"

const AppDesc = () => {
  return (
      <Container>
          <h1>Turn your browser <br/>
          into a crypto wallet</h1>
          <h3>Unlock a simple and secure way to<br/>
          interact with blockchain-based applications<br/>
          directly from your favorite web browser.</h3>
          <h2>Send and Recieve</h2>
          <h3>Collect NFTs</h3>
          <h3>Swap Tokens</h3>
      </Container>
    )
}

const Container = styled.div`
    position: absolute;
    margin-top: 60px;
    margin-left: 350px;
    h1{
        line-height: 50px;
        font-size: 45px;
    }
    h3{
        font-weight: 300;
    }
    h2{
        text-decoration: underline;
    }
`

export default AppDesc