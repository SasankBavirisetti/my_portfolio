import React from 'react'
import './About.css'
import portfolioImage from '../../Images/profileimg.jpeg'
import { Typewriter } from 'react-simple-typewriter'
import linkedin from '../../Images/linkedin.png'
import hackerrank from '../../Images/hackerrank.png'
import github from '../../Images/logos/github.png'
import { Link } from 'react-router-dom'
import resume from '../../files/Sasank_Resume_MERN.pdf'

export const About = () => {
  return (
    <div className='about'>
      <div className="my-details">
        <p className='skill-details'>Hello,I'm</p>
        <p className='name'>Sasank Bavirisetti</p>
        <p className='skill-details'>
          I am
          <span className='typewriter'>
            <Typewriter
              words={['MERN Stack Developer', 'React Js Developer', 'Java Full Stack Developer']}
              loop={5}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </p>
        <p className='skill-details'>Full-Stack Developer | Expertise in MERN Stack & Spring Boot </p>
        <p className='skill-details'> Elevating User Experiences | Proficient in Java, Python, and SQL</p>
        <div className="btns">
          <a href={resume}><button className='btn'>Download Resume</button></a>
          <Link to='/projects'><button className='btn'>Projects</button></Link>
        </div>
        <div className="logos">
          <Link to='https://www.linkedin.com/in/sasankbavirisetti/'><img src={linkedin} alt="linkedin" className='social-logo' />
          </Link>
          <Link to='https://github.com/SasankBavirisetti?tab=repositories'><img src={github} alt="github" className='social-logo git' />
          </Link>
          <Link to='https://www.hackerrank.com/profile/bsasank2662'><img src={hackerrank} alt="hackerrank" className='social-logo' />
          </Link>



        </div>
      </div>
      <div className="my-image">
        <img src={portfolioImage} alt="profile image" className='profile-image' />
      </div>
    </div>
  )
}
