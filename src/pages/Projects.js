import React from 'react'
import ProjectCard from '../components/ProjectCard'


const Projects = () => {
  return (
    <div>
      <div className='abt-block'>
        <h1 className='project-title'>
          My 
          <span className='about-title-2'>Projects</span> 
        </h1>
        <ProjectCard />
      </div>
    </div>
  )
}

export default Projects
