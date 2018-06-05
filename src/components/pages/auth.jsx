import React from 'react'; 

export default class Blog extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      page: "signin",
    }
  }

  route(route) {
    this.setState({
      page: route
    })
  }

  render() {
    var body;
    if(this.state.page == "signin") {
      body = <S route={this.route.bind(this, "join")} />
    } else {
      body = <Register route={this.route.bind(this, "signin")} />
    }
    
    return (
      <div className="contain">
        {body}
      </div>
    )

}


