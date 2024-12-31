import React from 'react';

const SectionComponent = () => {
  return (
    <section>
      <div style={{ height: '120px', backgroundColor: '#0c65ed' }}>
        <div className="container">
          <div className="d-flex justify-content-around">
            <div className="d-flex m-3">
              <i className="fa-solid fa-phone-volume m-4" style={{ fontSize: '70px', color: 'lightgray' }}></i>
              <p className="text-colour fw-bold m-4" style={{ fontSize: '20px' }}>
                if you like this great work ?? for your site...
              </p>
            </div>
            <button 
              type="button" 
              className="btn m-5 fw-bold p-3 " 
              style={{ color: '#0c65ed', height: '40px', margin: '30px', borderRadius: '50px', backgroundColor: 'white' }}
            >
              Purchase Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionComponent;
