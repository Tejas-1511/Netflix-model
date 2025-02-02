import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import BackgroundImage from '../assets/home.jpg';
import MovieLogo from '../assets/homeTitle.webp';
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { fetchMovies, getGenres } from '../store';

function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies);

  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ type: "all" }));
  },[genresLoaded])

  useEffect(() => {
    dispatch(getGenres());
  },[]);

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="hero">
        <img src={BackgroundImage} className='background-image' alt="" />
        <div className="container">
          <div className="logo">
            <img src={MovieLogo} alt="" />
          </div>
          <div className="buttons flex">
            <button className="flex a-center j-center" onClick={() => navigate("/player")}><FaPlay /> Play</button>
            <button className="flex a-center j-center"><AiOutlineInfoCircle /> More Info</button>
          </div>
        </div>
      </div>
      <Slider movies={movies}/>
    </Container>
  )
}

export default Netflix;
const Container = styled.div`
background-color:black;
.hero{
  position:relative;
  .background-image{
    filter:brightness(60%);
  }
  img{
    height:100vh;
    width:100vw;
  }
  .container{
    position:absolute;
    bottom:5rem;
    .logo{
      img{
        margin-left:5rem;
        height:100%;
        width:100%;
      }
    }
    .buttons{
      margin:5rem;
      gap:2rem;
      button{
        gap:1rem;
        font-size:1.4rem;
        border-radius:0.2rem;
        padding:0.5rem;
        padding-left:2rem;
        padding-right:2.4rem;
        border:none;
        cursor:pointer;
        transition:0.3s ease-in-out;
        &:hover{
          opacity:0.8;
        }
        &:nth-of-type(2){
           background-color:rgba(109,109,110,0.7);
           color:white;
           svg{
            font-size:1.8rem;
           }
        }
      }
    }
  }
}`
