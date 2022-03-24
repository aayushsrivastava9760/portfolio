import React from 'react'
import ProjectCard from '../../components/cards/projectPageCard/ProjectCard'
import projects from '../../utils/data/projects'
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

const Projects = () => {
  return (
    <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
      <div className='abt-block'>
        <h1 className='project-title'>
          My 
          <span className='about-title-2'>Projects</span> 
        </h1>
        <div className='project-container'>
        {projects.map((project,index)=>{
            return(
              <ProjectCard key={index}  project={project}/>
            )
        })}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
