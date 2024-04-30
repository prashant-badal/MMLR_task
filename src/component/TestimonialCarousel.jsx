import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TestimonialCarousel.css'; // Import your CSS file for styling
import logo1 from "../assets/clientLogo/png-transparent-client-computer-icons-others-miscellaneous-logo-desktop-wallpaper-thumbnail.png"

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO, Company XYZ',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'john_doe.jpg', // Image path
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Designer, ABC Corp',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'jane_smith.jpg', // Image path
    },

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    // fade: true, // Enable fade effect
 
  };

  return (
    <div className="testimonial-carousel" id='testimonials'>
         <h2 className="testimonial-header">Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-slide">
            <img src={logo1} alt={testimonial.name} className="testimonial-image" />
            <div className="testimonial-content">
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-role">{testimonial.role}</p>
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
