const fs = require('fs');
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3002;
const app = express();

// Middleware
//Makes these files available 
app.use(express.static('public'));
// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// Parse incoming JSON data
app.use(express.json());

// Create a new note
function createNewNote(body, noteArray) {
  const note = body;
  noteArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, './db/notes.json'),
    JSON.stringify({ notes: noteArray }, null, 2)
  );
  return note;
}

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

//To get and display the html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});
//To get and display the other html file
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});
//In case there are no route matches, this should come last if more routes are added later!
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
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