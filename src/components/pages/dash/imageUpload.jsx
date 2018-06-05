import React from 'react'; 
import {addGallery} from '../../../actions/AppActions';


export default class ImageUpload extends React.Component {

  handleForm(e) {
    e.preventDefault();
    var gallery = e.target.gallery.value;
    var image = document.querySelector(".image");
    var files = image.files;
    console.log(files.length)
    for (var i = 0; i < files.length; i++) {
    	var formData = new FormData();
    	var file = files[i];
    	console.log(file.name)
    	formData.append("image", file);
    	formData.append("gallery", gallery)
    	addGallery(formData)
	  }
  
  }
  
  render() {
    
    return (
      <div className="grid">
      	<div className="imageUpload">
	        <form onSubmit={this.handleForm.bind(this)}>
	        	<input type="file" className="image" multiple />
	        	<select name="gallery">
	        		<option>January</option>
	        		<option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
	        	</select>
	        	<button>SUBMIT</button>
	        </form>
	    </div>
      </div>
    )
  }

}


