// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DrugSearch from './components/DrugSearch';
import DrugDetail from './components/DrugDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DrugSearch />} />
        <Route path="/drugs/:drugName" element={<DrugDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
