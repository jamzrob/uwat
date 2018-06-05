import React from 'react'; 

export default class Profile extends React.Component {
	render() {
		return (
			<div className="profile">
				<div className="col">
					<h5>Name</h5>
					<h6>{this.props.data.Name || "Empty"}</h6>
					<h5>Email</h5>
					<h6>{this.props.data.Email || "Empty"}</h6> 
					<h5>Number</h5>
					<h6>{this.props.data.Number || "Empty"}</h6>
					<h5>Handle</h5>
					<h6>{this.props.data.Handle || "Empty"}</h6>
					<h5>Hub</h5>
					<h6>{this.props.data.Hub || "Empty"}</h6>
					<h5>Course</h5>
					<h6>{this.props.data.Course || "Empty"}</h6>					
				</div>
				<div className="col">
					<h5>Location</h5>
					<h6>{this.props.data.Location || "Empty"}</h6>
					<h5>Education</h5>
					<h6>{this.props.data.Education || "Empty"}</h6>
					<h5>Referral</h5>
					<h6>{this.props.data.Referral || "Empty"}</h6>
					<h5>Hub Referral</h5>
					<h6>{this.props.data.HubReferral || "Empty"}</h6>
					<h5>Age</h5>
					<h6>{this.props.data.Age || "Empty"}</h6>
					<h5>Do you have a laptop ?</h5>
					<h6>{this.props.data.Laptop || "Empty"}</h6>
				</div>
				<div className="col">
					<h5>Age</h5>
					<h6>{this.props.data.Age || "Empty"}</h6>
					<h5>Do you have a laptop ?</h5>
					<h6>{this.props.data.Laptop || "Empty"}</h6>					
					<h5>About</h5>
					<h6>{this.props.data.About || "Empty"}</h6>
				</div>
			</div>
		)
	}
}





