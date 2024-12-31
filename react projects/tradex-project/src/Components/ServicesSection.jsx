import React from 'react';

const ServicesSection = () => {
  return (
    <div>
      <div className="bg-body-tertiary" style={{ height: '60px' }}></div>

      <section>
        <div className="session3 text-colour">
          <div className="over">
            <div className="d-flex justify-content-center">
              <div className="container-fluid">
                <div className="d-flex justify-content-center flex-row pt-4 mt-4">
                  <div className="d-flex justify-content-center flex-column">
                    <div className="line1left text center"></div>
                    <div className="line text-center"></div>
                  </div>
                  <h3 className="p-4">Our Services</h3>
                  <div className="d-flex justify-content-center flex-column">
                    <div className="line1 text center"></div>
                    <div className="line text-center"></div>
                  </div>
                </div>

                <p className="text-center" style={{ fontSize: '13px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. incididunt ut labore et dolore. Lorem
                  <br />
                  ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
                </p>

                <div className="d-flex flex-column">
                  {/* Service 1 */}
                  <div className="d-flex flex-row pt-2 mt-2 justify-content-center">
                    <div className="containero d-flex justify-content-center">
                      <div
                        className="d-flex flex-column justify-content-center"
                        style={{ border: '1px solid gray', width: '300px', height: '190px' }}
                      >
                        <i className="fa-solid fa-cloud text-center" style={{ fontSize: '40px' }}></i>
                        <h4 className="text-center">Online Marketing</h4>
                      </div>
                      <div className="overlay3 d-flex justify-content-center flex-row">
                        <div className="text-center boxmar p-4 tc">
                          <h4>Online Marketing</h4>
                          <p style={{ fontSize: '10px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. incididunt ut labore et dolore. Lorem ipsum dolor sit amet.
                          </p>
                          <button type="button" className="btn btn-primary" style={{ borderRadius: '50px' }}>
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Service 2 */}
                    <div className="containero d-flex justify-content-center">
                      <div
                        className="d-flex flex-column justify-content-center"
                        style={{ border: '1px solid gray', width: '300px', height: '190px' }}
                      >
                        <i className="fa-solid fa-palette text-center" style={{ fontSize: '40px' }}></i>
                        <h4 className="text-center">Web Design</h4>
                      </div>
                      <div className="overlay3 d-flex justify-content-center flex-row">
                        <div className="text-center boxmar p-4 tc">
                          <h4>Web Design</h4>
                          <p style={{ fontSize: '10px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. incididunt ut labore et dolore. Lorem ipsum dolor sit amet.
                          </p>
                          <button type="button" className="btn btn-primary" style={{ borderRadius: '50px' }}>
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Service 3 */}
                    <div className="containero d-flex justify-content-center">
                      <div
                        className="d-flex flex-column justify-content-center"
                        style={{ border: '1px solid gray', width: '300px', height: '190px' }}
                      >
                        <i className="fa-solid fa-paintbrush text-center" style={{ fontSize: '40px' }}></i>
                        <h3 className="text-center">Graphic Design</h3>
                      </div>
                      <div className="overlay3 d-flex justify-content-center flex-row">
                        <div className="text-center boxmar p-4 tc">
                          <h3>Graphic Design</h3>
                          <p style={{ fontSize: '10px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. incididunt ut labore et dolore. Lorem ipsum dolor sit amet.
                          </p>
                          <button type="button" className="btn btn-primary" style={{ borderRadius: '50px' }}>
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Service 4 */}
                  <div className="d-flex flex-row pt-4 mt-4 justify-content-center">
                    <div className="containero d-flex justify-content-center">
                      <div
                        className="d-flex flex-column justify-content-center"
                        style={{ border: '1px solid gray', width: '300px', height: '190px' }}
                      >
                        <i className="fa-solid fa-tv text-center" style={{ fontSize: '40px' }}></i>
                        <h4 className="text-center">Web Development</h4>
                      </div>
                      <div className="overlay3 d-flex justify-content-center flex-row">
                        <div className="text-center boxmar p-4 tc">
                          <h4>Web Development</h4>
                          <p style={{ fontSize: '10px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. incididunt ut labore et dolore. Lorem ipsum dolor sit amet.
                          </p>
                          <button type="button" className="btn btn-primary" style={{ borderRadius: '50px' }}>
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Service 5 */}
                    <div className="containero d-flex justify-content-center">
                      <div
                        className="d-flex flex-column justify-content-center"
                        style={{ border: '1px solid gray', width: '300px', height: '190px' }}
                      >
                        <i className="fa-solid fa-network-wired text-center" style={{ fontSize: '40px' }}></i>
                        <h4 className="text-center">Networking</h4>
                      </div>
                      <div className="overlay3 d-flex justify-content-center flex-row">
                        <div className="text-center boxmar p-4 tc">
                          <h4>Networking</h4>
                          <p style={{ fontSize: '10px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. incididunt ut labore et dolore. Lorem ipsum dolor sit amet.
                          </p>
                          <button type="button" className="btn btn-primary" style={{ borderRadius: '50px' }}>
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Service 6 */}
                    <div className="containero d-flex justify-content-center">
                      <div
                        className="d-flex flex-column justify-content-center"
                        style={{ border: '1px solid gray', width: '300px', height: '190px' }}
                      >
                        <i className="fa-brands fa-wordpress text-center" style={{ fontSize: '40px' }}></i>
                        <h4 className="text-center">Wordpress Theme</h4>
                      </div>
                      <div className="overlay3 d-flex justify-content-center flex-row">
                        <div className="text-center boxmar p-4 tc">
                          <h4>Wordpress Theme</h4>
                          <p style={{ fontSize: '10px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. incididunt ut labore et dolore. Lorem ipsum dolor sit amet.
                          </p>
                          <button type="button" className="btn btn-primary" style={{ borderRadius: '50px' }}>
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
