import React from 'react';
import '../assets/css/css.css'; 
import { Link } from 'react-router-dom';
import logo from "../assets/images/logooo.png" 
function Header() {
  return (
    <>
      {/* Header Section */}
      <header className="bg-me" style={{ height: '54px' }}>
        <div className="d-flex justify-content-around ">
          <div className="mt-3" style={{ height: '20px' }}>
            <a href="#" className="me-2 text-colour tex-dec">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="me-2 text-colour tex-dec">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="me-2 text-colour tex-dec">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="me-2 text-colour tex-dec">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="me-2 text-colour tex-dec">
              <i className="fab fa-linkedin"></i>
            </a>
            <line className="lineone me-2"></line>
            <a href="#" className="text-colour tex-dec">
              <i className="fa-solid fa-location-dot m-2"></i>
            </a>
            <a style={{ color: 'white', fontSize: '12px' }}>267 Park Avenue New York, NY 90210</a>
          </div>
          <div className="navbar mt-1">
            <a href="" className="text-colour tex-dec">
              <i className="fa-regular fa-envelope"></i>
            </a>
            <p className="text-colour m-2" style={{ fontSize: '12px' }}>
              Quick Email
            </p>
            <line className="lineone me-4"></line>
            <a href="" className="text-colour">
              <i className="fa-solid fa-phone tex-dec"></i>
            </a>
            <p className="text-colour m-1" style={{ fontSize: '12px' }}>
              +1 (409) 987–5874
            </p>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <div className="sticky">
        <nav className="navbar navbar-expand-lg bg-white fonti fw-semibold">
          <div className="container">
            <img src={logo} style={{ height: '80px', marginLeft: '70px' }} alt="Logo" />
            <div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarScroll"
                aria-controls="navbarScroll"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav m-5 p-2 my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
                  <li className="nav-item dropdown">
                  <Link  to="/" activeClassName="active"
              className="nav-link dropdown-toggle COLOR"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      HOME
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                      <Link to="/" className="dropdown-item" >
                          HomePage
                        </Link>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another HomePage
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" style={{ width: '100%' }} />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link COLOR" href="#">
                      ABOUT
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle COLOR" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      HEADERS
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" style={{ width: '100%' }} />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle COLOR" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      BLOG-POST
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" style={{ width: '100%' }} />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle COLOR" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      SERVICES
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" style={{ width: '100%' }} />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle COLOR" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      FEATURES
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" style={{ width: '100%' }} />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle COLOR" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      PAGES
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" style={{ width: '100%' }} />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                  <Link to="/contact" className="nav-link COLOR" href="contact.html">
                      CONTACT
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
