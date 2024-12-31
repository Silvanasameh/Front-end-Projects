import React, { useState } from 'react';

// Import images
import pro1 from '../assets/images/pro1.jpg';
import pro2 from '../assets/images/pro2.jpg';
import pro3 from '../assets/images/pro3.jpg';
import pro4 from '../assets/images/pro4.jpg';
import pro5 from '../assets/images/pro5.jpg';
import pro6 from '../assets/images/pro6.jpg';

const OurWork = () => {
  // State for filter
  const [filter, setFilter] = useState('all');
  // State for modal visibility and current image index
  const [modalVisible, setModalVisible] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Images with categories
  const images = [
    { src: pro1, category: ['de', 'gd'], title: 'Developement, Graphic Design  Project Title 01' },
    { src: pro2, category: ['de', 'gd', 'cd'], title: 'Developement, Graphic Design  Project Title 02' },
    { src: pro3, category: ['de', 'gd'], title: 'Developement, Graphic Design  Project Title 03' },
    { src: pro4, category: ['cd'], title: 'Developement, Graphic Design  Project Title 04' },
    { src: pro5, category: ['de'], title: 'Developement, Graphic Design  Project Title 05' },
    { src: pro6, category: ['gd'], title: 'Developement, Graphic Design  Project Title 06' },
  ];

  // Filtered images based on the selected filter
  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(image => image.category.includes(filter));

  // Function to change the filter
  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };

  // Open modal
  const openModal = (index) => {
    setCurrentSlideIndex(index);
    setModalVisible(true);
  };

  // Close modal
  const closeModal = () => {
    setModalVisible(false);
  };

  // Move to next/previous slide in modal
  const changeSlide = (direction) => {
    setCurrentSlideIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex < 0) return filteredImages.length - 1;
      if (newIndex >= filteredImages.length) return 0;
      return newIndex;
    });
  };

  return (
    <section>
      <div className="container-fluid">
        <div className="d-flex justify-content-center flex-row pt-5 mt-5 col-12">
          <div className="d-flex justify-content-center flex-column">
            <div className="line1left text-center"></div>
            <div className="line text-center"></div>
          </div>
          <h3 className="p-4" style={{ color: 'black' }}>
            Our Work
          </h3>
          <div className="d-flex justify-content-center flex-column">
            <div className="line1 text-center"></div>
            <div className="line text-center"></div>
          </div>
        </div>
        <p className="text-muted text-center" style={{ fontSize: '13px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, nisl sed bibendum pretium, diam nisi mattis lectus, eu varius lorem mauris posuere dui. Proin consequat.
        </p>
        <div id="myBtnContainer" className="d-flex flex-row justify-content-center" style={{ color: 'black' }}>
          <p className="m-3 bt" onClick={() => changeFilter('all')}>All</p>
          <p className="m-3">/</p>
          <p className="m-3 bt" onClick={() => changeFilter('cd')}>Creative Design</p>
          <p className="m-3">/</p>
          <p className="m-3 bt" onClick={() => changeFilter('de')}>Development</p>
          <p className="m-3">/</p>
          <p className="m-3 bt" onClick={() => changeFilter('gd')}>Graphic Design</p>
        </div>

        {/* Display images based on selected category */}
        <div className="container">
          <div className="row justify-content-center pt-3 mt-3">
            {/* Using col-4 to ensure 3 cards per row in a 12-column grid */}
            {filteredImages.map((image, index) => (
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 mb-4" key={index}>
                <div className="container0 hover-shadow">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="image0"
                    style={{ width: '100%' }}
                    onClick={() => openModal(index)}
                  />
                  <div className="overla">
                    <div className="d-flex justify-content-around">
                      <p className="title-project mt-2" >
                        {image.title}
                      </p>
                      <p>+</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalVisible && (
        <div id="myModal" className="modal">
          <span className="close cursor" onClick={closeModal}>&times;</span>
          <div className="modal-content">
            <div className="mySlides">
              <div className="numbertext">{currentSlideIndex + 1} / {filteredImages.length}</div>
              <img src={filteredImages[currentSlideIndex].src} style={{ width: '100%' }} />
            </div>
            <a className="prev" onClick={() => changeSlide(-1)}>&#10094;</a>
            <a className="next" onClick={() => changeSlide(1)}>&#10095;</a>

            <div className="caption-container">
              <p id="caption">{filteredImages[currentSlideIndex].title}</p>
            </div>

            <div className="row justify-content-center pt-4 mt-4">
              {filteredImages.map((image, index) => (
                <div className="col-4" key={index}>
                  <img
                    className="demo cursor"
                    src={image.src}
                    style={{ width: '100%' }}
                    onClick={() => setCurrentSlideIndex(index)}
                    alt={image.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurWork;


