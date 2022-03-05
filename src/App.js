import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import News from "./components/news";
import Contacts from "./components/contacts";

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>}/>
          <Route path="/news" element={<News/>} />
          <Route path="/contacts" element={<Contacts/>} />
      </Routes>
    </React.Fragment>    
  );
}

export default App;
