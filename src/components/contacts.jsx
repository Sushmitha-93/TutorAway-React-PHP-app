import React, { Component } from 'react';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

class Contacts extends Component {
  state = { 
    contacts:[]
   } 
   componentDidMount() {
    const url = process.env.REACT_APP_API_URL
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ contacts: data })
      console.log(this.state.contacts)
     })
  }
  render() { 
    return (
      <h2>{this.state.contacts}</h2>
    );
  }
}
 
export default Contacts;