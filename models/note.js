const mongoose = require("mongoose");
const noteScheme = mongoose.Schema({
    title:String,
    text:String,
    contact:{ref:"contact", type: mongoose.Schema.Types.ObjectId}
},{versionKey: false, timestamps: true});

const Note = mongoose.model("note", noteScheme);

module.exports = Note;
