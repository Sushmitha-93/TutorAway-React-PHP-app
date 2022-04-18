import React from "react";
import { Link } from "react-router-dom";

// ********** To import multiple images *********//
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../img", false, /\.(png|jpe?g|svg)$/)
);
// ********************************************//

export default function Services() {
  const cards = [
    {
      course: "Master React",
      img: "reactpic.jpg",
      tagline: "Understand React inside out and boost your career prospects",
      link: "/reactjsCourse",
    },
    {
      course: "The Complete Node.Js Course",
      img: "nodejspic.jpg",
      tagline:
        "Learn to build highly-scalable, fast and secure RESTful APIs with Node, Express, and MongoDB.",
      link: "/nodejsCourse",
    },
    {
      course: "Learn Vue.Js",
      img: "vuejs.png",
      tagline:
        "Vue is a newer and refreshing framework for building web apps with more ease than writing vanilla HTML",
      link: "/vuejsCourse",
    },
    {
      course: "Learn Next.Js",
      img: "nextjs-thumb.png",
      tagline:
        "Next.js is a minimalistic framework for server-rendered React applications as well as statically exported React apps.",
      link: "/nextjsCourse",
    },
    {
      course: "JavaScript Mastery Course",
      img: "jsimage.png",
      tagline:
        "Master the Fundamentals of JavaScript - The Language Behind Millions of Websites & Apps",
      link: "/javascriptCourse",
    },
    {
      course: "Python Tutorial for Beginers",
      img: "pythonimage.png",
      tagline: "Everything you need to program in Python in one course ",
      link: "/pythonCourse",
    },
    {
      course: "Mongo DB",
      img: "mongodb.png",
      tagline:
        "Learn Mongo DB online at your own pace. Start today and improve your skills",
      link: "/mongodbCourse",
    },

    {
      course: "React Native Fundamentals",
      img: "reactnative.png",
      tagline:
        "Master the Fundamentals of Building Native Apps with React Native and Expo",
      link: "/reactnativeCourse",
    },
    {
      course: "Machine Learning Crash Course",
      img: "machineLearning.png",
      tagline:
        "Analyze, Visualize Data and Build Machine Learning Models with Python ",
      link: "/mlCourse",
    },
    {
      course: "Natural Language Processing",
      img: "nlp.png",
      tagline:
        "Explore Fundamental concepts of NLP and its role in current and emerging technologies through hands on exercises.",
      link: "nlpCourse",
    },
  ];

  return (
    <div className="container py-3">
      <header>
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 className="display-4 fw-normal">Courses</h1>
          <p className="fs-5 text-muted">
            Quickly build an effective Skillset. Master the Coding Skills to
            Become an Engineer Companies LOVE to Hire.
          </p>
        </div>
      </header>

      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            class="nav-link active"
            id="nav-all-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-all"
            type="button"
            role="tab"
            aria-controls="nav-all"
            aria-selected="true"
          >
            All
          </button>
          <button
            class="nav-link"
            id="nav-top5courses-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-top5courses"
            type="button"
            role="tab"
            aria-controls="nav-top5courses"
            aria-selected="false"
          >
            Top 5 Courses
          </button>
          <button
            class="nav-link"
            id="nav-previsolyvisted-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-previsolyvisted"
            type="button"
            role="tab"
            aria-controls="nav-previsolyvisted"
            aria-selected="false"
          >
            Previously visited
          </button>
        </div>
      </nav>

      <br />

      <main>
        <div className="row row-cols-3 row-cols-md-4 mb-3 gy-5 text-center">
          {cards.map((card) => (
            <div className="col">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={images[card.img]}
                  alt="Card image cap"
                />
                <div className="card-body ">
                  <h5 className="card-title">{card.course}</h5>
                  <p className="card-text">{card.tagline}</p>
                </div>
                <div className="card-footer bg-transparent">
                  <Link to={card.link}>
                    <button
                      type="button"
                      className="w-100 btn btn-lg btn-primary"
                    >
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <img
              className="mb-2"
              src="../assets/brand/bootstrap-logo.svg"
              alt=""
              width="24"
              height="19"
            />
            <small className="d-block mb-3 text-muted">&copy; 2017–2021</small>
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Cool stuff
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Random feature
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Team feature
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Stuff for developers
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Another one
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Last time
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Resource
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Resource name
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Another resource
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Final resource
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Team
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Locations
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Privacy
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
