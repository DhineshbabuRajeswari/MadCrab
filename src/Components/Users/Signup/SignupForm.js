import React from 'react'
import '../UserForms.css'

const SignupForm = () => {
  return (
    <div>
        <form className="commonform signupform" htmlFor="signupform" action="" method="post">
      <div className="maindiv">
        <div id="h1div">
          <h3>CREATE YOUR ACCOUNT</h3>
        </div>

        <div className="spacing">
          <div className="signlabel">
            <label htmlFor="Name">Enter Your Name</label>
          </div>
          <input type="text" className="_inp" name="Name" id="Name" placeholder="First and Last Name" />
        </div>

        <div className="spacing">
          <div id="mobilenumber">
            <label htmlFor="MobileNumber">Mobile Number</label>
          </div>
          <div>
            <select name="CountryCode" id="CountryCode">
              <option value="India">IND +91</option>
              <option value="Russia">RUS +7</option>
              <option value="Ukraine">UKR +380</option>
              <option value="China">CHI +86</option>
              <option value="United States of America">USA +1</option>
            </select>
            <input type="number" className="_inp" name="MobileNumber" id="MobileNumber" placeholder="Mobile Number" />
          </div>
        </div>

        <div className="spacing">
          <div className="signlabel">
            <label htmlFor="Email">Email (Optional)</label>
          </div>
          <input className="_inp" type="email" name="Email" id="Email" placeholder="" />
        </div>

        <div className="spacing">
          <div className="signlabel">
            <label htmlFor="Password">Create Password</label>
          </div>
          <input className="_inp" type="password" name="Password" id="Password" placeholder="Minimum 8 Characters" />
        </div>

        <div className="spacing">
          <div className="signlabel">
            <label htmlFor="ReEnterPassword">Re-Enter Password</label>
          </div>
          <input className="_inp" type="password" name="ReEnterPassword" id="ReEnterPassword" />
        </div>

        <div className="spacing">
          <div>
            <span id="gender1">Gender</span>
            <input type="radio" name="gender" id="gender" />
            <label id="gender1" htmlFor="gender">Male</label>
            <input type="radio" name="gender" id="gender" />
            <label id="gender1" htmlFor="gender">Female</label>
          </div>
        </div>

        <div className="spacing">
          <div className="signlabel">
            <label htmlFor="DateOfBirth">D.O.B</label>
          </div>
          <input className="_inp" type="date" name="DateOfBirth" id="DateOfBirth" />
        </div>

        <div className="spacing">
          <div className="signlabel">
            <label htmlFor="address">Permanent Address</label>
          </div>
          <input className="_inp" type="text" name="address" id="address" />
        </div>

        <div>
          <button type="submit" className="_2Buttons1" id="button3"><a href="">WELCOME HOME</a></button>
        </div>
      </div>
    </form>
    </div>
  )
}

export default SignupForm