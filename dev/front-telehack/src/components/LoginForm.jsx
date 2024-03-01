import React from 'react'
import '../styles/form.css'
import { Link } from 'react-router-dom'



const LoginForm = () => {
  return (
    <div className='login-container'>
      <h2 className="title">Login</h2>
      <h3>Enter your Account Details</h3>
      <form action="">
        <input placeholder='Username' type='text' name='username ' id='username' />
        <div className='password'>
        <input placeholder='Password' type='password' name='password' id='password' />
        <a href="#" className='forget'>Forget Password</a>
        </div>
        <button className='submit-btn' type="submit">login</button>
      </form>
      <div  className='option-signup'>
        <p>Don't have an account ?</p>
        <Link to="SignUp" className='submit-btn sm-btn'>Sign Up</Link>
      </div>
    </div>
  )
}

export default LoginForm