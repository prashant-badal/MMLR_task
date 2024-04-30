import React from 'react';
import './FeaturedCaseStudies.css'; // Import your CSS file for styling

const FeaturedCase = () => {
  return (
   
    <div className="featured-case-studies" id='CaseStudy'>
      <h2 className="section-header">Featured Case Studies</h2>
      <div className="card-container">
      <div className="case-study-card">
        <div className="case-study-header">
          <h3 className="case-study-title">Case Study 1</h3>
        </div>
     
        <div className="case-study-details">
          <p><strong>Client:</strong> [Client Name]</p>
          <p><strong>Project:</strong> [Project Description]</p>
          <p><strong>Results:</strong> [Outcome of the Project]</p>
        </div>
      </div>
      <div className="case-study-card">
        <div className="case-study-header">
          <h3 className="case-study-title">Case Study 2</h3>
        </div>
        <div className="case-study-details">
          <p><strong>Client:</strong> [Client Name]</p>
          <p><strong>Project:</strong> [Project Description]</p>
          <p><strong>Results:</strong> [Outcome of the Project]</p>
        </div>
      </div>
      <div className="case-study-card">
        <div className="case-study-header">
          <h3 className="case-study-title">Case Study 3</h3>
        </div>
        <div className="case-study-details">
          <p><strong>Client:</strong> [Client Name]</p>
          <p><strong>Project:</strong> [Project Description]</p>
          <p><strong>Results:</strong> [Outcome of the Project]</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCase;
