import React from 'react';

const ContactInfo = () => {
  return (
    <div>
      <div className="d-flex justify-content-center flex-row pt-4 mt-4">
        <div className="d-flex justify-content-center flex-column">
          <div className="line1left text center"></div>
          <div className="line text-center"></div>
        </div>
        <h3 className="p-4" style={{ color: 'black' }}>Contact Info</h3>
        <div className="d-flex justify-content-center flex-column">
          <div className="line1 text center"></div>
          <div className="line text-center"></div>
        </div>
      </div><br></br><br></br><br></br>
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column text-center" style={{ width: '20%' }}>
          <i className="fa-solid fa-location-dot fot m-2"></i>
          <h6>Address</h6>
          <p className="text-muted" style={{ fontSize: '12px' }}>
            267-A, Street Name Park Sera Avenue, New York, NY<br /> 90210
          </p>
        </div>
        <div className="d-flex flex-column text-center" style={{ width: '20%' }}>
          <i className="fa-solid fa-phone-volume fot m-2"></i>
          <h6>Call Us</h6>
          <p className="text-muted" style={{ fontSize: '12px' }}>
            Phone 1: (+098) 7654 3210
          </p>
        </div>
        <div className="d-flex flex-column text-center" style={{ width: '20%' }}>
          <i className="fa-regular fa-envelope fot m-2"></i>
          <h6>Email</h6>
          <p className="text-muted" style={{ fontSize: '12px' }}>
            support@company.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
