import React from 'react'; 
import {getApplications, activeApplications} from '../../../actions/AppActions';

export default class Applications extends React.Component {

  list(list) { 
  	if (list) {
  		return list.map(function(item, i) {
				return (
					<tr key={i} onClick={() => {activeApplications(item);location.hash = "#/dashboard/applications/profile"}}>
					    <td>{item.Name}</td>
					    <td>{item.Email}</td>
					    <td>{item.Number}</td>
					    <td>{item.Location}</td>
					    <td>{item.Created}</td>
					</tr>
				)
			})
  	}
  	
  }

  componentDidMount() {
  	getApplications()
  }
  
  render() {
  
    return (
      <div className="grid">
        <div className="applications">
	        <div className="list">
				<table>
					<thead>
					  <tr>
					    <th>Name</th>
					    <th>Email</th>
					    <th>Number</th>
					    <th>Location</th>
					    <th>Date</th>
					  </tr>
					</thead>
					<tbody>
					  {this.list(this.props.list)}
					</tbody>
				</table>
			</div>
		</div>	
      </div>
    )
  }

}


