import React from 'react'
import program1 from "../../assets/education.png"
import program2 from "../../assets/program2.png"
import program3 from "../../assets/healthcare.png"
import './Programs.css'
import program_icon1 from "../../assets/asses/program-icon-1.png"
import program_icon2 from "../../assets/asses/program-icon-2.png"
import program_icon3 from "../../assets/asses/program-icon-3.png"


const Programs = () => {
  return (
    <div className='programs'>

        <div className='program'>
            <img src={program1} alt="" />
            <div className='caption'>
                <img src={program_icon1} alt="" />
                <p>Education</p>
            </div>
        </div>
        <div className='program'>
            <img src={program2} alt="" />
            <div className='caption'>
                <img src={program_icon2} alt="" />
                <p>Donations</p>
            </div>
        </div>
        <div className='program'>
            <img src={program3} alt="" />
            <div className='caption'>
                <img src={program_icon3} alt="" />
                <p>Healthcare</p>
            </div>
        </div>

    </div>
  )
}

export default Programs;
