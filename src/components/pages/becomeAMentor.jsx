import React from 'react'; 

export default class BecomeAMentor extends React.Component {

  render() {
  	var body;

    return (
      <div className="enroll">
        <div className="header">
          <div className="overlay">
            <div className="contain">
              <div className="quote">
                <h2>BECOME A MENTOR</h2>
                <p>Do you have business experience you can share with a new start-up?.</p>      
                <p>
                  As part of the UWAT project, we are helping young women start-up their own businesses through business start-up and development training. We are looking for mentors who are willing and able to support these young women on their start-up journeys. If you have extensive business experience and would like to join the UWAT program as a volunteer mentor, please get in touch with us for more information.          
                </p>
                <i className="material-icons">expand_more</i>
              </div>
            </div>
          </div>
          <div className="slider">
          </div>
        </div>
        <div className="contain">
          <h4>Apply</h4>
          <form>
            <span>Name</span>
            <input type="text" name="name" required />
            <span>Email</span>
            <input type="text" name="email" required />
            <span>Phone Number</span>
            <input type="number" name="number" required />
            <span>Twitter Handle</span>
            <input type="text" name="twitterHandle" required />
            <span>Gender</span>
            <select>
              <option>Male</option>
              <option>Female</option>
            </select>
            <span>What's your location in Ghana (City) ?</span>
            <input type="text" name="city" required />
            <span>Age Range .</span>
            <select>
              <option>Yes</option>
              <option>No</option>
            </select>
            <span>Level Of Education</span>
            <select>
              <option>Yes</option>
              <option>No</option>
            </select>
            <span>Which track do you want to join ?</span>
            <select>
              <option>Yes</option>
              <option>No</option>
            </select>
            <button>SUBMIT</button>
          </form>
        </div>
      </div>
    );
  }

}






