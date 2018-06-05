import React from 'react'; 
import {activeGallery} from '../../actions/AppActions';

export default class Images extends React.Component {

  list(list) {
    if (list.length > 0) {
      return list.map(function(item, i) {
        return(
            <div className="item" onClick={() => {activeGallery(item);location.hash = "#/gallery"}} key={i} >
              <div className="cover"></div>
              <img src={"https://storage.googleapis.com/unlocking-wat.appspot.com/gallery/" + item.Images[i].Name} />
            </div>
        )
      })
    }else {
      return (
        <div className="loading">
          <h1>loading .........</h1>
        </div>
      )
    }
    
  }

  render() {
  	var body;

    return (
      <div className="images">
        <div className="contain">
          <div className="list">
            {this.list(this.props.list)}
          </div>
          
        </div>
      </div>
    );
  }

}

export class Loading extends React.Component {
  render() {
    return (
      <div className="loading">
        <h1>loading .........</h1>
      </div>
    )
  }
}




