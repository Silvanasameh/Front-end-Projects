import React, { useState } from 'react';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    if (!email) {
      setErrorMessage('Please enter a valid email address');
    } else {
      setErrorMessage('');
      // Handle email subscription logic here
      console.log('Subscribed with email:', email);
    }
  };

  return (
    <section style={{ backgroundColor: 'black' }}>
      <div className="pt-5 mt-5 text-colour" style={{ height: '200px', width: '100%', backgroundColor: 'black' }}>
        <div className="d-flex flex-row justify-content-around">
          <div className="d-flex flex-row m-4">
            <i className="fa-regular fa-envelope m-5 p-2" style={{ fontSize: '30px' }}></i>
            <h2 className='my-margin'>Subscribe now for news</h2>
          </div>
          <div className="d-flex flex-row mt-4 pt-4" style={{ width: '40%' }}>
            {errorMessage && <span id="email-error" className="error-message" style={{ color: 'red' }}>{errorMessage}</span>}
            <input
              type="email"
              className="m-2"
              placeholder="Input your mail"
              name="email"
              value={email}
              onChange={handleEmailChange}
              style={{ width: '60%', height: '40px', color: 'black' }}
            />
            <button
              className="btn btn-primary m-2"
              style={{
                borderRadius: '50px',
                width: '20%',
                height: '40px',
                backgroundColor: '#0c65ed',
              }}
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
