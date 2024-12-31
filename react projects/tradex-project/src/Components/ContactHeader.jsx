import React from 'react';

const ContactHeader = () => {
  return (
    <div className="bg-image">
      <div className="mask">
        <div className="d-flex justify-content-center align-items-center h-100">
          <h1 className="text-white mb-0">Contact</h1>
        </div>
        </div>
        <div className="contact-container">
        <div className="contact-navigation">
        <a href="/">Home</a>
        <span>&gt;</span>
        <a href="/contact">Contact</a>
      </div>
    </div>
    </div>
  );
};

export default ContactHeader;
