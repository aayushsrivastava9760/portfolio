import React from 'react'
import Tilt from 'react-tilt'

const ProjectCard = ({project}) => {

  const {name,info,src,tools,link} = project
  return (
    <div>
      <Tilt className="Tilt" options={{ max : 10 }}>
      <a className='proj-link' href={link}>
        <div className='single-project'>
          <div className='img-block'>
            <img className='img-project' src={src} alt={name} />
          </div>
          <div className='project-info-block' >
            <h1 className='project-name'>{name}</h1>
            <p className='project-info' >{info}</p>
            <div className='proj-lang-block' >
              {tools.map(
                (tool,index)=><p key={index} className='tab'>{tool}</p>
                )}
            </div>
          </div>
        </div>
      </a>
      </Tilt>
    </div>
  )
}

export default ProjectCard
