
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

//Page navigations
import Home from "./pages/Home";
import Craftsman from "./pages/Craftsman";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          {/* All nav pages */}
          <Route path="/" element={<Home />} />
          <Route path="/craftsman" element={<Craftsman />} />
          {/* End all nav pages */}

          {/* Others pages*/}

          {/* End others pages */}
          
        </Routes>
      </div>
    </Router>
  );
}