import React from 'react';
import ga1 from "../assets/images/ga1.png";
import ga2 from "../assets/images/ga2.jpg";
import ga3 from "../assets/images/ga3.jpg";
const LatestBlogSection = () => {
  return (
    <section className="bg-body-tertiary container-fluid">
      <div className="d-flex justify-content-center flex-row pt-5 mt-5">
        <div className="d-flex justify-content-center flex-column">
          <div className="line text-center"></div>
        </div>
        <h2 className="p-4">Latest Blog</h2>
        <div className="d-flex justify-content-center flex-column">
          <div className="line text-center"></div>
        </div>
      </div>

      <p className="text-center text-muted">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. incididunt ut labore et dolore. Lorem<br /> ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm dipisicing elit, sed do eiusmod tempor.
      </p>

      <div className="mt-5 mb-5 row row-cols-1 row-cols-5 justify-content-center">
        {/* First Blog Card */}
        <div className="col">
          <div className="card shadow all" style={{ overflow: 'hidden' }}>
            <div>
              <img src={ga1} className="card-img-top imi" style={{ overflow: 'hidden' }} alt="..." />
            </div>
            <div className="cardy d-flex">
              <div className="icono" style={{ height: '277px', width: '10%', backgroundColor: 'black', marginTop: '3px' }}>
                <div className="d-flex flex-column justify-content-center" style={{ paddingTop: '50px' }}>
                  <a href="#" target="_blank"><i className="fab fa-facebook-f text-colour m-2 font" ></i></a>
                  <a href="#" target="_blank"><i className="fab fa-twitter text-colour m-2 font"></i></a>
                  <a href="#" target="_blank"><i className="fab fa-linkedin-in text-colour m-2 font"></i></a>
                  <a href="#" target="_blank"><i className="fab fa-google-plus-g text-colour m-2 font"></i></a>
                  <a href="#" target="_blank"><i className="fab fa-tumblr text-colour m-2 font"></i></a>
                </div>
              </div>
              <div className="d-flex flex-column">
                <h5 className="">Four ways to cheer and plan <br />your self up on Blue</h5>
                <div className="d-flex dar text-muted m-2">
                  <p className="p-1"><i className="fa-regular fa-user"></i>By Dtm-demo </p>
                  <p className="p-1">|</p>
                  <p className="p-1"><i className="fa-solid fa-calendar-days"></i>19 Dec 2018</p>
                </div>
                <div className="d-flex m-2">
                  <div className="" style={{ width: '20%', backgroundColor: '#0c65ed', height: '2px' }}></div>
                  <div className="lini" style={{ width: '100%', backgroundColor: 'gray', height: '1px' }}></div>
                </div>
                <p className="text-muted m-3" style={{ fontSize: '13px' }}>
                  Lorem ipsum dolor sit amet, rcquisc<br /> adipiscing elit. Aenean socada commodo<br /> ligauala egets dssdolor....
                </p>
                <p className="m-3" style={{ fontSize: '10px' }}>
                  Read More<i className="fa-solid fa-arrow-right m-1 tro"></i>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Blog Card */}
        <div className="col">
          <div className="card shadow all" style={{ overflow: 'hidden' }}>
            <img src={ga2} className="card-img-top imi" style={{ overflow: 'hidden' }} alt="..." />
            <div className="cardy d-flex">
              <div className="icono" style={{ height: '277px', width: '10%', backgroundColor: 'black', marginTop: '3px' }}>
                <div className="d-flex flex-column justify-content-center" style={{ paddingTop: '50px' }}>
                  <a href="#" target="_blank"><i className="fab fa-facebook-f text-colour m-2 font"></i></a>
                  <a href="#" target="_blank"><i className="fab fa-twitter text-colour m-2 font"></i></a>
                  <a href="#" target="_blank"><i className="fab fa-linkedin-in text-colour m-2 font"></i></a>
                  <a href="#" target="_blank"><i className="fab fa-google-plus-g text-colour m-2 font"></i></a>
                  <a href="#" target="_blank"><i className="fab fa-tumblr text-colour m-2 font"></i></a>
                </div>
              </div>
              <div className="d-flex flex-column">
                <h5 className="">Four ways to cheer and plan <br />your self up on Blue</h5>
                <div className="d-flex dar text-muted m-2">
                  <p className="p-1"><i className="fa-regular fa-user"></i>By Dtm-demo </p>
                  <p className="p-1">|</p>
                  <p className="p-1"><i className="fa-solid fa-calendar-days"></i>19 Dec 2018</p>
                </div>
                <div className="d-flex m-2">
                  <div className="" style={{ width: '20%', backgroundColor: '#0c65ed', height: '2px' }}></div>
                  <div className="lini" style={{ width: '80%', backgroundColor: 'gray', height: '1px' }}></div>
                </div>
                <p className="text-muted m-3" style={{ fontSize: '13px' }}>
                  Lorem ipsum dolor sit amet, rcquisc<br /> adipiscing elit. Aenean socada commodo<br /> ligauala egets dssdolor....
                </p>
                <p className="m-3" style={{ fontSize: '10px' }}>
                  Read More<i className="fa-solid fa-arrow-right m-1 tro"></i>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Third Blog Card */}
        <div className="col">
          <div className="card shadow all" style={{ overflow: 'hidden' }}>
            <div className="trano">
              <img src={ga3} className="card-img-top imi" style={{ overflow: 'hidden' }} alt="..." />
            </div>
            <div className="cardy d-flex">
              <div className="icono" style={{ height: '277px', width: '10%', backgroundColor: 'black', marginTop: '3px' }}>
                <div className="d-flex flex-column justify-content-center" style={{ paddingTop: '50px' }}>
                  <a href="#" target="_blank"><i className="fab fa-facebook-f text-colour m-2 font"></i></a>
                  <a href="#" target="_blank"><i className="fab fa-twitter text-colour m-2 font"></i></a>
                  <a href="#" target="_blank"><i className="fab fa-linkedin-in text-colour m-2 font"></i></a>
                  <a href="#" target="_blank"><i className="fab fa-google-plus-g text-colour m-2 font"></i></a>
                  <a href="#" target="_blank"><i className="fab fa-tumblr text-colour m-2 font"></i></a>
                </div>
              </div>
              <div className="d-flex flex-column">
                <h5 className="">Four ways to cheer and plan <br />your self up on Blue</h5>
                <div className="d-flex dar text-muted m-2">
                  <p className="p-1"><i className="fa-regular fa-user"></i>By Dtm-demo </p>
                  <p className="p-1">|</p>
                  <p className="p-1"><i className="fa-solid fa-calendar-days"></i>19 Dec 2018</p>
                </div>
                <div className="d-flex m-2">
                  <div className="" style={{ width: '20%', backgroundColor: '#0c65ed', height: '2px' }}></div>
                  <div className="lini" style={{ width: '80%', backgroundColor: 'gray', height: '1px' }}></div>
                </div>
                <p className="text-muted m-3" style={{ fontSize: '13px' }}>
                  Lorem ipsum dolor sit amet, rcquisc<br /> adipiscing elit. Aenean socada commodo<br /> ligauala egets dssdolor....
                </p>
                <p className="m-3" style={{ fontSize: '10px' }}>
                  Read More<i className="fa-solid fa-arrow-right m-1 tro"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div><br></br><br></br>
    </section>
  );
};

export default LatestBlogSection;
