import React from 'react'; 
import {apply} from '../../actions/AppActions'; 
import {Hubs} from './hubs.js';
import toastr from 'toastr';

export default class Register extends React.Component {

  constructor(props) {
    super(props)

    this.handleSortedHubs = this.handleSortedHubs.bind(this)

    this.state = {
      sortedHubs: []
    }
  }

  handleSortedHubs() {
    var region = document.querySelector("#region").value;
    var hubs = []

    Hubs.map(function (item) {
      // console.log(item.Region, region)
      if (item.Region == region) { 
        if (item.Hubs.length === 0) {
          document.querySelector("#titlehubs").style.display = "none";
          document.querySelector("#hubs").style.display = "none";
        }else {
          document.querySelector("#titlehubs").style.display = "block";
          document.querySelector("#hubs").style.display = "block"
          for (var i = 0; i < item.Hubs.length; i++) {
            hubs.push(item.Hubs[i]) 
            console.log(item.Hubs[i])
          }
        }
      }
    })

    this.setState({
      sortedHubs: hubs,
    })
  }

  handleForm(e) {
    e.preventDefault();

    document.querySelector("button").innerHTML = "Submitting !!!!";
    document.querySelector("button").disabled = true;

    var name = e.target.name.value;
    var email = e.target.email.value;
    var number = e.target.number.value;
    var twitterHandle = e.target.twitterHandle.value;
    var course = e.target.course.value;
    var location = e.target.location.value;
    var hub = e.target.hub.value;
    var age = e.target.age.value;
    var education = e.target.education.value;
    var referral = e.target.referral.value;
    var hubreferral = e.target.hubreferral.value;
    var laptop = e.target.laptop.value;
    var about = e.target.about.value;

    var data = {
      name: name,
      email: email,
      number: number,
      handle: twitterHandle,
      course: course,
      location: location,
      hub: hub,
      age: age,
      education: education,
      referral: referral,
      hubreferral: hubreferral,
      laptop: laptop,
      about: about,
    }

    apply(data)

    toastr.success("Application Submitted");

    e.target.name.value = "";
    e.target.email.value = "";
    e.target.number.value = "";
    e.target.twitterHandle.value = "";
    e.target.course.value = "";
    e.target.location.value = "";
    e.target.about.value = "";

    document.querySelector("button").innerHTML = "Submit";
  }

  handleReferral() {
    var field = document.querySelector('.referral').value;
    
    if (field == 'Hub') {
      document.querySelector('.hubreferral').style.display = "block";
    }else {
      document.querySelector('.hubreferral').style.display = "none";
    }
  }

  componentDidMount() {
    this.handleSortedHubs();
  }

  render() {
  	var body;
    var formStyle = {
      display: "none"
    }
    return (
      <div className="enroll">
        <div className="header">
          <div className="overlay">
            <div className="contain">
              <div className="quote">
                <h2>REGISTER</h2>
                <p>Technology today present enormous opportunities for individuals,<br /> and organisations to create and improve services. The unlocking<br /> women and technology project seeks to equip and empower more<br /> women with basic technology tools to build businesses, increase<br /> more women in tech and create sustainable technology businesses. Apply now! Limited slots available.</p>     
                <h5>Application Deadline is 04/12/2017</h5>           
                <i onClick={() => {window.scrollTo(0, 600);}} className="material-icons">expand_more</i>
              </div>
            </div>
          </div>
          <div className="slider">
          </div>
        </div>
        <div className="contain">
          <h4>Apply</h4>
          <form onSubmit={this.handleForm.bind(this)}>
            <span>Name</span>
            <input type="text" name="name" required />
            <span>Email</span>
            <input type="email" name="email" required />
            <span>Phone Number</span>
            <input type="number" name="number" required />
            <span>Twitter Handle .</span>
            <input type="text" name="twitterHandle" required />
            <span>Choose a Course? (for those outside Accra, you can only choose Web development)</span>
            <select name="course">
              <option>WEB DEVELOPMENT</option>
              <option>MOBILE APP PROGRAMMING</option>
              <option>GRAPHIC DESIGN</option>
              <option>VIDEOGRAPHY AND EDITING</option>
              <option>SOCIAL MEDIA MARKETING</option>
            </select>
            <span>Location</span>
            <select name="location" id="region" onChange={this.handleSortedHubs}>
              <option>Greater Accra Region</option>
              <option>Ashanti Region</option>
              <option>Central Region</option>
              <option>Brong-Ahafo Region</option>
              <option>Eastern Region</option>
              <option>Northern Region</option>
              <option>Upper East Region</option>
              <option>Upper West Region</option>
              <option>Volta Region</option>
            </select>
            <span id="titlehubs">Choose A Hub</span>
            <select name="hub" id="hubs">
              {
                this.state.sortedHubs.map(function(item, i) {
                  return (
                    <option key={i}>{item}</option>
                  )
                })
              }
            </select>
            <span>Age Range .</span>
            <select name="age">
              <option>18-30</option>
              <option>30-38</option>
            </select>
            <span>Level Of Education</span>
            <select name="education">
              <option>SHS</option>
              <option>DIPLOMA/DEGREE</option>
              <option>OTHER</option>
            </select>
            <span>Where did you hear about UWAT?</span>
            <select name="referral" className="referral" onChange={this.handleReferral}>
              <option>Social Media</option>
              <option>Hub</option>
              <option>Email</option>
              <option>Friend</option>
              <option>Other</option>
            </select>
            <div className="hubreferral" style={formStyle}>
              <span>Name of Hub</span>
              <select name="hubreferral">
                <option>None</option>
                <option>Kumasi Hive - Kumasi</option>
                <option>HapaSpace - Kumasi</option>
                <option>KK Hub - Ho</option>
                <option>Workshed - Tema</option>
                <option>Ho Node - Ho</option>
                <option>Kofi Annan ICT Centre - Accra</option>
                <option>Grassroot Hub - Brong Ahafo</option>
                <option>Tech Makers - Accra</option>
              </select>
            </div>
            <span>Do you have a Laptop ?</span>
            <select name="laptop">
              <option>Yes</option>
              <option>No</option>
            </select>
            <span>Tell us about yourself and why you want to join this program (10 lines)</span>
            <textarea name="about" required></textarea>
            <button>SUBMIT</button>
          </form>
        </div>
      </div>
    );
  }

}






