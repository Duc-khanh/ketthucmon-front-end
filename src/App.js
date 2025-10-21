import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TourList from "./components/TourList";
import TourForm from "./components/TourForm";
import TourDetail from "./components/TourDetail";
import TourDelete from "./components/TourDelete";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TourList />} />
        <Route path="/add" element={<TourForm />} />
        <Route path="/edit/:id" element={<TourForm />} />
        <Route path="/tuors/:id" element={<TourDetail />} />
        <Route path="/delete/:id" element={<TourDelete />} />
        
      </Routes>
    </Router>
  );
}

export default App;
