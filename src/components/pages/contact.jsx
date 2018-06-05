import React from 'react'; 
import {sendMessage} from '../../actions/AppActions';

export default class Contact extends React.Component {


  handleForm(e) {
    e.preventDefault();
    var name = e.target.name.value;
    var email = e.target.email.value;
    var message = e.target.message.value;

    var data = {
      name: name,
      email: email,
      message: message,
    }

    sendMessage(data)

    e.target.name.value = "";
    e.target.email.value = "";
    e.target.message.value = "";
  }


  render() {

    return (
      <div className="contact">
        <div className="contain">
          <div className="col">
            <div className="content">
              <h1>Hi</h1>
              <h5>We would love to hear from you.</h5>
            </div>
            <form onSubmit={this.handleForm.bind(this)}>
              <h5>LEAVE US A MESSAGE</h5>
              <input type="text" placeholder="Name " name="name" required />
              <input type="email" placeholder="Email " name="email" required />
              <textarea placeholder="Message " name="message" required ></textarea>
              <button>SUBMIT</button>
            </form>  
          </div>
          <div className="col">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.980766146559!2d-0.1718103501725275!3d5.569860895941901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9070c76bdc17%3A0xba4b69124ba20d65!2siSpace+Foundation!5e0!3m2!1sen!2sgh!4v1501425176793" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
          </div>
        </div>
      </div>
    );
  }

}


