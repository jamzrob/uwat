import React from 'react'; 

export default class Welcome extends React.Component {

  render() {
  	var body;

    return (
      <div className="welcome">
        
        <div className="header">
          <div className="overlay">
            <div className="contain">
              <div className="desc">
                <h2>UNLOCKING WOMEN AND TECHNOLOGY</h2>
                <h4>GOES NATIONWIDE</h4>
                <h2>Northern, Ashanti, Volta, Central and Brong-Ahafo Regions</h2>
                <div className="nav">
                  <button onClick={() => {location.hash = "#/contact"}}>CONTACT US</button>
                </div>
              </div>
            </div>
          </div>
          <div className="home">
            
          </div>
        </div>
        
        <div className="contain">
          <div className="layer3">
            <div className="progs">
              <div>
                <img src="https://storage.googleapis.com/unlocking-wat.appspot.com/home/business.png" />
                <div className="content">
                  <h6>BUSINESS DEVELOPMENT</h6>
                  <p>
                    This course has been designed to help students transform their passion and ideas into a viable business. The course will explore and apply relevant business models and concepts intended to help students “think outside the box”. Students will be challenged to explore different activities as a starting point for entrepreneurial success.
                  </p>
                </div>
              </div>
              <div>
                <div className="content">
                  <h6>TECH DEVELOPMENT</h6>
                  <p>
                    This course has been designed to help students transform their business ideas into viable products such as websites and apps. Students at the end of this class will 
                  </p>
                  <li>- Gain Programming skill</li>
                  <li>- Website design skill</li>
                </div>
                <img src="https://storage.googleapis.com/unlocking-wat.appspot.com/home/tech.png" />
              </div>
              <div>
                <img src="https://storage.googleapis.com/unlocking-wat.appspot.com/home/mentorship.png" />
                <div className="content">
                  <h6>MENTORSHIP & SUPPORT</h6>
                  <p>
                    We offer our students the necessary support to accelerate success by connecting them with appropriate mentors in-person as well as online.
                  </p>
                  <li>- Mentors who have experience in relation to the the students Startup are selected.</li>
                </div>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.980766146559!2d-0.1718103501725275!3d5.569860895941901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9070c76bdc17%3A0xba4b69124ba20d65!2siSpace+Foundation!5e0!3m2!1sen!2sgh!4v1501425176793" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div> 
    );
  }

}




// function() {
//   <video width="100%" height="100%" autoPlay loop muted>
//               <source src="assets/video/go.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
// }

