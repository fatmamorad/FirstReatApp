import React, { useState } from 'react';
import im1 from '../../src/assets/portfolio/imgi_1_poert1.png';
import im2 from '../../src/assets/portfolio/imgi_2_port2.png';
import im3 from '../../src/assets/portfolio/imgi_3_port3.png';
import './portifoli.css'

function Portfolio() {
  const images = [im1, im2, im3, im3, im1, im1]; 
  const [selectedImage, setSelectedImage] = useState(null);
  const openModal = (image) => {
    console.log(image)

    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <>
    <div className='bg-white position-relative'>
    <div className="container py-5">
      <div className="row g-4">
       
          <div className="col-md-4  imgHover" onClick={() => openModal(im1)} >
            <div className='position-relative'>
            <img src={im1} className="img-fluid rounded shadow-sm im-hover " />
             <div>
             <i  class="hov text-black fa-solid fa-plus position-absolute z-4 fa-6x"></i>
            </div>
            </div>
          </div>
          
           <div className="col-md-4  imgHover" >
            <div className='position-relative'>
            <img src={im2} className="img-fluid rounded shadow-sm im-hover " />
             <div>
             <i  class="hov text-black fa-solid fa-plus position-absolute z-4 fa-6x"></i>
            </div>
            </div>
          </div>
          
           <div className="col-md-4  imgHover" >
            <div className='position-relative'>
            <img src={im3} className="img-fluid rounded shadow-sm im-hover " />
             <div>
             <i  class="hov text-black fa-solid fa-plus position-absolute z-4 fa-6x"></i>
            </div>
            </div>
          </div>
          
           <div className="col-md-4  imgHover" >
            <div className='position-relative'>
            <img src={im2} className="img-fluid rounded shadow-sm im-hover " />
             <div>
             <i  class="hov text-black fa-solid fa-plus position-absolute z-4 fa-6x"></i>
            </div>
            </div>
          </div>
          
           <div className="col-md-4  imgHover" >
            <div className='position-relative'>
            <img src={im3} className="img-fluid rounded shadow-sm im-hover " />
             <div>
             <i  class="hov text-black fa-solid fa-plus position-absolute z-4 fa-6x"></i>
            </div>
            </div>
          </div>
          
          <div className="col-md-4  imgHover" >
            <div className='position-relative'>
            <img src={im1} className="img-fluid rounded shadow-sm im-hover " />
             <div>
             <i  class="hov text-black fa-solid fa-plus position-absolute z-4 fa-6x"></i>
            </div>
            </div>
          </div>
          
      </div>
    </div>

{selectedImage && (
          
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content">
              <span className="close-button" onClick={closeModal}>&times;</span>
              <img src={selectedImage} className="img-fluid rounded" alt="selected" />
            </div>
          </div>
        )}


    </div>
   

</>
  );
}

export default Portfolio;
