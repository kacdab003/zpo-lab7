const path = require("path");
const fs = require("fs");
const dataFilePath = path.join(__dirname, "../", "../", "data", "notes.json");

class Note {
  constructor(title, description, priority) {
    this.id = new Date()
    this.title = title;
    this.description = description;
    this.priority = priority;
  }

  static fetchAll() {
    const notesFromFile = fs.readFileSync(dataFilePath);
    const notes = JSON.parse(notesFromFile);
    return notes;
  }
  static readNote(id) {
    const notes = this.fetchAll();
    const foundNote = notes.find(n => n.id === id);
    return foundNote !== -1 ? foundNote : new Error("Note not found");
  }
  static updateNote(id, update) {
    const notes = this.fetchAll();
    const noteToUpdateIndex = notes.findIndex(n => n.id === id);
    const { title, description, priority } = update;
    notes[noteToUpdateIndex].title = title;
    notes[noteToUpdateIndex].description = description;
    notes[noteToUpdateIndex].priority = priority;
    fs.writeFileSync(dataFilePath, JSON.stringify(notes));
  }
  static removeNote(id) {
    const notes = this.fetchAll();
    const noteToRemoveIndex = notes.findIndex(n => n.id === id);
    notes.splice(noteToRemoveIndex, 1);
    fs.writeFileSync(dataFilePath, JSON.stringify(notes));
  }
  createNote() {
    const notes = Note.fetchAll();
    notes.push(this);
    fs.writeFileSync(dataFilePath, JSON.stringify(notes));
  }
}
module.exports = Note;
