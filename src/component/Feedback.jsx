import React, { useState } from 'react';
import './FeedBack.css'; // Import your CSS file for styling

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission, e.g., send data to backend or display a success message
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000); // Reset submitted state after 5 seconds
  };

  return (
    <div className="feedback-form-container">
      <div className={`feedback-form ${submitted ? 'submitted' : ''}`}>
        <h2 className="form-header">Leave Feedback</h2>
        {submitted ? (
          <div className="submitted-message">
            Thank you for your feedback!
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;
