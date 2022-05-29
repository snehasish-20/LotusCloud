import React from 'react'
import {Button} from 'react-bootstrap'
import loginImg from '../images/pablo-sign-in.png'

//Component for signup page
function Signup({setScreen}) {
  return (
    <div id="signUp">
        <div className="signUpContainer">
            <h5>TweetX</h5>
            <Button variant="outline-danger" className='changeScreen' onClick={()=>setScreen("login")/*changing the screen state*/}>Login</Button>
            <div id="signUpForm">
                <h1>Create account</h1>
                <input type="text" name="name" className='inputs' placeholder='Your name' />
                <input type="email" name="email"className='inputs' placeholder='Email'/>
                <input type="password" name="password" className='inputs' placeholder='Password'/>
                <input type="password" name="re-password" className='inputs' placeholder='Confirm password'/>
                <div id="signUpFormFooter">
                    <Button variant="danger" className='createBttn' onClick={()=>setScreen("login")/*changing the screen state*/}>Create</Button>
                </div>
            </div>
        </div>
        <div className="LoginImgContainer">
            <img src={loginImg} alt="Signin" className="signinImg"/>
        </div>
    </div>
  )
}

export default Signup