import React from 'react'
import '../UserForms.css'

const ChangePassword = () => {
  return (
    <div>
        <form action="" method="get" className="commonform change_form">
      <div className="article">
        <article>Enter the passcode received through the mail or text message and Change the password</article>
      </div>

      <div className="forgotform">
        <div className="forgotinputdiv" id="enterpassword">
          <label htmlFor="oldpassword" className="_focus">Enter Password</label>
        </div>
        <div>
          <input type="text" id="oldpassword" name="oldpassword" className="for_inp" />
        </div>
      </div>

      <div className="forgotform">
        <div className="forgotinputdiv">
          <label htmlFor="newpassword" className="_focus">Enter your new password</label>
        </div>
        <div>
          <input type="password" id="newpassword" name="newpassword" className="for_inp" />
        </div>
      </div>

      <div className="forgotform">
        <div className="forgotinputdiv">
          <label htmlFor="confirmpassword" className="_focus">Confirm password</label>
        </div>
        <div>
          <input type="password" id="confirmpassword" name="confirmpassword" className="for_inp" />
        </div>
      </div>

      <div className="buttonalignment">
        <button className="buttontext _2Buttons1"><a href="">SUBMIT</a></button>
      </div>
    </form>
    </div>
  )
}

export default ChangePassword