const express = require('express');
const PORT = propcess.env.PORT || 3002;
const app = express();

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

const { notes } = require('./db/notes');