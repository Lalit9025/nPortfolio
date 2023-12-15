import React from 'react'
import './Education.css'
import { IoMdSchool } from "react-icons/io";
const Education = (props) => {
  return (
    <div className='education'>
        <div className="b_name">
            <span className="brname">{props.branchName}</span>
            <span className='time'>Full Time</span>
        </div>
        <div className='clg_name'>
             <span className='iit_roorkee'>
                <IoMdSchool size={14} color='#A7A7A7' className='ed_icon'/>
                <span className='roorkee'>{props.school}</span>
              </span>
             <span className='duration'>{props.duration}</span>
        </div>
    </div>
  )
}

export default Education