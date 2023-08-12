// pages/api/cat.js

import axios from 'axios';

const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search';
const API_KEY = process.env.YOUR_API_KEY;

export default async function handler(req, res) {
  try {
    const response = await axios.get(CAT_API_URL, {
      headers: {
        'x-api-key': API_KEY,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'TheCatAPI request failed' });
  }
}
