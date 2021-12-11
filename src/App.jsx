import React from "react";
import Home from "./pages/Home.jsx";
import Project from "./pages/Project"
import About from "./pages/About.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
  return (

    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Project />} />
          <Route path='/about' element={<About />} />


        </Routes>

      </Router>
    </>

  );
};

export default App;
