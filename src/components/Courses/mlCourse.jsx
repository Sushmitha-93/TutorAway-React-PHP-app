import React, { Component } from "react";

class MLCourse extends Component {
  state = {};
  render() {
    return (
      <main>
        <div class="container py-4">
          <div class="p-5 mb-4 bg-light rounded-3">
            <div class="container-fluid py-5">
              <h1 class="display-5 fw-bold">Machine Learning Crash Course</h1>
              <p class="col-md-8 fs-4">
                Analyze, Visualize Data and Build Machine Learning Models with
                Python
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

export default MLCourse;
