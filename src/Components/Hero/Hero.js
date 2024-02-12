import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {

    const buttonpro = {
        textDecoration:'none',
        color:'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        fontWeight: 'bold'
    }

    const bgm ={
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
    }

  return (
    <div className='hero'>
        <div className="hero-left">
            <p style={bgm}>ARE YOU HUNGRY?</p>
            <h2 style={bgm}>Grab a Crab</h2>
            <article style={bgm}><span>I</span>magine a plate adorned with plump, succulent crab, perfectly seasoned and bathed in a velvety garlic butter sauce. Each delicate bite reveals the crab's sweet, tender flesh, enhanced by the richness of the sauce. Garnished with a sprinkle of fresh herbs and a squeeze of lemon, this dish is a symphony of flavors that transports your taste buds to a coastal haven, where the exquisite simplicity of a delicious crab creation is a celebration of culinary perfection.</article>
            <Link to={'./Menu'}><button style={buttonpro}>Check the Menu</button></Link>
        </div>
        <div className="hero-right">

        </div>
    </div>
  )
}

export default Hero