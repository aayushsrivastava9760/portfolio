import React from 'react'
import PersonalInfo from '../components/PersonalInfo'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Experience from '../components/Experience'

const About = () => {
  return (
    <div>
      <div className='abt-block'>
        <h1 className='about-title'>
          About 
          <span className='about-title-2'>Me</span> 
        </h1>  
        <div className='about-cont'>
        
          <PersonalInfo />
          <Skills />
          <Education />
          <Experience />
        </div>
        </div>
    </div>
  )
}

export default About
