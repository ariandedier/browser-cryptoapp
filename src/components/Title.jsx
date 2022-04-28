import React from 'react'
import styled from "styled-components"

const Title = () => {
  return (
    <Container>
      <h1>A crypto wallet you'll <span>love</span></h1>
      <p>Phantom makes it safe & easy for you to store, send, recieve,<br/>
      stake, and swap tokens on the Solana blockhain</p>
      <Button>Download</Button>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 15px;
  gap:10px;

  h1{
    font-size: 50px;
  }
  p{
    font-weight: 500;
    text-align: center;
    color: #A5A6AB;
  }
`
const Button = styled.button`
  cursor: pointer;
  background-color: #FA9905;
  width: 100px;
  padding: 10px;
  color: #FBFDFC;
  border: none;
  border-radius: 20px;
  font-weight: 700;
`

export default Title