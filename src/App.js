import React from 'react';
// import './App.css';
// importing components from react-router-dom package
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate
} from "react-router-dom";

// import components
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Videos from "./components/Videos"
import Contact from "./components/Contact"

function App() {
  return (
    <Router>
      <Routes>
      <Route 
          exact
          path="/"
          element={<Home />}
        />
        <Route 
          exact
          path="/Home"
          element={<Home />}
        />
        <Route
          path="/About"
          element={<About />}
        />
        <Route 
          path="/Projects"
          element={<Projects />}
        />
        <Route 
          path="/Videos"
          element={<Videos />}
        />
        <Route 
          path="/Contact"
          element={<Contact />}
        />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
