import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/asses/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero classname'>
    <div className="hero-text">
        <h1>Changing one life at a time globally</h1>
        <p>
           One at a time, Love like mine, Spread change and sow them in lives
        </p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /> </button>
    </div>
    </div>
  )
} 

export default Hero