import React, { Component } from "react";
import axios from "axios";

class SearchUser extends Component {
  state = {};

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit() called");

    const user = {
      userid: e.target.userid,
      name: e.target.name.value,
      email: e.target.email.value,
      city: e.target.city.value,
      phone: e.target.phone.value,
    };

    console.log(user);

    // Sending datain formdata object so that it can be coded easily in php side
    let formData = new FormData();
    formData.append("userid", user.userid);
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("city", user.city);
    formData.append("phone", user.phone);

    //const url = "http://localhost:3000/searchUser.php";
    const url = "https://tutorawayphp.azurewebsites.net/searchUser.php";

    axios({
      method: "post",
      url: url,
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        console.log(response.data);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-8">
          <br />
          <h1 className="text-center">Search User</h1>
          <br />
          <div className="card">
            <div className="card-body ">
              <form class="row gx-3 gy-2 align-items-center">
                <div class="col-sm">
                  <label class="visually-hidden" for="userid">
                    User id
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="userid"
                    placeholder="ID"
                  />
                </div>
                <div class="col-sm-3">
                  <label class="visually-hidden" for="name">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Enter name"
                  />
                </div>
                <div class="col-sm-3">
                  <label class="visually-hidden" for="email">
                    email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter Email"
                  />
                </div>
                <div class="col-sm-2">
                  <label class="visually-hidden" for="city">
                    City
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="city"
                    placeholder="Enter City"
                  />
                </div>
                <div class="col-sm-2">
                  <label class="visually-hidden" for="phone">
                    Phone
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="phone"
                    placeholder="Enter Phone"
                  />
                </div>
                <div class="col-auto">
                  <button type="submit" class="btn btn-primary">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* <br />
          <div className="alert alert-success" role="alert">
            A simple success alert—check it out!
          </div> */}
        </div>
      </div>
    );
  }
}

export default SearchUser;
