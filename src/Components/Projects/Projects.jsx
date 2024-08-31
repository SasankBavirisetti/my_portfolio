import React from 'react'
import './Projects.css'
import foodtracker from '../../files/FoodTracker.mp4'
import crud from '../../files/crud_mern.mp4'
import { Link } from 'react-router-dom'

export const Projects = () => {
  return (
    <div className='projects'>
      <div className="project">
        <div className="head"><h1>Food Tracker using MERN </h1>
          <Link to='https://github.com/SasankBavirisetti/Food_tracker'>source code</Link></div>
        <video src={foodtracker} className='projects-video' controls></video>
      </div>
      <div className="project">
        <div className="head">
          <h1>CRUD Application using MERN </h1>
          <Link to='https://github.com/SasankBavirisetti/crud_mern'>source code</Link></div>
        <video src={crud} className='projects-video' controls></video>
      </div>
      <div className="project">
        <div className="head">
          <h1>CRUD using Java Full Stack ( React & SpringBoot )  </h1>
          <Link to='https://github.com/SasankBavirisetti/crud_java_fullstack'>source code</Link></div>
        <video src={crud} className='projects-video' controls></video>
      </div>
    </div>
  )
}
