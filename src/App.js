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
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
