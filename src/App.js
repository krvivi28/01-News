import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { NewsComp } from "./components/NewsComp";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
        <Router>
         <>
          <Navbar />
           <Routes>
          <Route exact path="/" element={ <NewsComp key="gen" country="in" category="general" />} />
          <Route exact path="/sports" element={ <NewsComp key="spo" country="in" category="sports" />} />
          <Route exact path="/business" element={ <NewsComp key="bus" country="in" category="business" />} />
          <Route exact path="/entertainment" element={ <NewsComp key="ent" country="in" category="entertainment" />} />
          <Route exact path="/health" element={ <NewsComp key="heal" country="in" category="health" />} />
          <Route exact path="/science" element={ <NewsComp key="sci" country="in" category="science" />} />
          <Route exact path="/technology" element={ <NewsComp key="tech" country="in" category="technology" />} />
          </Routes>
          </>
      </Router>
    );
  }
}
