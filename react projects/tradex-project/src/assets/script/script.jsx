import React, { useState, useEffect } from 'react';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [slideIndex, setSlideIndex] = useState(1);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Slide functionality
  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex > 3) newIndex = 1;
      if (newIndex < 1) newIndex = 3;
      return newIndex;
    });
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  useEffect(() => {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("demo");
    const captionText = document.getElementById("caption");

    Array.from(slides).forEach((slide) => {
      slide.style.display = "none";
    });

    Array.from(dots).forEach((dot) => {
      dot.className = dot.className.replace(" active", "");
    });

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
  }, [slideIndex]);

  // Filter functionality
  const filterSelection = (filter) => {
    setActiveFilter(filter);
  };

  // Scroll to top button visibility
  useEffect(() => {
    const scrollFunction = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    
    window.addEventListener("scroll", scrollFunction);
    
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  // Counter animation
  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      let count = 0;
      const target = parseInt(counter.innerText);
      const animate = () => {
        if (count < target) {
          count++;
          counter.innerText = count;
          setTimeout(animate, 1);
        }
      };
      animate();
    });
  }, []);

  return (
    <div>
      {/* Modal Section */}
      {modalVisible && (
        <div id="myModal" style={{ display: 'block' }}>
          <div>
            <span onClick={() => setModalVisible(false)}>Close</span>
          </div>
        </div>
      )}

      {/* Slides Section */}
      <div>
        <button onClick={() => plusSlides(-1)}>Previous</button>
        <button onClick={() => plusSlides(1)}>Next</button>

        <div>
          <div className="mySlides" style={{ display: slideIndex === 1 ? 'block' : 'none' }}>Slide 1</div>
          <div className="mySlides" style={{ display: slideIndex === 2 ? 'block' : 'none' }}>Slide 2</div>
          <div className="mySlides" style={{ display: slideIndex === 3 ? 'block' : 'none' }}>Slide 3</div>

          <div>
            <span className="demo" onClick={() => currentSlide(1)}>1</span>
            <span className="demo" onClick={() => currentSlide(2)}>2</span>
            <span className="demo" onClick={() => currentSlide(3)}>3</span>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div id="myBtnContainer">
        <button className={activeFilter === "all" ? "active" : ""} onClick={() => filterSelection("all")}>All</button>
        <button className={activeFilter === "web" ? "active" : ""} onClick={() => filterSelection("web")}>Web</button>
        <button className={activeFilter === "graphic" ? "active" : ""} onClick={() => filterSelection("graphic")}>Graphic</button>
      </div>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button id="myBtn" onClick={topFunction}>
          Scroll to Top
        </button>
      )}

      {/* Counter Section */}
      <div className="counter" style={{ fontSize: '25px' }}>8000</div>
      <div className="counter" style={{ fontSize: '25px' }}>810</div>
      <div className="counter" style={{ fontSize: '25px' }}>2000</div>
      <div className="counter" style={{ fontSize: '25px' }}>20</div>
    </div>
  );
};

export default App;
