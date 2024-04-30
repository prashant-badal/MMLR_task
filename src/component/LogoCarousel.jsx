import React from 'react'
import "./LogoCarousel.css"
import logo1 from '../assets/clientLogo/images.png'

import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const LogoCarousel = () => {
   
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
     
      
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        
      };
  return (
<>
<div className='mainContainer' id='home'>
<h2 className="testimonial-header">Clients Logo</h2>

<Slider {...settings}>
      <div>
       <img src={logo1}/>
      </div>
      <div>
       <img src={logo1}/>
      </div>

      <div>
       <img src={logo1}/>
      </div>
      <div>
       <img src={logo1}/>
      </div>
      <div>
       <img src={logo1}/>
      </div>
      <div>
       <img src={logo1}/>
      </div>
      <div>
       <img src={logo1}/>
      </div>
 
    </Slider>
    </div>

</>

  )
}

export default LogoCarousel
