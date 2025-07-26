import React from 'react'
import './footer.css'
function Footer() {
    return (
        <>
        <div className=' justify-content-around container d-flex mt-4 p-5 flex-wrap foot'>
           <div className='row '>
            <div className='text-center col-md-4  mb-5'>
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
             <div className='text-center col-md-4 mb-5'>
                <h3>AROUND THE WEB</h3>
                 <div className='d-flex flex-row justify-content-center align-items-center'>
                    <i class="fa-brands fa-facebook mx-1 icon  p-1 d-flex justify-content-center align-items-center"></i>
                    <i  class="fa-brands fa-twitter mx-1 p-1 d-flex justify-content-center align-items-center icon"></i>
                    <i class="fa-brands fa-linkedin-in mx-1 p-1 d-flex justify-content-center align-items-center icon"></i>
                    <i class="fa-solid fa-globe mx-1 icon p-1 d-flex justify-content-center align-items-center"></i>
                 </div>
            </div>
             <div className='text-center col-md-4 '>
                <h3>ABOUT FREELANCER</h3>
                <p className=''>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
              
            </div>
            </div>
        </div>
        </>
    )
}

export default Footer
