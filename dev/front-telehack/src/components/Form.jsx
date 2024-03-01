import React from 'react'
import '../styles/form.css'
import signupSvg from '../assets/signupVector.png';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const Form = () => {
  return (
    <div className='form-container'>
      <div className='leftForm'>
        <h1>Costumer Space</h1>
        <img src={signupSvg} alt="" />
      </div>
      <div className="rightForm">
        <LoginForm />  
      </div>      
    </div>
  )
}

export default Form