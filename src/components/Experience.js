import React from 'react'
import { motion } from 'framer-motion'
import Tilt from 'react-tilt'

const Experience = () => {
  return (
    <div>
      <Tilt className="Tilt" options={{ max : 5 }}>
      <motion.div 
      className='p-info-block'
      whileHover={{
        boxShadow: "0px 0px 8px rgb(42, 68, 219)"
      }}
      >
      <h1 className='about-p-info' >
            Experience
        </h1>
        <div className='shift'>
            
            <p className='subheading2'>
                Made IMDb clone under Quollab
            </p>
            <p className='subheading2'>
                Made Contributions to COPS and SNTC website
            </p>
            <p className='subheading2'>
                Mentored teams of freshers for smooth functioning of Robotics Event 'La Robo Liga'
            </p>
            {/* <p className='contact-para'>
                
            </p> */}
        </div>
        </motion.div>
      </Tilt>
    </div>
  )
}

export default Experience
