import React from 'react'; 
import {logIn} from '../../../actions/AppActions';

export default class Dashboard extends React.Component {

  handleForm(e) {
    e.preventDefault();
    var email = e.target.email.value;
    var password = e.target.password.value;

    var data = {
      email: email,
      password: password,
    }

    logIn(data)

    e.target.email.value = "";
    e.target.password.value = "";
  }

  render() {

    return (
      <div className="auth">
        <div className="overlay">
          <form onSubmit={this.handleForm.bind(this)}>
            	<h3>Welcome</h3>
            	<input type="email" name="email" placeholder="Email ......" />
            	<input type="password" name="password" placeholder="Password ......" />
            	<button>SUBMIT</button>
          </form>
        </div>
		  </div>
    );
  }

}






 