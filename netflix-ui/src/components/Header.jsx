import React from 'react'
import logo from '../assets/logo.png'
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'

function Header(props) {
  const navigate = useNavigate();
  return (
    <Container className='flex a-center j-between'>  {/*j-justify conteny, a-align items */}
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Log In" : "Sign Up"}
      </button>
    </Container>
  )
}

export default Header;
const Container = styled.div`
 padding: 0 4rem;
 .logo{
  img{
   height: 5rem;
  }
 }
button{
padding: 0.5rem 1rem;
background-color: #e50914;
border:none;
cursor:pointer;
color:white;
border-radius:0.2rem;
font-weight:bolder;
font-size:1.05rem;
}
`;