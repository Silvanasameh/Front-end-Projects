import React from 'react';

const TeamMember = ({ imgSrc, name, role, description }) => {
  return (
    <div className="col-3">
      <div className="members">
        <img width="200" height="370" src={imgSrc} alt={name} />
        <div className="teami">
          <h4>
            <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
              {name}
            </a>
          </h4>
          <h6>{role}</h6>
          <p style={{ fontSize: '12px' }}>{description}</p>
        </div>
        <div className="team-soc">
          <a href="#" target="_blank"><i className="fab fa-facebook-f text-colour"></i></a>
          <a href="#" target="_blank"><i className="fab fa-twitter text-colour"></i></a>
          <a href="#" target="_blank"><i className="fab fa-linkedin-in text-colour"></i></a>
          <a href="#" target="_blank"><i className="fab fa-google-plus-g text-colour"></i></a>
          <a href="#" target="_blank"><i className="fab fa-tumblr text-colour"></i></a>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
