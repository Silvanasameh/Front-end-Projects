import React from 'react';
import team1 from"../assets/images/team1.png";
import team2 from"../assets/images/team2.png";
import team3 from"../assets/images/team3.png";
import team4 from"../assets/images/team4.png";
import team5 from"../assets/images/team5.png";
import team6 from"../assets/images/team6.png";
const TeamSection = () => {
  return (
    <section className="bg-body-tertiary container-fluid">
      <div className="d-flex justify-content-center flex-row pt-5 mt-5">
        <div className="d-flex justify-content-center flex-column">
          <div className="line1left text center"></div>
          <div className="line text-center"></div>
        </div>
        <h3 className="p-4">Our Creative Team</h3>
        <div className="d-flex justify-content-center flex-column">
          <div className="line1 text center"></div>
          <div className="line text-center"></div>
        </div>
      </div>
      <p className="text-center text-muted">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. incididunt ut labore et dolore. Lorem
        <br />
        ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
      </p>

      {/* Team Section 1 */}
      <div className="row team2 justify-content-center">
        <div className="col-3">
          <div className="members">
            <img width="200" height="370" src={team1} alt="Jen Whyan" />
            <div className="teami">
              <h4>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  jen whyan
                </a>
              </h4>
              <h6>Founder</h6>
              <p style={{ fontSize: '12px' }}>
                Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam
                ultrices mauris....
              </p>
            </div>
            <div className="team-soc">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f text-colour"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter text-colour"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in text-colour"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-google-plus-g text-colour"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tumblr text-colour"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="col-3">
          <div className="members">
            <img width="200" height="370" src={team2} alt="Mical Peterson" />
            <div className="teami">
              <h4>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  mical peterson
                </a>
              </h4>
              <h6>Founder</h6>
              <p style={{ fontSize: '12px' }}>
                Lorem ipsum dolor sit amet etgda ut exercitation ullamco consectetuer adipiscing elit Aenean commodo ligula.
              </p>
            </div>
            <div className="team-soc">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f text-colour"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter text-colour"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in text-colour"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-google-plus-g text-colour"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tumblr text-colour"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="col-3">
          <div className="members">
            <img width="200" height="370" src={team3} alt="Sara Corner" />
            <div className="teami">
              <h4>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  sara corner
                </a>
              </h4>
              <h6>Founder</h6>
              <p style={{ fontSize: '12px' }}>
                Lorem ipsum dolor sit amet etgda ut exercitation ullamco consectetuer adipiscing elit Aenean commodo ligula.
              </p>
            </div>
            <div className="team-soc">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f text-colour"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter text-colour"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in text-colour"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-google-plus-g text-colour"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tumblr text-colour"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
<br></br><br></br><br></br><br></br>
      {/* Team Section 2 */}
      <div className="row team2 justify-content-center">
        <div className="col-3">
          <div className="members">
            <img width="200" height="370" src={team4} alt="Jen Whyan" />
            <div className="teami">
              <h4>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  jen whyan
                </a>
              </h4>
              <h6>Founder</h6>
              <p style={{ fontSize: '12px' }}>
                Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam
                ultrices mauris....
              </p>
            </div>
            <div className="team-soc">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f text-colour"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter text-colour"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in text-colour"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-google-plus-g text-colour"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tumblr text-colour"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Team Member 4 */}
        <div className="col-3">
          <div className="members">
            <img width="200" height="370" src={team5} alt="Mical Peterson" />
            <div className="teami">
              <h4>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  mical peterson
                </a>
              </h4>
              <h6>Founder</h6>
              <p style={{ fontSize: '12px' }}>
                Lorem ipsum dolor sit amet etgda ut exercitation ullamco consectetuer adipiscing elit Aenean commodo ligula.
              </p>
            </div>
            <div className="team-soc">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f text-colour"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter text-colour"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in text-colour"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-google-plus-g text-colour"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tumblr text-colour"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Team Member 5 */}
        <div className="col-3">
          <div className="members">
            <img width="200" height="370" src={team6} alt="Sara Corner" />
            <div className="teami">
              <h5>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  sara corner
                </a>
              </h5>
              <h6>Founder</h6>
              <p style={{ fontSize: '12px', color: 'black' }}>
                Lorem ipsum dolor sit amet etgda ut exercitation ullamco consectetuer adipiscing elit Aenean commodo ligula.
              </p>
            </div>
            <div className="team-soc">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f text-colour"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter text-colour"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in text-colour"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-google-plus-g text-colour"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tumblr text-colour"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
