import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ROUTES from '../../../utils/routes'

const Navbar = () => {
    const [isHome,setIsHome] = useState(true)
    const [isAbout,setIsAbout] = useState(false)
    const [isProjects,setIsProjects] = useState(false)
    const [isContact,setIsContact] = useState(false)

    const location = useLocation()


  useEffect(()=>{
    
    if(location.pathname === ROUTES.HOME){
      setIsHome(true)
      setIsAbout(false)
      setIsProjects(false)
      setIsContact(false)
    }
    if(location.pathname === ROUTES.ABOUT){
      setIsHome(false)
      setIsAbout(true)
      setIsProjects(false)
      setIsContact(false)
    }
    if(location.pathname === ROUTES.PROJECTS){
      setIsHome(false)
      setIsAbout(false)
      setIsProjects(true)
      setIsContact(false)
    }
    if(location.pathname === ROUTES.CONTACT){
      setIsHome(false)
      setIsAbout(false)
      setIsProjects(false)
      setIsContact(true)
    }
  },[location])
  

  return (
    <>
      <div>
        <ul>
          <li>
            <Link className={ ` icon-box-home  ${isHome?'current-icon':'not-current-icon'} `} to= {ROUTES.HOME}>
              <p className='nav-text'>Home</p><i className="fa fa-home" ></i>
            </Link>
          </li>
          <li>
            <Link className={`icon-box-about ${isAbout?'current-icon':'not-current-icon'}`} to={ROUTES.ABOUT}>
              <p className='nav-text'>About</p><i className="fa fa-user" ></i>
            </Link>
          </li>
          <li>
            <Link className={`icon-box-projects ${isProjects?'current-icon':'not-current-icon'}`} to={ROUTES.PROJECTS}>
              <p className='nav-text-2'>Projects</p><i className="fa fa-briefcase" ></i>
            </Link>
          </li>
          <li>
            <Link className={`icon-box-contact ${isContact?'current-icon':'not-current-icon'}`} to={ROUTES.CONTACT}>
              <p className='nav-text-2'>Contact</p><i className="fa fa-envelope-open" ></i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
