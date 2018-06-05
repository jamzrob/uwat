import React from 'react'; 

export default class Members extends React.Component {

  render() {
    return (
      <div className="members">
        <div className="header">
          <div className="overlay">
            <div className="contain">
              <div className="quote">
                <h2>MEMBERS</h2>
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
              <a href="https://twitter.com/Ifeoma_xo" target="_blank"><img src="https://storage.googleapis.com/unlocking-wat.appspot.com/members/Amara.jpg" /></a>
            </div>
            <div className="item">
              <a href="https://web.facebook.com/sabena.adam"  target="_blank"><img src="https://storage.googleapis.com/unlocking-wat.appspot.com/members/Sabena.jpg" /></a>
            </div>
            <div className="item">
              <a href="https://twitter.com/stingg_" target="_blank"><img src="https://storage.googleapis.com/unlocking-wat.appspot.com/members/Benewaa.jpg" /></a>
            </div>
            
            <div className="item">
              <a href="https://twitter.com/delasiavis" target="_blank"><img src="https://storage.googleapis.com/unlocking-wat.appspot.com/members/Deborah.jpg" /></a>
            </div>
            <div className="item">
              <a href="https://twitter.com/oveelang" target="_blank"><img src="https://storage.googleapis.com/unlocking-wat.appspot.com/members/Salma.jpg" /></a>
            </div>
            <div className="item">
              <a href="https://twitter.com/lyn_buame" target="_blank"><img src="https://storage.googleapis.com/unlocking-wat.appspot.com/members/Linda.jpg" /></a>
            </div>
            <div className="item">
              <a href="https://twitter.com/Innadiko" target="_blank"><img src="https://storage.googleapis.com/unlocking-wat.appspot.com/members/Hajar.jpg" /></a>
            </div>
            <div className="item">
              <a href="https://web.facebook.com/hawawu.mustapha.98" target="_blank"><img src="https://storage.googleapis.com/unlocking-wat.appspot.com/members/Huwawu.jpg" /></a>
            </div>
             <div className="item">
              <a href="https://web.facebook.com/fafali.tudzi" target="_blank"><img src="https://storage.googleapis.com/unlocking-wat.appspot.com/members/Fafali.jpg" /></a>
            </div>
            <div className="item">
              <a href="https://web.facebook.com/samira.yahaya.98" target="_blank"><img src="https://storage.googleapis.com/unlocking-wat.appspot.com/members/Samiratu.jpg" /></a>
            </div>
            <div className="item">
              <a href="https://twitter.com/MensahSussy" target="_blank"><img src="https://storage.googleapis.com/unlocking-wat.appspot.com/members/Susuanna.jpg" /></a>
            </div>
          </div>
        </div>
      </div>
    );
  }

}






