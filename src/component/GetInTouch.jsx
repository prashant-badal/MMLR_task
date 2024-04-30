import React from 'react';
import './GetInTouch.css'; // Import your CSS file for styling

const GetInTouch = () => {
  return (
    <div className="get-in-touch-container" id='getTouch'>
      <div className="get-in-touch">
        <h2 className="section-header">Get in Touch</h2>
        <div className="section-content">
          <p className="section-description">
            Interested in joining our list of satisfied clients? Contact us today to discuss your project.
          </p>
          <button className="contact-button">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
