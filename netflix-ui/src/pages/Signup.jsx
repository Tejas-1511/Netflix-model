import React, { useState } from 'react'
import styled from "styled-components"
import BackgroundImage from "../components/BackgroundImage";
import Header from '../components/Header';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import { useNavigate } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate();
  const handleSignin=async ()=>{
    try {
      const {email,password}=formvalues;
      //await createUserWithEmailAndPassword(firebaseAuth,email,password);
      await createUserWithEmailAndPassword(firebaseAuth,email,password)
    } catch (error) {
      console.log(error);
    }
  }
  const [showPassword, setShowPassword] = useState(false);
  const [formvalues,setFormValues]=useState({
    email:"",
    password:"",
  })
  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser) navigate("/");
  })
  return (
    <Container>
      <BackgroundImage showPassword={showPassword} />
      <div className="content">
        <Header login />
        <div className='body flex column a-center j-center'>
          <div className='text flex column'>
            <h1>Unlimited Movies, TV Shows and many more</h1>
            <h4>Watch Anywhere, Watch Anytime</h4>
            <h6>Ready To Watch? Enter your Email to begin your Journey of Entertainment</h6>
          </div>
          <div className="form">
            <input type="email" placeholder='Email Address' name='email' value={formvalues.email} onChange={(e)=>setFormValues({...formvalues,[e.target.name]:e.target.value,})}/>
            {showPassword && <input type="password" placeholder='Password' name='password' value={formvalues.password} onChange={(e)=>setFormValues({...formvalues,[e.target.name]:e.target.value,})}/>}
            {!showPassword && <button onClick={() => setShowPassword(true)}>Get Started</button>}
          </div>
          <button onClick={handleSignin}>Sign Up</button>
        </div>
      </div>
    </Container>
  )
}

export default Signup
const Container = styled.div`
 position:relative;
 .content{
  position: absolute;
  top:0;
  left:0;
  background-color: rgba(0,0,0,0.5);
  height:100vh;
  width:100vw;
  display:grid;
  grid-template-rows: 15vh 85vh;
  .body{
   gap:1rem;
   .text{
    gap:1rem;
    text-align:center;
    font-size:2rem;
    h1{
     padding:0 25rem;
    }
   }
   .form{
    display:grid;
    grid-template-columns: ${({ showPassword }) => showPassword ? "1fr 1fr" : "2fr 1fr"};
    width:60%;
    input{
     color:black;
     border:none;
     padding:1.5rem;
     font-size:1.2rem;
     border:1px solid black;
     &:focus{
      outline:none;
     }
    }
    button{
     padding: 0.5rem 1rem;
     background-color: #e50914;
     border:none;
     cursor:pointer;
     color:white;
     font-weight:bolder;
     font-size:1.05rem;
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
  }
 }
`;