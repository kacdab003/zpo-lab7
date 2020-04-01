const Note = require('../models/Note');



exports.addNote = (req,res,next) =>{
    const {title,description,priority} = req.body
    const testNote = new Note(title,description,priority);
    testNote.createNote()
    const notes = Note.fetchAll();
 res.render('index',{
     notes:notes
 })
}
exports.getNote = (req,res,next)=>{
    
}
exports.updateNote = (req,res,next) =>{

}
exports.deleteNote = (req,res,next)=>{

}