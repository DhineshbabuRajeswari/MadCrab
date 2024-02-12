import React from 'react';
import Login from '../Login/LoginForm'
import '../UserForms.css'

const ForgotPasswordForm = () => {
  return (
    <div>
    <form action="" method="get" className="commonform forgot_form">
      <div className="article">
        <article>You will receive a text message and a mail, Check your inbox. Change the password by entering the passcode.</article>
      </div>
      <div className="forgotform">
        <div className="forgotinputdiv">
          <label htmlFor="oldpassword" className="_focus">Try Old Password</label>
        </div>
        <div>
          <input type="text" id="oldpassword" name="oldpassword" className="for_inp" />
        </div>
      </div>
      <div className="forgotform">
        <div className="forgotinputdiv">
          <label htmlFor="mobilenumber1" className="_focus">Enter Your Mobile Number</label>
        </div>
        <div>
          <input type="number" id="mobilenumber1" name="mobilenumber" className="for_inp" />
        </div>
      </div>
      <div className="forgotform">
        <div className="forgotinputdiv">
          <label htmlFor="email" className="_focus">Enter Your Email Address</label>
        </div>
        <div>
          <input type="text" id="email" name="email" className="for_inp" />
        </div>
      </div>
      <div className="buttonalignment">
        <button className="buttontext _2Buttons1"><a href={Login}>SUBMIT</a></button>
      </div>
    </form>
    </div>
)}

export default ForgotPasswordForm;
