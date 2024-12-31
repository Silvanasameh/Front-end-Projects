import React from 'react';
import spedd from "../assets/images/spedd.png";
const ImageSection = () => {
  return (
    <section style={{ width: '100%' }}>
      <div className="mt-5 pt-5">
        <img src={spedd} alt="Speed" style={{ width: '100%' }} />
      </div>
    </section>
  );
};

export default ImageSection;
