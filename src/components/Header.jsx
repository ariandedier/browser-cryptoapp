import React from 'react'
import styled from "styled-components"
import logo from '../assets/logo.png'
const Header = () => {
  return (
    <Container>
        <Head>
            <div className="logo">
                <img src={logo} alt="logo"/>
                <h1>Logo</h1>
            </div>
            <div className="links">
                <h3>Overview</h3>
                <h3>Security</h3>
                <h3>Blog</h3>
                <h3>Support</h3>
            </div>
        </Head>
    </Container>
  )
}

const Head = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px;
    div.logo{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
        cursor: pointer;
        img{
            width: 3rem;
        }
        h1{
            font-weight: 500;
        }
    }
    div.links{
        display: flex;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        gap:50px;
        color: #A5A6AB;
        h3{
            cursor: pointer;
            :hover{
            color: #FBFDFC;
            transition: 1s;
            }
        }
    }
`

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export default Header