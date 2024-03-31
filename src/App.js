import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

//Page navigations
import Home from "./pages/Home";
import Craftsman from "./pages/Craftsman";
import Cardcraftsman from "./pages/Cardcraftsman";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* All nav pages */}
          <Route path="/" element={<Home />} />
          <Route path="/craftsman" element={<Craftsman />} />
          {/* Route pour gérer /artisan/:id */}
          <Route path="/cardcraftsman/:id" element={<Cardcraftsman />} />{" "}
        </Routes>
      </div>
    </Router>
  );
}
