import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='contact-block'>
        <h1 className='about-title'>
          Get in  
          <span className='about-title-2'>Touch</span> 
        </h1>
        <div className='contact-container'>
        <div className='contact-block1'>
          <h1 className='subheading'>Don't be shy !</h1>
          <p className='contact-para'>
          Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <p className='p-info-para'>Address : <span className='p-info-para-span'>Bareilly , Uttar Pradesh , India</span></p>
          <p className='p-info-para'>Email : <span className='p-info-para-span'>aayushsrivastava9760@gmail.com</span></p>
          <p className='p-info-para'>Whatsapp : <span className='p-info-para-span'>+91 7037104838</span></p>
          <div className='social'>
            <a href='https://github.com/aayushsrivastava9760'><i className="github fa fa-github"></i></a>
            <a href='https://www.linkedin.com/in/aayushsrivastava9760/'><i className="linkedin fa fa-linkedin-square"></i></a>
            <a href='https://twitter.com/Aayush9760'><i className="twitter fa fa-twitter"></i></a>
          </div>
        </div>
        <div>
          <h1 className='subheading'>Drop me a Mail !</h1>
          <form action="mailto:aayushsrivastava9760@gmail.com" method='post' enctype="text/plain" >
            <input className='input-1' name="name" type="text" placeholder='Your Name'></input>
            <input className='input-1' name="email" type="text" placeholder='Your Email'></input>
            <input className='input-2' name="subject" type="text" placeholder='Your Subject'></input>
            <textarea className='input-3' name="message" placeholder='Your Message'></textarea>
            <button className='submit-btn' type='submit'>Send Message</button>
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
