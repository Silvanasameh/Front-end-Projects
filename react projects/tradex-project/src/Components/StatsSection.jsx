import React from 'react';
import "../assets/script/script";
const StatsSection = () => {
  return (
    <section className="pt-3 mt-3" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="d-flex flex-row justify-content-center pt-4 mt-4">
        <div className="d-flex flex-row m-3">
          <div className="">
            <div className="border ico shadow m-2">
              <i className="fa-solid fa-tv"></i>
            </div>
          </div>
          <div className="m-4">
            <span className="counter" style={{ fontSize: '25px' }}>
              8000
            </span>
            <p className="text-muted">Total Projects</p>
          </div>
        </div>
        <div className="d-flex flex-row m-3">
          <div className="">
            <div className="border ico shadow m-2">
              <i className="fa-solid fa-trophy"></i>
            </div>
          </div>
          <div className="m-4">
            <span className="counter" style={{ fontSize: '25px' }}>
              810
            </span>
            <p className="text-muted">Won Awards</p>
          </div>
        </div>
        <div className="d-flex flex-row m-3">
          <div className="">
            <div className="border ico shadow m-2">
              <i className="fa-regular fa-face-smile"></i>
            </div>
          </div>
          <div className="m-4">
            <span className="counter" style={{ fontSize: '25px' }}>
              2000
            </span>
            <p className="text-muted">Happy Clients</p>
          </div>
        </div>
        <div className="d-flex flex-row m-3">
          <div className="">
            <div className="border ico shadow m-2">
              <i className="fa-solid fa-calendar-days"></i>
            </div>
          </div>
          <div className="m-4">
            <span className="counter" style={{ fontSize: '25px' }}>
              20
            </span>
            <p className="text-muted">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
