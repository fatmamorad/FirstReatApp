import React from 'react'
import './contact.css'
function Contact() {
    return (
        <>

         <div className='bg-white   h-75  d-flex  flex-column justify-content-center align-items-center'>
            
     <h2 className='about-tittle text-black'>CONTACT COMPONENT</h2>
    <div className='bg-red d-flex justify-content-center align-items-center'><span className='line text-black'></span><i class="ms-5  fa-solid fa-star  mt-2 me-5 text-black"></i><span className='line'></span></div>
         

         <div className='w-50 mt-5'>


      <form className="row g-3 " >
  <div className="col-md-12 mt-4">
    <input type="text" className="input-style form-control" placeholder='User NAme' required />
  </div>
  <div className="col-md-12 mt-4-">
    <input type="text" className="input-style form-control" placeholder='UserAge' />
  
  </div>
 
  <div className="col-md-12 mt-4">
    <input type="text" className="input-style form-control" placeholder='UserEmail' />
  
  </div> <div className="col-md-12 mt-3">
    <input type="text" className="input-style form-control" placeholder='UserPassword' />
  
  </div>

 
  <div className="col-12">
    <button className="btn btn-success" type="submit">Submit form</button>
  </div>
</form>
       </div>
        </div>
        </>
    )
}

export default Contact
