import React, { Component } from "react";

class User extends React.Component {
  constructor(props) {
    super();
    console.log("Child Constructor");
    this.state = {
      a: 10,
      b: 12,
    };
  }

  async componentDidMount(){
    console.log("Component Did Mount")
    const data=await fetch("https://api.github.com/users/Shatabdi121")
    const json=await data.json();
    console.log(json)
  }
  componentDidUpdate(){
    console.log("Component Did Update")
  }
  componentWillUnmount(){
    console.log("Component will Unmount")
  }

  render() {
    console.log("Child Render");
    return (
      <div>
        <h1>Welcome User {this.props.name}: {this.state.a}</h1>
        <button
          onClick={() => {
            this.setState({
              a: 150,
            });
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

export default User;
