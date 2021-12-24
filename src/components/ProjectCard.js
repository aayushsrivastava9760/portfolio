import React from 'react'

const ProjectCard = ({project}) => {
  console.log(project);

  const {name,info,src,tools,link} = project
  return (
    <div>
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
                tool=><p className='tab'>{tool}</p>
                )}
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default ProjectCard
