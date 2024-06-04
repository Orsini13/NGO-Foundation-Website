import React from 'react'
import "./Outreach.css"
import outreach from "../../assets/outreach.jpeg"
import outreachh from "../../assets/Outreachh.jpeg"
import outreachhh from "../../assets/Outreachhh.jpeg"
import  white_arrow from '../../assets/asses/white-arrow.png'


const Outreach = () => {
  return (
    <div className='outreach'>
        <div className='gallery'>
            <img src={outreach} alt="" />
            <img src={outreachh} alt="" />
            <img src={outreachhh} alt="" />

        </div>
        <button className='btn dark-btn'>see more here <img src={white_arrow} alt="" /> </button>
    </div>
  )
}

export default Outreach