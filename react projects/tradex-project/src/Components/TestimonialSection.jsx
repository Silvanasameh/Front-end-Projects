import React, { useState } from 'react';
import tes1Image from '../assets/images/tes1.jpg';
import tes2Image from '../assets/images/tes2.jpg';
import tes3Image from '../assets/images/4.jpg';
import tes4Image from '../assets/images/5.jpg';
const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      image: tes1Image ,
      title: 'Card title 1',
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      updated: 'Last updated 3 mins ago',
    },
    {
        image: tes2Image ,
      title: 'Card title 2',
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      updated: 'Last updated 3 mins ago',
    },
    {
        image: tes3Image ,
      title: 'Card title 3',
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      updated: 'Last updated 3 mins ago',
    },
    {
        image: tes4Image ,
      title: 'Card title 4',
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      updated: 'Last updated 3 mins ago',
    },
    {
        image: tes2Image ,
      title: 'Card title 4',
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      updated: 'Last updated 3 mins ago',
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section>
    <div className="container-fluid bg-white">
      <div className="d-flex justify-content-center flex-row pt-5">
        <div className="d-flex justify-content-center flex-column">
          <div className="line1left text center"></div>
          <div className="line text-center"></div>
        </div>
        <h2 className="p-4">Testimonial</h2>
        <div className="d-flex justify-content-center flex-column">
          <div className="line1 text center"></div>
          <div className="line text-center"></div>
        </div>
      </div>

      <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
        <div className="carousel-inner">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
              <div className="d-flex flex-row justify-content-center">
                {/* Group of cards */}
                <div className="card mb-3 m-2" style={{ maxWidth: '540px' }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={testimonial.image} className="mt-3 p-3" alt="testimonial" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h3 className="card-title ">{testimonial.title}</h3>
                        <p className="card-text font " >{testimonial.text}</p>
                        <p className="card-text">
                          <small className="text-body-secondary">{testimonial.updated}</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Another Card */}
                <div className="card mb-3 m-2" style={{ maxWidth: '540px' }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={testimonial.image} className="mt-3 p-3" alt="testimonial" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h3 className="card-title">{testimonial.title}</h3>
                        <p className="card-text font">{testimonial.text}</p>
                        <p className="card-text">
                          <small className="text-body-secondary">{testimonial.updated}</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5 pt-5">
        <button
          className="m-3 btn btn-primary"
          type="button"
          onClick={handlePrev}
          style={{
            borderRadius: '30px',
            borderTopRightRadius: '0',
            borderBottomRightRadius: '0',
            width: '39px',
            height: '30px',
            backgroundColor: '#0c65ed',
          }}
        >
          <span className="text-center">
            <i className="fa-solid fa-arrow-left"></i>
          </span>
        </button>
        <button
          className="m-3 btn btn-primary"
          type="button"
          onClick={handleNext}
          style={{
            borderRadius: '30px',
            borderTopLeftRadius: '0',
            borderBottomLeftRadius: '0',
            width: '39px',
            height: '30px',
            backgroundColor: '#0c65ed',
          }}
        >
          <div>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </button>
      </div>
    </div>
  </section>
);
};
export default TestimonialSection;
