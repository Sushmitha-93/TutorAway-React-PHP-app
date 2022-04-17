import React, { Component } from "react";

class ReactNativeCourse extends Component {
  state = {};
  render() {
    return (
      <main>
        <div class="container py-4">
          <div class="p-5 mb-4 bg-light rounded-3">
            <div class="container-fluid py-5">
              <h1 class="display-5 fw-bold">React Native Fundamentals</h1>
              <p class="col-md-8 fs-4">
                Master the Fundamentals of Building Native Apps with React
                Native and Expo!
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

export default ReactNativeCourse;
