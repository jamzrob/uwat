import React from 'react'; 

export default class Blog extends React.Component {

  
  render() {

    return (
      <div className="blog">
      	<div className="header">
          <div className="overlay">
            <div className="contain">
              <div className="quote">
                <h2>BLOG</h2>
                <p>
                	Our experiences so far 
                </p>
                <i onClick={() => {window.scrollTo(0, 600);}} className="material-icons">expand_more</i>
              </div>
            </div>
          </div>
          <div className="slider">
          </div>
        </div>
        <div className="contain">
          <div className="list">
          	<div className="item">
          		<img src="assets/images/new/four.jpg" />
          		<div>
          			<p>jkdnakjsdnakjsnd</p>
          			<button>READ</button>
          		</div>
          	</div>
          	<div className="item">
          		<img src="assets/images/new/four.jpg" />
          		<div>
          			<p>jkdnakjsdnakjsnd</p>
          			<button>READ</button>
          		</div>
          	</div>
          	<div className="item">
          		<img src="assets/images/new/four.jpg" />
          		<div>
          			<p>jkdnakjsdnakjsnd</p>
          			<button>READ</button>
          		</div>
          	</div>
          	<div className="item">
          		<img src="assets/images/new/four.jpg" />
          		<div>
          			<p>jkdnakjsdnakjsnd</p>
          			<button>READ</button>
          		</div>
          	</div>
          	<div className="item">
          		<img src="assets/images/new/four.jpg" />
          		<div>
          			<p>jkdnakjsdnakjsnd</p>
          			<button>READ</button>
          		</div>
          	</div>
          	<div className="item">
          		<img src="assets/images/new/four.jpg" />
          		<div>
          			<p>jkdnakjsdnakjsnd</p>
          			<button>READ</button>
          		</div>
          	</div>
          </div>
        </div>
      </div>
    );
  }

}


