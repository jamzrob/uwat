import React from 'react'; 

export default class Mentors extends React.Component {

  render() {
  	var body;

    return (
      <div className="mentorship">
        <div className="header">
          <div className="overlay">
            <div className="contain">
              <div className="quote">
                <h2>MENTORS</h2>
                <p>Helping our candidates unlock their hidden potential.</p>
                <i onClick={() => {window.scrollTo(0, 600);}} className="material-icons">expand_more</i>
              </div>
            </div>
          </div>
          <div className="slider">
          </div>
        </div>
        <div className="contain">
          <h2>OUR WONDERFUL MENTORS</h2>
          <hr />
          <div className="list">
            <div className="item">
              <a><img src="https://storage.googleapis.com/unlocking-wat.appspot.com/mentors/JacquelineOnalo.png" /></a>
              <h4>Jacqueline Onalo</h4>
              <a href="https://www.linkedin.com/in/jacqueline-onalo-frsa-3708b945/" target="blank"><i className="fa fa-linkedin"></i></a>
            </div>
            <div className="item">
              <a><img src="https://storage.googleapis.com/unlocking-wat.appspot.com/mentors/NoreenMakosewe.png" /></a>
              <h4>Noreen Makosewe</h4>
              <a href="https://www.linkedin.com/in/noreenmakosewe/" target="blank"><i className="fa fa-linkedin"></i></a>
            </div>
            <div className="item">
              <a><img src="https://storage.googleapis.com/unlocking-wat.appspot.com/mentors/KatieDay.png" /></a>
              <h4>Katie Day</h4>
              <a href="https://www.linkedin.com/in/katiedayconsulting/" target="blank"><i className="fa fa-linkedin"></i></a>
            </div>
            <div className="item">
              <a><img src="https://storage.googleapis.com/unlocking-wat.appspot.com/mentors/KatrinaYoung.png" /></a>
              <h4>Katrina Young</h4>
              <a href="https://www.linkedin.com/in/katrina-young-108294b3/" target="blank"><i className="fa fa-linkedin"></i></a>
            </div>
            <div className="item">
              <a><img src="https://storage.googleapis.com/unlocking-wat.appspot.com/mentors/KayAkinwumi.png" /></a>
              <h4>Kay Akinwumi</h4>
              <a target="blank"><i className="fa fa-linkedin"></i></a>
            </div>
            <div className="item">
              <a><img src="https://storage.googleapis.com/unlocking-wat.appspot.com/mentors/RashadaHarry.png" /></a>
              <h4>Rashada Harry</h4>
              <a href="https://www.linkedin.com/in/rashadaharry/" target="blank"><i className="fa fa-linkedin"></i></a>
            </div>
            <div className="item">
              <a><img src="https://storage.googleapis.com/unlocking-wat.appspot.com/mentors/WinnieAnnan.png" /></a>
              <h4>Winnie Annan Forson</h4>
              <a href="https://www.linkedin.com/in/winnie-annan-forson-b267a131/" target="blank"><i className="fa fa-linkedin"></i></a>
            </div>
            <div className="item">
              <a><img src="https://storage.googleapis.com/unlocking-wat.appspot.com/mentors/EvaSsanyu.png" /></a>
              <h4>Eva Ssanyu</h4>
              <a target="blank"><i className="fa fa-linkedin"></i></a>
            </div>
            <div className="item">
              <a><img src="https://storage.googleapis.com/unlocking-wat.appspot.com/mentors/KatrinaDouglas.png" /></a>
              <h4>Katrina Douglas</h4>
              <a target="blank"><i className="fa fa-linkedin"></i></a>
            </div>
            <div className="item">
              <a><img src="https://storage.googleapis.com/unlocking-wat.appspot.com/mentors/LaDawnTownsend.png" /></a>
              <h4>LaDawn Townsend</h4>
              <a target="blank"><i className="fa fa-linkedin"></i></a>
            </div>
            <div className="item">
              <a><img src="https://storage.googleapis.com/unlocking-wat.appspot.com/mentors/SheunDavid.png" /></a>
              <h4>Sheun David Onamusi</h4>
              <a target="blank"><i className="fa fa-linkedin"></i></a>
            </div>
            <div className="item">
              <a><img src="https://storage.googleapis.com/unlocking-wat.appspot.com/mentors/JacquelineTsuma.png" /></a>
              <h4>Jacqueline Tsuma</h4>
              <a target="blank"><i className="fa fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    );
  }

}






