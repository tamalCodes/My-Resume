import React from "react";
import Home from "./pages/Home";
import Project from "./pages/Project";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (

    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Project />} />

        </Routes>
        {/* <Home />
        <Project /> */}
      </Router>
    </>

  );
};

export default App;
