import React from 'react'

const PersonalInfo = () => {
  return (
    <div className='p-info-block'>
      <h1 className='about-p-info' >
            Personal Infos
        </h1>
        <div className='info-col'>

          <img className='info-pic' src="/aayush2.jpeg" alt='aayush' />

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
    </div>
  )
}

export default PersonalInfo
