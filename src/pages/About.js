import React from 'react'
import PersonalInfo from '../components/PersonalInfo'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Experience from '../components/Experience'
import { motion } from 'framer-motion'


const containerVariants = {
  hidden:{
    opacity:0,
    x:'100vw'
  },
  visible:{
    opacity:1,
    x:0,
    transition:{ type:'spring', delay:0.5 }
  },
  exit:{
    x:'-100vw',
    transition:{
      ease: 'easeInOut'
    }
  }
}

const About = () => {
  return (
    <motion.div
    variants={containerVariants}
    initial="hidden"
      animate="visible"
      exit="exit"
    >
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
    </motion.div>
  )
}

export default About
