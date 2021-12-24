import React from 'react'
import ProjectCard from '../components/ProjectCard'
import projects from '../assets/projects'


const Projects = () => {
  return (
    <div>
      <div className='abt-block'>
        <h1 className='project-title'>
          My 
          <span className='about-title-2'>Projects</span> 
        </h1>
        <div className='project-container'>
        {projects.map((project,index)=>{
            return(
            <ProjectCard key={index} project={project}/>
            )
        })}
        </div>
      </div>
    </div>
  )
}

export default Projects
