import React from 'react'
import Signup from '../Signup/SignupForm'
import ForgotPassword from '../ForgotPassword/FPassword'
import '../UserForms.css'

const LoginForm = () => {
  return (
    <div>
        <form action="Signup.html" method="get" className="commonform loginform">
      <div>
        <div id="h1div">
          <h3>ENTER YOUR CREDENTIALS</h3>
        </div>
        <div id="formpadding" className="_2Use">
          <div className="_2label">
            <label htmlFor="Username" className="_focus">Username</label>
          </div>
          <input type="text" id="Username" name="Username" className="_inp" />
        </div>
        <div className="_2Use">
          <div className="_2label">
            <label htmlFor="Password" className="_focus">Password</label>
          </div>
          <input type="password" id="Password" name="Password" className="_inp" />
        </div>
        <div>
          <button formAction="" className="_2Buttons1" id="button1" type="button">SIGN IN</button>
        </div>
        <div className="linkmar">
          <a href={ForgotPassword} className="_2Links">Forgot Password?</a>
        </div>
        <div>
          <button formAction={Signup} className="_2Buttons1 buttontext" id="button2" type="submit">REGISTER HERE</button>
        </div>
      </div>
    </form>
    </div>
  )
}

export default LoginForm