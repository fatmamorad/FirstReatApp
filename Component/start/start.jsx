import React from 'react'
import im from '../../src/assets/imgi_1_avataaars.svg'
import './start.css'
function Start() {
    return (
        <>
            <div className='start p-5 d-flex justify-content-center align-items-center w-100' >
                <div className='container text-center'>
                       <img _ngcontent-iwe-c17="" src={im} alt="" class="mb-3 w-25 m-auto"></img>
                       <h2 className='about-tittle text-center'>ABOUT COMPONENT</h2>
                        <div className='bg-red d-flex justify-content-center align-items-center'><span className='line'></span><i class="ms-5 star fa-solid fa-star text-white mt-2 me-5"></i><span className='line'></span></div>
                        <p>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>
        </>
    )
}

export default Start
