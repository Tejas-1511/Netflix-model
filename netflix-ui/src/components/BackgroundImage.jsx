import React from 'react'
import styled from "styled-components"
import Background from "../assets/login.jpg"


function BackgroundImage() {
  return (
    <Container><img src={Background} alt="" /></Container>
  )
}

export default BackgroundImage
const Container = styled.div`
 height:100vh;
 width:100vw;
 img{
  height:100vh;
  width:100vw;
 }
`;