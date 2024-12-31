import React from 'react';
import foot1 from '../assets/images/foot1.png';
import foot2 from '../assets/images/foot2.jpg';
const Footer = () => {
  return (
    <footer>
      <section style={{ backgroundColor: '#1a1a1a', height: '400px' }} className="container-fluid">
        <div className="d-flex justify-content-center">
          <div className="card mt-5 m-5 text-colour" style={{ width: '30rem', backgroundColor: '#1a1a1a', border: 'none' }}>
            <div className="card-body" style={{ height: '70%', width: '30rem', fontSize: '10px' }}>
              <h4 className="card-title">Contact Info</h4>
              <hr style={{ width: '20%', backgroundColor: '#0c65ed', border: '1px solid #0c65ed' }} />
              <div className="d-flex">
                <i className="fa-solid fa-location-dot m-2"></i>
                <p>123 Street Market, Life Plaza, New York</p>
              </div>
              <div className="d-flex">
                <i className="fa-solid fa-phone m-2"></i>
                <p>987654321</p>
              </div>
              <div className="d-flex">
                <i className="fa-regular fa-envelope m-2"></i>
                <p>team@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="card mt-5 text-colour" style={{ width: '35rem', backgroundColor: '#1a1a1a', border: 'none' }}>
            <div className="card-body">
              <h4 className="card-title">Posts</h4>
              <hr style={{ width: '20%', backgroundColor: 'blue', border: '1px solid #0c65ed' }} />
              {/* Repeat this block for each post */}
              <div className="card mb-3 text-colour" style={{ maxWidth: '230px', maxHeight: '50px', backgroundColor: '#1a1a1a' }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={foot1} style={{ height: '60px' }} width="60px" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="text-colour">
                      <p style={{ fontSize: '9px' }}>Four ways to cheer and plan your self up on Blue</p>
                      <div className="d-flex" style={{ fontSize: '10px' }}>
                        <i className="fa-solid fa-calendar-days m-1"></i>
                        <p className="m-1">December 19, 2028</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr style={{ width: '80%', backgroundColor: 'gray', border: '1px solid #0c65ed' }} />
              <div className="card mb-3 text-colour" style={{ maxWidth: '250px', maxHeight: '100px', backgroundColor: '#1a1a1a' }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={foot2} style={{ height: '60px' }} width="60px" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="text-colour">
                      <p style={{ fontSize: '9px' }}>Four ways to cheer and plan your self up on Blue</p>
                      <div className="d-flex" style={{ fontSize: '10px' }}>
                        <i className="fa-solid fa-calendar-days m-1"></i>
                        <p className="m-1">December 19, 2028</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mt-5 text-colour" style={{ width: '18rem', backgroundColor: '#1a1a1a', border: 'none' }}>
            <div className="card-body">
              <h4 className="card-title">Popular</h4>
              <hr style={{ width: '20%', backgroundColor: 'blue', border: '1px solid #0c65ed' }} />
              <div className="d-flex flex-column m-1">
                {/* Repeat this block for each button group */}
                <div className="d-flex">
                  <button className="btn btn-light m-2" style={{ borderRadius: '40px', fontSize: '10px' }}>Accountanty</button>
                  <button className="btn btn-light m-2" style={{ borderRadius: '40px', fontSize: '10px' }}>Affilate</button>
                  <button className="btn btn-light m-2" style={{ borderRadius: '40px', fontSize: '10px' }}>Branding</button>
                </div>
                <div className="d-flex">
                  <button className="btn btn-light m-1" style={{ borderRadius: '40px', fontSize: '10px' }}>Construction</button>
                  <button className="btn btn-light m-1" style={{ borderRadius: '40px', fontSize: '10px' }}>Design</button>
                  <button className="btn btn-light m-1" style={{ borderRadius: '40px', fontSize: '10px' }}>Drupal</button>
                  <button className="btn btn-light m-1" style={{ borderRadius: '40px', fontSize: '10px' }}>Education</button>
                </div>
                <div className="d-flex">
                  <button className="btn btn-light m-1" style={{ borderRadius: '40px', fontSize: '10px' }}>Graphic</button>
                  <button className="btn btn-light m-1" style={{ borderRadius: '40px', fontSize: '10px' }}>Joomla</button>
                  <button className="btn btn-light m-1" style={{ borderRadius: '40px', fontSize: '10px' }}>Marketing</button>
                  <button className="btn btn-light m-1" style={{ borderRadius: '40px', fontSize: '10px' }}>Money</button>
                </div>
                <div className="d-flex">
                  <button className="btn btn-light m-1" style={{ borderRadius: '40px', fontSize: '10px' }}>Talley</button>
                  <button className="btn btn-light m-1" style={{ borderRadius: '40px', fontSize: '10px' }}>Transform</button>
                  <button className="btn btn-light m-1" style={{ borderRadius: '40px', fontSize: '10px' }}>Website</button>
                  <button className="btn btn-light m-1" style={{ borderRadius: '40px', fontSize: '10px' }}>Wordpress</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4" style={{ boxShadow: '0 0 18px 0 rgba(0, 0, 0, 0.5)', color: '#0c65ed', backgroundColor: '#1a1a1a' }}>
        © 2019 Copyright:
        <a className="text-reset fw-bold" href="#"></a>
      </div>
    </footer>
  );
}

export default Footer;
