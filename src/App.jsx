import React from "react";
import Home from "./pages/Home.jsx";
import Project from "./pages/Project.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (

    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Project />} />

        </Routes>

      </Router>
    </>

  );
};

export default App;
