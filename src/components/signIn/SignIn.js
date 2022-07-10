import React from 'react'
import './sign.css'
import {Link} from 'react-router-dom'
function SignIn() {
  return (
    <>
        <div className='parents'>
        <div><p className='logo'>Sign In</p></div>
        <div ><input className='txtEmail' type="text" placeholder='Enter Your Email'/></div>
        <div ><input className='txtPass' type="password" placeholder='Enter Your Password'/></div>
        <div><button className='btnSign'>SignIn</button></div>
        <Link to='signin/signup'><div><p style={{marginLeft:"30px"}}>Don't have any account, SignUp</p></div></Link>
        </div>
    </>
  )
}

export default SignIn