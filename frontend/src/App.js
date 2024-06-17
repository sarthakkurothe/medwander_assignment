import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormA from './components/FormA';
import FormB from './components/FormB';
import axios from 'axios';
import './App.css';

const App = () => {
  const handleRefresh = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/forms/refresh');
      console.log(response.data);
      alert('Data refreshed successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to refresh data.');
    }
  };

  return (
    <Router>
      <div className="container">
        <nav className="nav">
          <a href="/form-a"><i className="fas fa-edit"></i> Form A</a>
          <a href="/form-b"><i className="fas fa-edit"></i> Form B</a>
          <button onClick={handleRefresh} className="refresh-button">
            Refresh Data
          </button>
        </nav>
        <Routes>
          <Route path="/form-a" element={<FormA />} />
          <Route path="/form-b" element={<FormB />} />
        </Routes>
        <footer className="footer">
          <p>&copy; 2023 Dynamic Form App</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
