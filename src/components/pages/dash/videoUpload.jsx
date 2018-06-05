import React from 'react'; 

export default class VideoUpload extends React.Component {
  
   handleForm(e) {
    e.preventDefault();
    var yl = e.target.yl.value;
    var title = e.target.title.value;

    var data = {
      yl: yl,
      title: title,
    }

    //signIn(data)

    e.target.yl.value = "";
    e.target.title.value = "";
  }

  render() {
    
    return (
      <div className="grid">
	      <div className="videoUpload">
	        <form>
	        	<input type="text" name="yl" placeholder="Youtube Link" />
	        	<input type="text" name="title" placeholder="Title" />
	        	<button onClick={this.handleForm.bind(this)}>SUBMIT</button>
	        </form>
	      </div>
      </div>
    )
  }

}


