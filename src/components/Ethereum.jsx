import React from 'react'
import styled from "styled-components"
import {SiEthereum} from "react-icons/si"
import {BsArrowRight} from 'react-icons/bs'


const Ethereum = () => {
  return (
    <Container>
        <div className="title">
            <div className="logo">
            <SiEthereum size={50}/>
            </div>
            <div className="text">
            <h1>Join the Ethereum beta</h1>
            <h3>Sign up to join the Ethereum beta waitlist</h3>
            </div>
        </div>
        <div className="mail">
            <input placeholder='Email'/>
            <div className="button">
                <BsArrowRight size={20}/>
            </div>
        </div>
    </Container>
  )
}

const Container = styled.div`
    margin-top: 100px;
    display: flex;
    align-self: center;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    padding: 40px;
    box-sizing: border-box;
    background-color: #FA9905;
    width: 1100px;
    height: 200px;
    border-radius: 20px;
    div.title{
        display: flex;
        align-items: center;
        div.logo{
            background-color: #FFB84B;
            padding: 20px;
            border-radius: 50px;
        }
        div.text{
            margin-left: 10px;
            line-height: 20px;
            h1{
                font-weight: 500;
            }
            h3{
                font-weight:300;
            }
        }
    }
    div.mail{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
        input{
            border: none;
            border-radius: 20px;
            padding: 15px;
            width: 300px;
            background-color: #FFB84B;
            color: #FBFDFC;
        }
        div.button{
            cursor: pointer;
            width: 20px;
            height: 20px;
            background: rgb(255,189,88);
            background: linear-gradient(180deg, rgba(255,189,88,1) 0%, rgba(250,153,5,1) 80%);
            border-radius: 100px;
            padding: 10px;

        }
    }
`

export default Ethereum