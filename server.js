const express = require('express');
const app = express();

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.listen(3002, () => {
  console.log(`API server now on port 3002!`);
});

const { notes } = require('./db/notes');