import React from 'react';
import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png";
import logo4 from "../assets/images/logo4.png";
import logo5 from "../assets/images/logo5.png";
import logo6 from "../assets/images/logo6.png";
import person from "../assets/images/person.png";
const MeetOurClients = () => {
  return (
    <section className="bg-white">
      <div className="d-flex justify-content-center mt-5 pt-5">
        <div className="">
          <img
            src={person}
            alt="Person"
            className=""
            style={{
              height: '387px',
              filter: 'drop-shadow(-10px -3px 6px lightgray)',
            }}
          />
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex flex-row">
            <h2 className="p-4">Meet Our Clients</h2>
            <div className="d-flex justify-content-center flex-column">
              <div className="line1 text-center"></div>
              <div className="line text-center"></div>
            </div>
          </div>
          <div className="d-flex">
            <div
              className="m-3"
              style={{
                border: '1px solid #808080',
                height: '100px',
                borderRadius: '5px',
              }}
            >
              <img
                src={logo1}
                alt="Logo 1"
                style={{ margin: '15px', width: '160px' }}
              />
            </div>
            <div
              className="m-3"
              style={{
                border: '1px solid #808080',
                height: '100px',
                borderRadius: '5px',
              }}
            >
              <img
                src={logo2}
                alt="Logo 2"
                style={{ margin: '15px', width: '160px' }}
              />
            </div>
            <div
              className="m-3"
              style={{
                border: '1px solid #808080',
                height: '100px',
                borderRadius: '5px',
              }}
            >
              <img
                src={logo3}
                alt="Logo 3"
                style={{ margin: '15px', width: '160px' }}
              />
            </div>
          </div>
          <div className="d-flex">
            <div
              className="m-3"
              style={{
                border: '1px solid #808080',
                height: '100px',
                borderRadius: '5px',
              }}
            >
              <img
                src={logo4}
                alt="Logo 4"
                style={{ margin: '15px', width: '160px' }}
              />
            </div>
            <div
              className="m-3"
              style={{
                border: '1px solid #808080',
                height: '100px',
                borderRadius: '5px',
              }}
            >
              <img
                src={logo5}
                alt="Logo 5"
                style={{ margin: '15px', width: '160px' }}
              />
            </div>
            <div
              className="m-3"
              style={{
                border: '1px solid #808080',
                height: '100px',
                borderRadius: '5px',
              }}
            >
              <img
                src={logo6}
                alt="Logo 6"
                style={{ margin: '15px', width: '160px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurClients;
