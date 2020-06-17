import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Landing = ({ landingData }) => {
  return (
    <section className='resume-section p-3 p-lg-5 d-flex align-items-center' id='about'>
      <div className='w-100'>
        <h1 className='mb-0'>
          Gabriel
          <span className='text-primary text-title-surname'>Roels</span>
        </h1>
        <div className='subheading mb-5'>
          <a href='mailto:gabrielroels@gmail.com' className='dark-link'>gabrielroels@gmail.com</a>
        </div>
        <div className='text-primary mb-0'>
          A competent graduate student with experience as a professional C++ developer at IBM.
        </div>
        <div className='text-primary mb-4'>
          Strong background in both technical and social work environments.
        </div>
        <div className='text-primary mb-0'>
          I have experience in production-ready C++, Python and with writing libraries in Rust.
        </div>
        <div className='text-primary mb-0'>I am:</div>
        <ul className='mb-4'>
          <li>A strong team-player with a passion for development.</li>
          <li>A natural leader with experience working alongside senior developers.</li>
          <li>A developer responsible for the implementation of notable client-facing features in IBM's product: App Connect Enterprise.</li>
        </ul>
        <div className='mb-5'>
            In my free time I enjoy working on personal projects and exploring technologies 
            such as the Semantic Web and WebAssembly.
        </div>
        <div className='social-icons'>
          <a href='https://github.com/GGabi'>
            <FontAwesomeIcon icon={faGithub}/>
          </a>
          <a href='https://www.linkedin.com/in/gabriel-roels-a20048169/'>
            <FontAwesomeIcon icon={faLinkedin}/>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Landing