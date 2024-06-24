import React from 'react'
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Netflix from './pages/Netflix';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Player from './pages/Player';
import Movies from './pages/Movies';
import ShowsTV from './pages/ShowsTV';
import UseLiked from './pages/UseLiked';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Netflix/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/signup" element={<Signup/>}/>
      <Route exact path="/player" element={<Player/>}/>
      <Route exact path="/movies" element={<Movies/>}/>
      <Route exact path="/tv" element={<ShowsTV/>}/>
      <Route exact path="/mylist" element={<UseLiked/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
// yarn add axios firebase styled-components react-icons react-redux @reduxjs/toolkit react-router-dom
//yarn add nodemon express cors mongoose