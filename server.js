const fs = require('fs');
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3002;
const app = express();

// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// Parse incoming JSON data
app.use(express.json());

function createNewNote(body, noteArray) {
  const note = body;
  noteArray.psuh(note);
  fs.writeFileSync(
    path.join(__dirname, './db/notes.json'),
    JSON.stringify({ notes: noteArray }, null, 2)
  );
  return note;
}

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.post('/api/notes', (req, res) => {
  req.body.id = notes.length.toString();

  const note = createNewNote(req.body, notes);

  res.json(note);
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

const { notes } = require('./db/notes');