import React from 'react'
import { useState, useEffect } from 'react'
import professions from '../assets/professionData'

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
    <div>
        <div className='color-block'/>
        <div className='home-col'>
            <img className='image-block' src="/aayush.jpeg" alt="aayush" />
            <div className='home-content'>

                <h1 className='home-title'>Hi,  I 'm   Aayush  Srivastava </h1>
                <h2 className='home-profession'>a { `${professions[index].substring(0, subIndex)}` }<span className='mark'>|</span></h2>
                <p className='intro'>
                    I'm a student developer currently pursuing my Btech from IIT (BHU) , Varanasi . I am very passionate about software development, web development in particular . I am also into open source and love collaborating .
                </p>
                
                <div>
                    <button className='about-btn'>
                        More About Me
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
