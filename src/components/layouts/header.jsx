import React from 'react'; 
import {logOut} from '../../actions/AppActions';


export default class Header extends React.Component {

  render() {
    return (
      <header>
        <li>
          <a href="#/dashboard/addUsers">Add Users</a>
        </li>
        <li>
          <a href="#/dashboard/applications">Applications</a>
        </li>
        <li>
          <a href="#/dashboard/blogUpload">Blog</a>
        </li>
        <li>
          <a href="#/dashboard/imageUpload">Images</a>
        </li>
        <li>
          <a href="#/dashboard/videoUpload">Videos</a>
        </li>
        <li>
          <a onClick={() => {logOut()}}>Log Out</a>
        </li>
      </header>
    )
  }

}


