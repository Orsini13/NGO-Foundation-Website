import React from 'react'
import './About.css'
import heroimg from '../../assets/hero.jpg'
import play_icon from '../../assets/asses/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={hero} alt="" className='heroimg' />
            <img src={play_icon} alt="" className='plsy_icon' />
        </div>
        <div className='about-right'>
            <h3>About US</h3>
            <h2>Giving Helping Hands</h2>
            
        </div>
    </div>
  )
}

export default About