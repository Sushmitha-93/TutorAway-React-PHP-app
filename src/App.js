import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import News from "./components/news";
import Contacts from "./components/contacts";
import Login from "./components/login";
import CurrentUsers from "./components/currentUsers";
import Logout from "./components/logout";
import CreateUser from "./components/User/createUser";
import SearchUser from "./components/User/searchUser";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<News />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/searchuser" element={<SearchUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/currentUsers" element={<CurrentUsers />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
