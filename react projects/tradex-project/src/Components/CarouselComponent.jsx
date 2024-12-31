import React from 'react';
import meet3 from "../assets/images/meet3.jpg";
import meet from "../assets/images/meet.jpg";
import meet2 from "../assets/images/meet2.jpg";
import spedd from  "../assets/images/spedd.png";
import 'animate.css';

const CarouselComponent = () => {
  return (
    <section>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators text-center" style={{ position: 'absolute',}}>
          <div className="d-flex flex-column justify-content-center" style={{ position: 'absolute', left: '130%', bottom: '450px' }}>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
              style={{ width: '10px', height: '10px' }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              style={{ width: '10px', height: '10px' }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              style={{ width: '10px', height: '10px' }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
              style={{ width: '10px', height: '10px' }}
            ></button>
          </div>
        </div>

        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img src={meet2} className="d-block w-100 image" alt="meeting" />
            <div className="carousel-caption d-none d-md-block overlay">
              <div className="mt-5 pt-5 h-100 d-flex flex-column justify-content-center">
                <h5 className="animated bounceInRight" style={{ animationDelay: '1s', fontSize: '50px' }}>
                  What Do You Do For Peoples1
                </h5>
                <p className="animated bounceInLeft d-none d-md-block" style={{ animationDelay: '2s' }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt
                  excepturi quas vero.
                </p>
                <div className="animated bounceInRight" style={{ animationDelay: '3s' }}>
                  <a
                    className="btn btn-lg m-2"
                    style={{
                      backgroundColor: '#0c65ed',
                      borderRadius: '30px',
                      fontSize: '15px',
                      color: 'white',
                      border: '!px solid #0c65ed',
                    }}
                  >
                    Get Started Now
                  </a>
                  <a
                    className="btn btn-lg m-2"
                    style={{
                      border: '1px solid white',
                      borderRadius: '30px',
                      color: 'white',
                      fontSize: '15px',
                      width: '10%',
                    }}
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img src={meet} className="d-block w-100 image" alt="..." />
            <div className="carousel-caption d-none d-md-block overlay">
              <div className="mt-5 pt-5 h-100 d-flex flex-column justify-content-center">
                <h5 className="animated bounceInRight" style={{ animationDelay: '1s', fontSize: '50px' }}>
                  What Do You Do For Peoples1
                </h5>
                <p className="animated bounceInLeft d-none d-md-block" style={{ animationDelay: '2s' }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt
                  excepturi quas vero.
                </p>
                <div className="animated bounceInRight" style={{ animationDelay: '3s' }}>
                  <a
                    className="btn btn-lg m-2"
                    style={{
                      backgroundColor: '#0c65ed',
                      borderRadius: '30px',
                      fontSize: '15px',
                      color: 'white',
                      border: '!px solid #0c65ed',
                    }}
                  >
                    Get Started Now
                  </a>
                  <a
                    className="btn btn-lg m-2"
                    style={{
                      border: '1px solid white',
                      borderRadius: '30px',
                      color: 'white',
                      fontSize: '15px',
                      width: '10%',
                    }}
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img src={meet3} className="d-block w-100 image" alt="..." />
            <div className="carousel-caption d-none d-md-block overlay">
              <div className="mt-5 pt-5 h-100 d-flex flex-column justify-content-center">
                <h5 className="animated bounceInRight" style={{ animationDelay: '1s', fontSize: '50px' }}>
                  What Do You Do For Peoples1
                </h5>
                <p className="animated bounceInLeft d-none d-md-block" style={{ animationDelay: '2s' }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt
                  excepturi quas vero.
                </p>
                <div className="animated bounceInRight" style={{ animationDelay: '3s' }}>
                  <a
                    className="btn btn-lg m-2"
                    style={{
                      backgroundColor: '#0c65ed',
                      borderRadius: '30px',
                      fontSize: '15px',
                      color: 'white',
                      border: '!px solid #0c65ed',
                    }}
                  >
                    Get Started Now
                  </a>
                  <a
                    className="btn btn-lg m-2"
                    style={{
                      border: '1px solid white',
                      borderRadius: '30px',
                      color: 'white',
                      fontSize: '15px',
                      width: '10%',
                    }}
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="carousel-item">
            <img src={spedd} className="d-block w-100 h-100 image" alt="..." />
            <div className="carousel-caption d-none d-md-block overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselComponent;
