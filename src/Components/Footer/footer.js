import React from 'react'
import './footer.css'
import Logo from '../Assets/Logo.png'
import Instagram from '../Assets/instagram.png'
import Facebook from '../Assets/facebook.png'
import Youtube from '../Assets/youtube.png'
import Twitter from '../Assets/twitter.png'

const Footer = () => {

  return (
    <div className='footer'>
        <div className="locations">
            <span>Loacations</span>
            <ul>
                <li>Bangalore</li>
                <li>Chennai</li>
                <li>Karaikal</li>
                <li>Goa</li>
                <li>Mysore</li>
                <li>Madurai</li>
            </ul>
        </div>
        <div className="contacts">
            <span>Reach Us</span>
            <ul>
                <li>dinbabu20@gmail.com</li>
                <li>9597989465</li>
            </ul>
        </div>
        <div className='footerlogo'> 
            <span>2023 &#169; Mad Crab Ltd.</span>
            <img src={Logo} alt="Logo" height={70} width={144}/>
        </div>
        <div className="footermedia">
            <div className="stayhungry">
                <span>Stay Hungry</span>
            </div>
            <div className="socialicons">
                <img src={Youtube} alt="Yt" />
                <img src={Instagram} alt="Insta" />
                <img src={Facebook} alt="Fb" />
                <img src={Twitter} alt="Tw" />
            </div>
        </div>
    </div>
  )
}

export default Footer