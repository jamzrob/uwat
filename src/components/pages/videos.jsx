import React from 'react'; 

export default class Videos extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cover: "",
      src: "",
    }
  }


  componentDidMount() {
    document.querySelector(".sidemenu").style.background = "black"
    window.onscroll = function() {
      if (document.body.scrollTop < 10) {
        document.querySelector(".sidemenu").style.background = "black"
      }
    }
  }

  componentWillUnmount() {
    window.onscroll = function() {
      if (document.body.scrollTop > 10) {
        document.querySelector(".sidemenu").style.background = "black"
      }else{
        document.querySelector(".sidemenu").style.background = "rgba(0,0,0,0.7)"
      }
    }
  }

  show(e) {
    var t = e.target.getAttribute("src");
    document.querySelector("body").style.overflow = "hidden"
    this.setState({
      cover: "cover",
      src: t,
    })
  }

  close() {
    document.querySelector("body").style.overflow = "auto"
    this.setState({
      cover: "",
    })
  }

  render() {
  	var body;
    var cover;

    if (this.state.cover == "cover") {
      cover = <Cover src={this.state.src} close={this.close.bind(this)} />
    } else{
      cover = "";
    }

    return (
      <div className="videos">
        <div className="contain">
          <div className="list">
            {cover}
            <div className="item" onClick={this.show.bind(this)} src="https://www.youtube.com/embed/Iwi-Rd1r5p0">
              <iframe src="https://www.youtube.com/embed/Iwi-Rd1r5p0" frameBorder="0" allowFullScreen>
              </iframe>
              <div className="cover">
                <i className="material-icons">play_circle_outline</i>
              </div>
            </div>
            <div className="item" onClick={this.show.bind(this)}>
              <iframe src="https://www.youtube.com/embed/Iwi-Rd1r5p0" frameBorder="0" allowFullScreen>
              </iframe>
              <div className="cover">
                <i className="material-icons">play_circle_outline</i>
              </div>
            </div>
            <div className="item" onClick={this.show.bind(this)}>
              <iframe src="https://www.youtube.com/embed/Iwi-Rd1r5p0" frameBorder="0" allowFullScreen>
              </iframe>
              <div className="cover">
                <i className="material-icons">play_circle_outline</i>
              </div>
            </div>
            <div className="item" onClick={this.show.bind(this)}>
              <iframe src="https://www.youtube.com/embed/Iwi-Rd1r5p0" frameBorder="0" allowFullScreen>
              </iframe>
              <div className="cover">
                <i className="material-icons">play_circle_outline</i>
              </div>
            </div>
            <div className="item" onClick={this.show.bind(this)}>
              <iframe src="https://www.youtube.com/embed/Iwi-Rd1r5p0" frameBorder="0" allowFullScreen>
              </iframe>
              <div className="cover">
                <i className="material-icons">play_circle_outline</i>
              </div>
            </div>
            <div className="item" onClick={this.show.bind(this)}>
              <iframe src="https://www.youtube.com/embed/Iwi-Rd1r5p0" frameBorder="0" allowFullScreen>
              </iframe>
              <div className="cover">
                <i className="material-icons">play_circle_outline</i>
              </div>
            </div>
            <div className="item" onClick={this.show.bind(this)}>
              <iframe src="https://www.youtube.com/embed/Iwi-Rd1r5p0" frameBorder="0" allowFullScreen>
              </iframe>
              <div className="cover">
                <i className="material-icons">play_circle_outline</i>
              </div>
            </div>
            <div className="item" onClick={this.show.bind(this)}>
              <iframe src="https://www.youtube.com/embed/Iwi-Rd1r5p0" frameBorder="0" allowFullScreen>
              </iframe>
              <div className="cover">
                <i className="material-icons">play_circle_outline</i>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }

}

export class Cover extends React.Component {
  render() {
    return (
      <div className="show">
        <i onClick={this.props.close} className="material-icons">close</i>
        <iframe src="https://www.youtube.com/embed/Iwi-Rd1r5p0" frameBorder="0" allowFullScreen>
        </iframe>
      </div>
    )
  }
}





