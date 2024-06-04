import React from 'react'
import './About.css'
import heroimg from '../../assets/hero.jpg'
import play_icon from '../../assets/asses/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={heroimg} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />
        </div>
        <div className='about-right'>
            <h3>About US</h3>
            <h2>Giving Helping Hands</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quod odio asperiores enim molestias expedita reiciendis tenetur corporis fugiat quidem necessitatibus mollitia voluptatem, ab itaque dolore nam eum perspiciatis amet.</p>
            
        </div>
    </div>
  )
}

export default About