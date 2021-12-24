import React from 'react'

const Skills = () => {
  return (
    <div className='p-info-block'>
      <h1 className='about-p-info' >
            My Skills
        </h1>

        <div className='shift'>
            
            <p className='p-info-para'>
            Web Dev: 
            <div className='abt-lang-block'>
                        <p className='tab'>HTML</p>
                        <p className='tab'>CSS</p>
                        <p className='tab'>Javascript</p>
            </div>
            </p>
            <p className='p-info-para'>
            Languages: 
            {/* <span className='p-info-para-span'>C , C++ , Python</span> */}
            <div className='abt-lang-block'>
                        <p className='tab'>C</p>
                        <p className='tab'>C++</p>
                        <p className='tab'>Python</p>
            </div>
            </p>
            <p className='p-info-para'>
            Frontend: 
            {/* <span className='p-info-para-span'>NextJs , ReactJs</span> */}
            <div className='abt-lang-block'>
                        <p className='tab'>NextJs</p>
                        <p className='tab'>ReactJs</p>
            </div>
            </p>
            <p className='p-info-para'>
            Backend: 
            {/* <span className='p-info-para-span'>NodeJs , ExpressJs</span> */}
            <div className='abt-lang-block'>
                        <p className='tab'>NodeJs</p>
                        <p className='tab'>ExpressJs</p>
            </div>
            </p>
            <p className='p-info-para'>
            Deployment: 
            {/* <span className='p-info-para-span'>Netlify , Vercel , Heroku</span> */}
            <div className='abt-lang-block'>
                        <p className='tab'>Netlify</p>
                        <p className='tab'>Vercel</p>
                        <p className='tab'>Heroku</p>
                        {/* <p className='tab'>Gh-pages</p> */}
            </div>
            </p>

          </div>
    </div>
  )
}

export default Skills
