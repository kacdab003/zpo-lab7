const path = require('path')
const express = require("express");
const bodyParser = require('body-parser')
const Note = require('./models/Note')
const app = express();
const notesController = require('./controllers/notesController')
// const publicPath = path.join(__dirname,'../','public')
app.get('/',(req,res,next)=>{
    const notes = Note.fetchAll();
        res.render('index',{notes})
    })
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded())
app.post('/add',notesController.addNote)
app.post('/delete',notesController.deleteNote);


app.listen(3000,()=>{
    console.log('I am running!');
    
})
