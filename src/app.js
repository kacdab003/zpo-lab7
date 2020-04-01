const path = require('path')
const express = require("express");
const bodyParser = require('body-parser')
const Note = require('./models/Note')
const app = express();
const notesController = require('./controllers/notesController')
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded())
app.post('/add',notesController.addNote)
app.get('/read',notesController.getNote);
app.put('/update:noteId',notesController.updateNote);
app.delete('/delete:noteId',notesController.deleteNote);
app.get('/',(req,res,next)=>{
const notes = Notes.fetchAll();
    res.render('index',{notes})
})

app.listen(3000,()=>{
    console.log('I am running!');
    
})
