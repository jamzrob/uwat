import React from 'react'; 
import {addUser} from '../../../actions/AppActions';


export default class AddUsers extends React.Component {

   handleForm(e) {
    e.preventDefault();
    var name = e.target.name.value;
    var email = e.target.email.value;
    var password = e.target.password.value;

    var data = {
      name: name,
      email: email,
      password: password,
    }

    addUser(data)


    e.target.email.value = "";
    e.target.password.value = "";
  }

  render() {
    
    return (
      <div className="grid">
	    <div className="blogUpload">
	        <form onSubmit={this.handleForm.bind(this)}>
	        	<input type="text" name="name" placeholder="Name" required />
	        	<input type="email" name="email" placeholder="Email" required />
	        	<input type="password" name="password" placeholder="Password" required />
	        	<button>SUBMIT</button>
	        </form>
	    </div>
      </div>
    )
  }

}


