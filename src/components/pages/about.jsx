import React from 'react'; 

export default class About extends React.Component {

  render() {
    return (
      <div className="about">
      	<div className="header">
          <div className="overlay">
            <div className="contain">
              <div className="quote">
                <h2>OUR MISSION</h2>
                <p>
                	To empower women with Coding, Business Management, Professional Networking and Pitching Skills to thrive in the ecosystem.
                </p>
                <i onClick={() => {window.scrollTo(0, 600);}} className="material-icons">expand_more</i>
              </div>
            </div>
          </div>
          <div className="slider">
          </div>
        </div>
        <div className="contain">
          <div className="list">
            <h3>OUR TEAM</h3>
            <hr />
            <div className="item">
              <img src="https://storage.googleapis.com/unlocking-wat.appspot.com/team/favor.jpg" />

              <div className="social">
                <a href="https://www.facebook.com/ozichukwu.nma" target="blank"><i className="fa fa-facebook"></i></a>
                <a href="https://twitter.com/OziNmaFav" target="blank"><i className="fa fa-twitter"></i></a>
                <a href="https://www.linkedin.com/in/nma-ozichukwu-53418774/" target="blank"><i className="fa fa-linkedin"></i></a>
              </div>
              <h5>NMA FAVOUR OZICHUKWU</h5>
              <h6>Program Manager</h6>
              <div className="desc">
                <p>
                  Passionate about traveling around the world to make an impact. Provided with the right environment, I believe women can excel in any career path.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}


