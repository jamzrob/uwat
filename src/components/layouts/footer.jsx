import React from 'react'; 

export default class Footer extends React.Component {

  render() {
    return (
        <footer>
          <div className="message">
            <div className="social">
              <a href="https://web.facebook.com/unlockingwat/" target="blank"><i className="fa fa-facebook"></i></a>
              <a href="https://twitter.com/UnlockingWAT" target="blank"><i className="fa fa-twitter"></i></a>
              <a href="https://www.instagram.com/unlockingwat/" target="blank"><i className="fa fa-instagram"></i></a>
            </div> 
            <p>
              info@unlockingwat.com<br />
              205/6 2nd Emmause Lane,Labone<br />
              0554537230 / 0506556614
            </p>
          </div>
        </footer>
    );
  }

}
 





