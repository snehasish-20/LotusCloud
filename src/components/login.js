import React from 'react'
import {Button} from 'react-bootstrap'
import loginImg from '../images/pablo-sign-in.png'

//Component for login page
function Login({setScreen}) {
  return (
    <div id="login">
        <div className="LoginContainer">
            <h5>TweetX</h5>
            <Button variant="outline-danger" className='changeScreen' onClick={()=>setScreen("signup")/*changing the screen state*/}>Create account</Button>
            <div id="Form">
                <h1>Login</h1>
                <input type="email" name="email" className='inputs' placeholder='Email' required/>
                <input type="password" name="password" className='inputs' placeholder='Password' required/>
                <div id="formFooter">
                    <a href="#forgot">Forgot password?</a>
                    <Button variant="danger" type='submit' className='loginBttn'onClick={()=>setScreen("dashboard")/*changing the screen state*/}>Login</Button>
                </div>
            </div>
        </div>
        <div className="LoginImgContainer">
            <img src={loginImg} alt="Signin" className="signinImg"/>
        </div>
    </div>
  )
}

export default Login