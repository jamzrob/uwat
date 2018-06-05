import React from 'react'; 
import {addBlog} from '../../../actions/AppActions';


export default class BlogUpload extends React.Component {
  
   handleForm(e) {
    e.preventDefault();
    var body = e.target.body.value;
    var title = e.target.title.value;
    var author = e.target.author.value;
    var image = e.target.image.files[0];
    var formData = new FormData();
    formData.append("image", image);
    formData.append("body", body)
    formData.append("title", title)
    formData.append("author", author)

    addBlog(formData)

    e.target.body.value = "";
    e.target.title.value = "";
    e.target.author.value = "";
  }

  render() {
    
    return (
      <div className="grid">
	    <div className="blogUpload">
	        <form onSubmit={this.handleForm.bind(this)}>
	        	<textarea name="body" placeholder="Body" ></textarea>
	        	<input type="text" name="title" placeholder="Title" />
	        	<input type="text" name="author" placeholder="Author" />
            <input type="file" name="image" />
	        	<button>SUBMIT</button>
	        </form>
	    </div>
      </div>
    )
  }

}


