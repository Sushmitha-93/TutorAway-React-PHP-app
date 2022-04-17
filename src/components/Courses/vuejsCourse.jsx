import React, { Component } from "react";

class VuejsCourse extends Component {
  state = {};
  render() {
    return (
      <main>
        <div class="container py-4">
          <div class="p-5 mb-4 bg-light rounded-3">
            <div class="container-fluid py-5">
              <h1 class="display-5 fw-bold">Learn Vue.Js!</h1>
              <p class="col-md-8 fs-4">
                Vue is a newer and refreshing framework for building web apps
                with more ease than writing vanilla HTML
              </p>
              <button class="btn btn-primary btn-lg" type="button">
                Add to Schedule
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default VuejsCourse;
