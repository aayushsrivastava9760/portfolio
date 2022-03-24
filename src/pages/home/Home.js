import React from 'react'
import { useState, useEffect } from 'react'
import professions from '../../utils/data/professionData'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ROUTES from '../../utils/routes'

const buttonVariants = {
  hover: {
    scale:1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(42, 68, 219)",
    transition:{
      yoyo:Infinity
    }
  }
}

const containerVariants = {
  hidden:{
    opacity:0,
  },
  visible:{
    opacity:1,
    transition:{ delay: 0.3}
  },
  exit:{
    x:'-100vw',
    transition:{
      ease: 'easeInOut'
    }
  }
}


const Home = () => {

    const [index,setIndex] = useState(0)
    const [subIndex,setSubIndex] = useState(0)
    const [reverse,setReverse] = useState(false)

    useEffect(()=>{
        if(index === professions.length){
          setReverse(false)
          setIndex(0)
          return 
        }
        
        if( subIndex === professions[index].length + 1 && !reverse ){
          setReverse(true)
          
          return
        }

    
        if(subIndex === 0 && reverse){
          setReverse(false)
          if(index === professions.length -1){
            setIndex(0)
          }
          else{
            setIndex(prev => prev+1)
          }
          return
        }
    
        const timeout = setTimeout(()=>{
          setSubIndex(prev => prev + (reverse ? -1 : 1))
        },100)
    
        return () => clearTimeout(timeout)
    
      },[index,subIndex,reverse])


  return (
    <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
        <div className='color-block'/>
        <div className='home-col'>
            <img className='image-block' src="/profileImg/profileHomePageImg.jpeg" alt="aayush" />
            <div className='home-content'>

                <h1 className='home-title'>Hi,  I 'm   Aayush  Srivastava </h1>
                <h2 className='home-profession'>a { `${professions[index].substring(0, subIndex)}` }<span className='mark'>|</span></h2>
                <motion.p
                  initial={{opacity:0}}
                  animate={{opacity:1}}
                  transition={{delay:0.5}}
                  className='intro'
                  >
                  I'm a student developer currently pursuing my Btech from IIT (BHU) , Varanasi . I am very passionate about software development, web development in particular . I am also into open source and love collaborating .
                </motion.p>
                
                <div>
                <Link to={ROUTES.ABOUT}>
                <motion.button 
                  variants={buttonVariants}
                  whileHover="hover"
                  className='about-btn'>
                    More About Me
                  </motion.button>
                  </Link>
                </div>
            </div>
        </div>
        </motion.div>
  )
}

export default Home
