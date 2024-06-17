const express = require('express');
const router = express.Router();
const { Form } = require('../models/formModel');
const axios = require('axios');
require('dotenv').config();

const JSON_BIN_API_KEY = process.env.JSON_BIN_API_KEY;
const BIN_ID = process.env.BIN_ID;

// Save form data to database
router.post('/submit', async (req, res) => {
  try {
    const form = await Form.create(req.body);
    res.status(201).json(form);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Refresh data to JSON Bin
router.get('/refresh', async (req, res) => {
  try {
    const forms = await Form.findAll();
    const response = await axios.put(
      `https://api.jsonbin.io/v3/b/${BIN_ID}`,
      { forms },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': JSON_BIN_API_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
