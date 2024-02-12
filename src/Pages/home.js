import React from 'react'
import Hero from '../Components/Hero/Hero'
import Savorous from '../Components/Savorous/Savorous'
import Ratings from '../Components/Ratings/ratings'
import Newsletter from '../Components/NewsLetter/Newsletter'

const Home = () => {
    
  return (
    <div>
        <Hero />
        <Savorous />
        <Ratings />
        <Newsletter/>
    </div>
  )
}

export default Home