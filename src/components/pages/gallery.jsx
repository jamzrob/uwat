import React from 'react'; 

export default class Gallery extends React.Component {

  constructor(props) {
    super(props)
    this.show = this.show.bind(this);
    this.state = {
      cover: "",
      src: "",
    }
  }

  show(e) {
    var t = e.target.getAttribute("src");
    window.scrollTo(0, 0)
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


  list(list) {
    
  }

  render() {
  	var body;
    var cover;
    var lists;

    if (this.props.list) {
      lists = this.props.list.Images.map(function(item, i) {
                return(
                  <div className="item" key={i} >
                    <img onClick={this.show.bind(this)} src={"https://storage.googleapis.com/unlocking-wat.appspot.com/gallery/" + item.Name} key={i} />
                  </div>
                )
              }.bind(this))
    } else {
      lists = "dsdfsdf"
    }

    if (this.state.cover == "cover") {
      cover = <Cover src={this.state.src} close={this.close.bind(this)} />
    } else{
      cover = "";
    }

    return (
      <div className="gallery">
        <div className="contain">
          <div className="list">
            {cover}
            {
              lists
            }
          </div>
        </div>
      </div>
    );
  }

}


export class Cover extends React.Component {
  render() {
    return (
      <div className="cover">
        <i onClick={this.props.close} className="material-icons">close</i>
        <img src={this.props.src} />
      </div>
    )
  }
}



