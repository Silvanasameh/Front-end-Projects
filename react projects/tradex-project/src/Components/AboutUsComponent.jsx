import React from 'react';
import te from "../assets/images/te.jpg";
import "../assets/css/css.css";
import "../assets/css/style.css";
const AboutUsComponent = () => {
  return (
    <section className="container">
      <div className="d-flex justify-content-center flex-row pt-4 mt-4">
        <div className="d-flex justify-content-center flex-column">
          <div className="line1left text-center"></div>
          <div className="line text-center"></div>
        </div>
        <h3 className="p-4">About Us</h3>
        <div className="d-flex justify-content-center flex-column">
          <div className="line1 text-center"></div>
          <div className="line text-center"></div>
        </div>
      </div>

      <p className="text-center">About Us</p>

      <div className="col-md-8 font">
        <div className="d-flex flex-row shadow">
          <div className="justify-content-center d-flex flex-row">
            <div className="top-left shadow ">
              <div className="d-flex flex-row justify-content-center">
                <div className="m-4 d-flex">
                  <i className="fas fa-bullhorn mt-3"></i>
                  <hr className="linetwo m-2" />
                </div>
                <div className='mt-3'>
                  <h5>Marketing</h5>
                  <p>Lorem ipsum dolor sit amet, Aenea jkn consectetuer</p>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-center">
                <div className="m-4 d-flex">
                  <i className="fas fa-list-ul mt-3"></i>
                  <hr className="linetwo m-2" />
                </div>
                <div className='mt-3'>
                  <h5>Great Usability</h5>
                  <p>Lorem ipsum dolor sit amet, Aenea jkn consectetuer</p>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-center">
                <div className="m-4 d-flex">
                  <i className="fas fa-thumbs-up mt-3"></i>
                  <hr className="linetwo m-2" />
                </div>
                <div className='mt-3'>
                  <h5>Unique Design</h5>
                  <p>Lorem ipsum dolor sit amet, Aenea jkn consectetuer</p>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-center">
                <div className="m-4 d-flex">
                  <i className="fas fa-bullhorn mt-3"></i>
                  <hr className="linetwo m-2" />
                </div>
                <div className='mt-3'>
                  <h5>Quick & Powerful</h5>
                  <p>Lorem ipsum dolor sit amet, Aenea jkn consectetuer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ float: 'right' }}>
          <img src={te} alt="" style={{ height: '400px' }} />
        </div>
      </div>
      <div className="card bg-white col-md-4 col-12" style={{ border: 'none' }}>
        <div className="card-body">
          <p className="card-text font">
            Dorem ipsum dolor sit amet, consectetur adipiscing<br></br> elit. Ut blandit nisi a dictum tristique.Nullam urna<br></br>
            metus, vestibulum ac sodales eSed ut perspiciatis<br></br> unde omnis iste natus error sit voluptatem <br></br>accusantium
            doloremque laudantium totam<br></br> remrutrumDorem ipsum dolor sit amet, consectetur <br></br>adipiscing elit. Sed ut
            perspiciatis.
          </p>
          <p className="card-text font">
            Dorem ipsum dolor sit amet. consectetur adipiscing<br></br> elit. Ut blandit nisi a dictum tristique. Nullam urna<br></br>
            metus, vestibulum ac sodales eSed ut perspiciatis <br></br>unde omnis iste natus error sit voluptatem <br></br>accusantium
            doloremque laudantium<br></br> totam remrutrumDorem ipsum dolor sit amet, consectetur.
          </p>
          <button type="button" className="btn btn-primary font p-3" style={{ borderRadius: '50px', float: 'left' }}>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsComponent;
