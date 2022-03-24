import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

const PersonalInfoCard = () => {
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
            Personal Infos
        </h1>
        <div className='info-col'>

          <img className='info-pic' src="/profileImg/profileInfoCardImg.jpeg" alt='aayush' />

          {/* <div className='info-container'> */}
          <div className='details-block'>
            
            <p className='contact-para'>
              Name: <span className='p-info-para-span'>Aayush Srivastava</span>
            </p>
            <p className='contact-para'>
              Phone: <span className='p-info-para-span'>+91 7037104838</span>
            </p>
            <p className='contact-para'>
              Nationality: <span className='p-info-para-span'>Indian</span>
            </p>
            <p className='contact-para'>
              Address: <span className='p-info-para-span'>Bareilly , UP , India</span>
            </p>
            <p className='contact-para'>
              Languages: <span className='p-info-para-span'>English , Hindi</span>
            </p>

          </div>
          
        </div>
        </motion.div>
      </Tilt>
    </div>
  )
}

export default PersonalInfoCard
