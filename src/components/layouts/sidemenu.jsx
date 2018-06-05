import React from 'react'; 
import $ from 'jquery';
import logo from '../../assets/images/logo.png'
export default class Sidemenu extends React.Component {

  componentDidMount() {
    window.onscroll = function() {
      if (document.body.scrollTop > 10) {
        document.querySelector(".sidemenu").style.background = "rgba(255,255,255,0.1)"
      }else{
        document.querySelector(".sidemenu").style.background = "rgba(255,255,255,0.5)"
      }
    };
    $( "a" ).click(function() {
      document.querySelector(".mobile").style.width = "0%";
      window.scrollTo(0,0)
    });
  }

  mobileMenu() {
    var menu = document.querySelector(".mobile").style.width;
    if (menu == "" || menu == "0%") {
      document.querySelector(".mobile").style.width = "100%";
    }else {
      document.querySelector(".mobile").style.width = "0%";
    }
  }

  render() {
    return (
      <div className="menu">
        <div className="title">
          <i className="material-icons" onClick={this.mobileMenu.bind(this)}>sort</i>
        </div>
        <div className="mobile">

          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#/about">ABOUT</a>
          </li>
          <li>
            <a href="#/register">REGISTER</a>
          </li>
          <li>
            <a href="#/members">MEMBERS</a>
          </li>
          <li>
            <a href="#/startups">STARTUPS</a>
          </li>
          <li>
            <a href="#/mentors">MENTORS</a>
          </li>
          <li>
            <a href="#/become-a-mentors">BECOME A MENTOR</a>
          </li>
          <li>
            <a href="#/partners">PARTNERS</a>
          </li>
          <li>
            <a href="#/images">GALLERY</a>
          </li>
          <li>
            <a href="#/contact">CONTACT</a>
          </li>
        </div>
		    <div className="sidemenu">
           <img src={logo} />
          <li className="first-child">
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#/about">ABOUT</a>
          </li>
          <li>
            <a href="#/register">REGISTER</a>
          </li>
          <li>
            <a>COMMUNITY</a>
            <ul>
              <li><a href="#/members">MEMBERS</a></li>
              <li><a href="#/startups">STARTUPS</a></li>
            </ul>
          </li>
          <li>
            <a>MENTORSHIP</a>
            <ul>
              <li><a href="#/mentors">MENTORS</a></li>
              <li><a href="#/become-a-mentors">BECOME A MENTOR</a></li>
            </ul>
          </li>
          <li>
            <a href="#/partners">PARTNERS</a>
          </li>
          <li>
            <a href="#/images">GALLERY</a>
          </li>
          <li>
            <a href="#/contact">CONTACT</a>
          </li>
        </div>
      </div>
    );
  }

}



//<li><li><a href="#/blog">BLOG</a></li> <li><a href="#/videos">VIDEOS</a></li>
//            <a href="#/blog">BLOG</a>
//          </li>
//<ul>
              //<li><a href="#/images">IMAGES</a></li>
              //<li><a href="#/videos">VIDEOS</a></li>
            //</ul>    


