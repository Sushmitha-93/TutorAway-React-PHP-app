import React, { Component } from "react";

class CurrentUsers extends Component {
  state = {};
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-5">
          <br />
          <h1 className="text-center">Current Users</h1>
          <br />
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">User ID</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>marko</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>jthorn</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Anna</td>
                <td>Larsen</td>
                <td>alarsen</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CurrentUsers;
