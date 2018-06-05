import React from 'react';
import {setUrl} from '../../actions/AppActions';
 
export default class HyperLink extends React.Component {

  render () {
    return (
      <a href={this.props.link} onClick={window.scrollTo(0, 0)} className={this.props.classN || ""}>
      	{this.props.icon ? <i className="material-icons">{this.props.icon}</i> : ""}
      	{this.props.img ? <img src={this.props.img} /> : ""}
      	{this.props.name}
      </a>
    )
  }
}
