import React from 'react'
import './About.css'

function About() {
  return (
    <>
    <div className='about  h-75  d-flex  flex-column justify-content-center align-items-center'>
     <h2 className='about-tittle'>ABOUT COMPONENT</h2>
    <div className='bg-red d-flex justify-content-center align-items-center'><span className='line'></span><i class="ms-5 star fa-solid fa-star text-white mt-2 me-5"></i><span className='line'></span></div>
     <div className='row container mt-4 flex-wrap'>
         <p className='text-white col-md-6 col-12'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          <p className='text-white col-md-6 col-12'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
   
     </div>
    </div>
    </>
  )
}

export default About
