import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import './Form.css';

const FormB = () => {
  const [name, setName] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const phoneNumberObject = parsePhoneNumberFromString(phoneNumber, countryCode);
    if (!phoneNumberObject || !phoneNumberObject.isValid()) {
      setError('Invalid phone number for the selected country code.');
      return;
    }
    setError('');

    try {
      await axios.post('http://localhost:5000/api/forms/submit', { formType: 'B', name, countryCode, phoneNumber });
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <h1>Form B</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Country Code:</label>
          <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)} required>
            <option value="">Select Country Code</option>
            <option value="US">US</option>
            <option value="IN">IN</option>
            {/* Add other country codes here */}
          </select>
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default FormB;
