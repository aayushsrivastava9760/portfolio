import React from 'react'

const Home = () => {
  return (
    <div>
        <div className='color-block'/>
        <div className='home-col'>
            <img className='image-block' src="/aayush.jpeg" alt="aayush" />
            <div className='home-content'>
                
                <h1 className='home-title'>Hi,  I 'm   Aayush  Srivastava </h1>
                {/* <h2 className='home-profession'>a { `${professions[index].substring(0, subIndex)}` }<span className='mark'>|</span></h2> */}
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
