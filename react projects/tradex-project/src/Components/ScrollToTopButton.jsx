import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to the top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ position: 'fixed', top: '95vh', right: '40px' }}>
      {isVisible && (
        <button
          onClick={scrollToTop}
          id="myBtn"
          title="Go to top"
          style={{
            width: '40px',
            borderRadius: '50%',
            border: 'none',
            fontSize: '30px',
            color: 'white',
            height: '40px',
            backgroundColor: '#0c65ed',
            display: 'inline-block',
          }}
        >
          ^
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
