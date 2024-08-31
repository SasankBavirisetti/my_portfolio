import React, { useEffect } from 'react'
import './Certifications.css'
import java from '../../Images/Programming In Java.jpg'
import python from '../../Images/Programming, Data Structures And Algorithms Using Python.jpg'
import web from '../../Images/Web Development.png'

export const Certifications = () => {
    
  return (
    <div className='certifications'>
        <h1 className='cert-heading'>My Certifications</h1>
        <div className="certificates">
                <img src={web}    alt="web" className='cert-image'/>
                <img src={python}   alt="python" className='cert-image'/>
                <img src={java}   alt="java" className='cert-image'/>


        </div>
    </div>
  )
}
