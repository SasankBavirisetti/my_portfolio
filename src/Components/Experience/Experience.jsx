import React from 'react'
import './Experience.css'
import intern from '../../files/java internship.jpeg'

export const Experience = () => {
  return (
    <div className='experience'>
      <div className="details">
        <div className="heading">
          <h1>Henotic Technologies Pvt Ltd</h1>
          <h1>Full Stack Development Intern </h1>
          <h1>05 JUNE 2023 - 04 AUG 2023</h1>
          <h2>Hospital Management System</h2>
          
        <div className="project-details"><p>-- Streamlined and automated patient information management within
            healthcare facilities and provided a centralized, secure, and
            accessible platform for managing patient details.</p>
            <p>-- Developed good UI by utilizing the technololgies HTML , CSS , JS
            ReactJS and Spring boot for backend and SQL for database.</p></div>
        </div>
      </div>
      <img src={intern} alt="" className='intern' />

    </div>
  )
}
