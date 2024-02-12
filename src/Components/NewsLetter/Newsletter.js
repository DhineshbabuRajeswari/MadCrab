import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <div className='subscribe'>
            <div className="subscribe-submit">
                <span>Subscribe to our newsletter and stay updated</span>
            </div>
            <div className="subscribe-mail">
                <input type="text" placeholder='Your Email'/>
                <button>Subscribe</button>
            </div>
        </div>
        <div className="frame">
            <div className="newwsletter-iframe">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0238144628042!2d77.6733942744099!3d12.841737587461797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c8cafad80af%3A0xd6674dce95e13443!2sBangalore%20Electronic%20City.!5e0!3m2!1sen!2sin!4v1702444619588!5m2!1sen!2sin"
                width="550"
                height="385"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Location">
              </iframe>
            </div>
        </div>
    </div>
  )
}

export default Newsletter