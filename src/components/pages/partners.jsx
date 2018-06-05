import React from 'react'; 

export default class Partners extends React.Component {

  render() {
  	var body;

    return (
      <div className="startups">
        <div className="header">
          <div className="overlay">
            <div className="contain">
              <div className="quote">
                <h2>Partners</h2>
                <p>We offer our candidates the necessary support to accelerate success by connecting them with appropriate mentors in the diaspora community; in-person as well as via technology.</p>
                <i onClick={() => {window.scrollTo(0, 600);}} className="material-icons">expand_more</i>
              </div>
            </div>
          </div>
          <div className="slider">
          </div>
        </div>
        <div className="contain">
          <div className="list">
            <div className="item">
              <a href="https://www.comicrelief.com/" target="_blank"><img src="https://storage.googleapis.com/unlocking-wat.appspot.com/partners/comicrelief.png" /></a>
            </div>
            <div className="item">
              <a href="http://www.ispacegh.com/" target="_blank"><img src="https://storage.googleapis.com/unlocking-wat.appspot.com/partners/iSpace.png" /></a>
            </div>
            <div className="item">
              <a href="http:// www.radicalleap.com/" target="_blank"><img src="https://storage.googleapis.com/unlocking-wat.appspot.com/partners/Radical-Leap-Logo.png" /></a>
            </div>
            <div className="item">
              <a href="http://www.mobilewebghana.org/" target="_blank"><img src="https://storage.googleapis.com/unlocking-wat.appspot.com/partners/Sankofa-Africa.png" /></a>
            </div>
            <div className="item">
              <a href="http://ghanacodeclub.org/" target="_blank"><img src="https://storage.googleapis.com/unlocking-wat.appspot.com/partners/Ghana-Code-Club.png" /></a>
            </div>
            <div className="item">
              <a href="http://www.ispacegh.com/" target="_blank"><img src="https://storage.googleapis.com/unlocking-wat.appspot.com/partners/MWG.png" /></a>
            </div>         
          </div>
        </div>
      </div>
    );
  }

}






