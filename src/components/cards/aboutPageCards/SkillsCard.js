import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

const SkillsCard = () => {
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
            My Skills
        </h1>

        <div className='shift'>
            
            <div className='p-info-para'>
            Web Dev: 
            <div className='abt-lang-block'>
                        <p className='tab'>HTML</p>
                        <p className='tab'>CSS</p>
                        <p className='tab'>Javascript</p>
            </div>
            </div>
            <div className='p-info-para'>
            Languages: 
            {/* <span className='p-info-para-span'>C , C++ , Python</span> */}
            <div className='abt-lang-block'>
                        <p className='tab'>C</p>
                        <p className='tab'>C++</p>
                        <p className='tab'>Python</p>
            </div>
            </div>
            <div className='p-info-para'>
            Frontend: 
            {/* <span className='p-info-para-span'>NextJs , ReactJs</span> */}
            <div className='abt-lang-block'>
                        <p className='tab'>NextJs</p>
                        <p className='tab'>ReactJs</p>
            </div>
            </div>
            <div className='p-info-para'>
            Backend: 
            {/* <span className='p-info-para-span'>NodeJs , ExpressJs</span> */}
            <div className='abt-lang-block'>
                        <p className='tab'>NodeJs</p>
                        <p className='tab'>ExpressJs</p>
            </div>
            </div>
            <div className='p-info-para'>
            Deployment: 
            {/* <span className='p-info-para-span'>Netlify , Vercel , Heroku</span> */}
            <div className='abt-lang-block'>
                        <p className='tab'>Netlify</p>
                        <p className='tab'>Vercel</p>
                        <p className='tab'>Heroku</p>
                        {/* <p className='tab'>Gh-pages</p> */}
            </div>
            </div>

          </div>
    </motion.div>
    </Tilt>
    </div>
  )
}

export default SkillsCard
