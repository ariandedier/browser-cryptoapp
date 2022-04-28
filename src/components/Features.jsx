import React from 'react'
import styled from "styled-components"


const Features = () => {
  return (
    <Container>
        <div className="text">
        <h1>All the features you want</h1>
        <p>Everything you need to traverse the Solana ecosystem</p>
        </div>

        <Containers>
            <div className="line">
            <div className="card">
                <h1>Non-Custodial</h1>
                <h3>We never have access to any of your data or funds. Ever</h3>
            </div>
            <div className="card">
                <h1>Token Swasp</h1>
                <h3>Use our built-in DEX to safely swap tokens at the best prices, instantly.</h3>
            </div>
            <div className="card">
                <h1>NFTs and Collectibles</h1>
                <h3>We've taken special care to make sure your NFTs look great!</h3>
            </div>
            </div>
            <div className="line">
            <div className="card">
                <h1>Ledger Support</h1>
                <h3>For additional security you can connect your hardware wallet.</h3>
            </div>
            <div className="card">
                <h1>Web3 Support</h1>
                <h3>Explore the world of blockchain applications built to Solana</h3>
            </div>
            <div className="card">
                <h1>SOL Staking</h1>
                <h3>Earn rewards by stacking directly inside your wallet.</h3>
            </div>
            </div>
            
        </Containers>
    </Container>
  )
}
const Containers = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    gap:20px;
    div.line{
        display: flex;
        gap:20px;
    }
    div.card{
        background-color: #323338;
        box-sizing: border-box;
        width: 350px;
        height: 200px;
        border-radius: 10px;
        padding: 30px;
        h1{
            margin-top: 30px;
            font-size: 20px;
            font-weight: 500;
        }
        h3{
            font-size: 15px;
            font-weight: 300;
            color: #A5A6AB;
        }
    }
`

const Container = styled.div`
  margin-top:100px;
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

export default Features