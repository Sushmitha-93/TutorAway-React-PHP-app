import { Component } from "react";

class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem("isAdmin");

    window.location = "/";
  }
  render() {
    return null;
  }
}

export default Logout;
