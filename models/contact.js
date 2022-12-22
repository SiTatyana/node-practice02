const mongoose = require("mongoose");
const contactScheme = mongoose.Schema({
    name:String,
    phone:String,
    notes:[{ref:"note", type:mongoose.Schema.Types.ObjectId}]
},{versionKey: false, timestamps: true});

const Contact = mongoose.model("contact", contactScheme)

module.exports = Contact;