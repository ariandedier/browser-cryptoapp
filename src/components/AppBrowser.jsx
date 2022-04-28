import React from 'react'
import styled from "styled-components"
import frame1 from '../assets/frame1.png'
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import {BsFillCircleFill} from 'react-icons/bs'
import {SiBitcoin} from 'react-icons/si'
import {SiLitecoin} from 'react-icons/si'


const AppBrowser = () => {
  return (
      <Container>
          <img src={frame1} alt="frame1" />
          <AppContainer>
              <div className="head">
                    <HiOutlineMenuAlt1 size={25} style={{cursor:'pointer'}}/>
                    <h3>My Wallet</h3>
                    <BsFillCircleFill color='#04D067'/>
              </div>

              <div className="content">
                  <div className="money">
                        <h1>$23,420.80</h1>
                        <h3>+$1,589.22  <span>+13.3%</span></h3>
                  </div>
                  <div className="buttons">
                      <Button>Recieve</Button>
                      <Button>Send</Button>
                  </div>
                  <div className="transactions">
                      <div className='trans'>
                        <div className="icon">
                            <SiBitcoin size={40}/>
                        </div>
                        <div className="name">
                          <h1>Solana</h1>
                          <h3>320.424 SOL</h3>
                        </div>
                        <div className="mount">
                          <h1>$10,320.99</h1>
                          <h3>+$1,399.22</h3>
                        </div>
                      </div>
                      <div className='trans'>
                        <div className="icon">
                            <SiLitecoin size={40}/>
                        </div>
                        <div className="name">
                          <h1>Lite Coin</h1>
                          <h3>824.428 SOL</h3>
                        </div>
                        <div className="mount">
                          <h1>$4,120.50</h1>
                          <h3>+$598.77</h3>
                        </div>
                      </div>
                  </div>
              </div>

          </AppContainer>
      </Container>
    )
}

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: rgb(49,96,52);
    background: linear-gradient(180deg, rgba(15,42,16,1) 0%, rgba(27,28,34,1) 57%);
    border-radius: 10px;
    width: 300px;
    height: 320px;
    box-sizing: border-box;
    position: absolute;
    margin-left: 70px;
    margin-top: 100px;
    z-index: 2;
    div.head{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        background-color: #1B1C22;
        border-radius: 10px 10px 0px 0px;
        height: 40px;
        h3{
            font-weight: 500;
        }
    }
    div.content{
        display: flex;
        flex-direction: column;
        align-items: center;
        h1{
            font-weight: 500;
        }
        h3{
            font-weight: 300;
        }
        div.money{
            display: flex;
            flex-direction: column;
            align-items: center;
            line-height: 0px;
            h3{
                color: #04D067;
                font-size: 15px;
            }
            span{
                background-color: rgba(4,208,103,0.3);
                border-radius: 10px;
                padding: 3px;
            }
        }
        div.buttons{
                margin-top: 5px;
                display: flex;
                gap: 10px;
            }
        div.trans{
            cursor: pointer;
            margin-top: 10px;
            display: flex;
            flex-direction: row;
            position: relative;
            align-items: center;
            width: 290px;
            background-color: #323338;
            border-radius: 10px;
            line-height: 10px;
            justify-content: space-evenly;
            h1{
                font-size: 17px;
            }
            h3{
                text-align: right;
                font-size: 13px;
                color: #1B1C22;
            }
            div.mount{
                h3{
                    color: #04D067;
                }
            }
        }
    }
`

const Button = styled.button`
    padding: 10px;
    width: 100px;
    border: none;
    border-radius:10px;
    background-color: #323338;
    color: #FBFDFC;
    font-weight: 600;
    cursor: pointer;
`

const Container = styled.div`
    display: flex;
    box-sizing: border-box;
    position: relative;
    width: 1000px;
    height: 600px;
    background: rgb(255,189,88);
    background: linear-gradient(180deg, rgba(255,189,88,1) 0%, rgba(250,153,5,1) 52%);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.42);
    border-left: none;
    border-bottom: none;
    -webkit-box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.64); 
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.64);
    img{
        z-index: 1;
    }
`
export default AppBrowser