import React from "react";
import { Link } from "react-router-dom";
// sdfsd
export default function NavBar() {
  const isAdmin = localStorage.getItem("isAdmin");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <Link className="navbar-brand" to="/" href="#">
        TutorAway
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" to="/services">
              Services
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/contacts">
              Contacts
            </Link>
          </li>
        </ul>
      </div>

      <ul className="navbar-nav">
        {isAdmin && (
          <React.Fragment>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                User
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/createuser">
                    Create User
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/searchuser">
                    Search User
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/listOtherUsers">
                    List All Users
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/logout">
                Logout
              </Link>
            </li>
          </React.Fragment>
        )}
        {!isAdmin && (
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
