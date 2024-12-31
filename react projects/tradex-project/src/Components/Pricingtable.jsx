import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for links

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState("perMonth");

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <section>
        {/* Pricing Tabs */}
        <div className="bg-body-tertiary" style={{ height: '80px' }}></div>
        <section className="bg-white mt-5 pt-5">
          <div className="container" style={{ color: 'black' }}>
            <ul className="d-flex justify-content-center">
              <li
                className={`btn shadow fw-bold ${activeTab === 'perMonth' ? 'active' : ''}`}
                style={{
                  borderRadius: '50px',
                  width: '20%',
                  color: 'white',
                  borderTopRightRadius: '0',
                  borderBottomRightRadius: '0',
                  backgroundColor: '#0c65ed',
                  borderColor: '#0c65ed',
                  height: '50px'
                }}
                onClick={() => toggleTab('perMonth')}
              >
                <a style={{ color: 'white' }}>Per/Month</a>
              </li>
              <li
                className={`btn shadow fw-bold ${activeTab === 'perYear' ? 'active' : ''}`}
                style={{
                  borderRadius: '50px',
                  width: '20%',
                  border: '1px solid #0c65ed',
                  borderTopLeftRadius: '0',
                  borderBottomLeftRadius: '0',
                  height: '50px',
                  color: '#0c65ed'
                }}
                onClick={() => toggleTab('perYear')}
              >
                <a style={{ color: '#0c65ed' }}>Per/Year</a>
              </li>
            </ul>

            <div className="tab-content">
              {/* Per Month Pricing */}
              {activeTab === 'perMonth' && (
                <div className="pricing-table mt-5 pt-5 tc">
                  {["Personal", "Business", "Ultimate"].map((plan, index) => (
                    <div className={`pricing-box ${index !== 0 ? 'shadow-lg' : ''}`} style={index !== 0 ? { border: 'none' } : { borderRight: 'none' }} key={index}>
                      <div className="title">{plan}</div>
                      <div className="d-flex justify-content-center">
                        <hr style={{ border: '1px solid #0c65ed', width: '15%' }} />
                      </div>
                      <div className="price"><span style={{ color: 'black' }}>From</span> ${index === 0 ? '399' : index === 1 ? '899' : '499'}</div>
                      <hr style={{ height: '2px', width: '90%', borderWidth: '0', color: 'gray', backgroundColor: 'gray' }} />
                      <ul className="features">
                        {[
                          "03 PSD Pack",
                          "03 Wordpress Pack",
                          "120 Support Tickets"
                        ].map((feature, index) => (
                          <li key={index}>
                            <i className="fa-solid fa-check" style={{ color: '#0c65ed' }}></i>
                            <span className="text">{feature}</span>
                            <p>Lorem ipsum dolor sit amet, consectetuer Aenean commodo ligula</p><br></br>
                          </li>
                        ))}
                      </ul>
                      <a href="#" className="button" style={{ borderRadius: '50px' }}>GET STARTED NOW</a>
                    </div>
                  ))}
                </div>
              )}

              {/* Per Year Pricing */}
              {activeTab === 'perYear' && (
                <div className="pricing-table mt-5 pt-5 tc">
                  {["Business", "Ultimate", "Personal"].map((plan, index) => (
                    <div className={`pricing-box ${index === 1 ? 'shadow-lg' : ''}`} style={index !== 1 ? { border: 'none' } : { borderRight: 'none' }} key={index}>
                      <div className="title">{plan}</div>
                      <div className="d-flex justify-content-center">
                        <hr style={{ border: '1px solid #0c65ed', width: '15%' }} />
                      </div>
                      <div className="price"><span style={{ color: 'black' }}>From</span> ${index === 0 ? '399' : index === 1 ? '899' : '499'}</div>
                      <hr style={{ height: '2px', width: '90%', borderWidth: '0', color: 'gray', backgroundColor: 'gray' }} />
                      <ul className="features">
                        {[
                          "03 PSD Pack",
                          "03 Wordpress Pack",
                          "120 Support Tickets"
                        ].map((feature, index) => (
                          <li key={index}>
                            <i className="fa-solid fa-check" style={{ color: '#0c65ed' }}></i>
                            <span className="text">{feature}</span><br></br><br></br>
                            <p>Lorem ipsum dolor sit amet, consectetuer Aenean commodo ligula</p>
                          </li>
                        ))}
                      </ul><br></br><br></br>
                      <a href="#" className="button" style={{ borderRadius: '50px' }}>GET STARTED NOW</a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default TeamSection;
