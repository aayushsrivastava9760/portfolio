import React from 'react'
import { motion } from 'framer-motion'
import Tilt from 'react-tilt'

const EducationCard = () => {
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
            Education
        </h1>
        <div className='shift'>
            
            <p className='subheading2'>
                Indian Institute of Technology (BHU), Varanasi
            </p>
            <p className='contact-para'>
                Batchelor of Technology , GPI : 9.36
                <br></br>
                Core member of IIT BHU Robotics Club
                <br></br>
                Member of Tech Team SNTC IIT BHU
            </p>
            
        </div>
        </motion.div>
      </Tilt>
    </div>
  )
}

export default EducationCard
