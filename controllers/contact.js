const Contact = require("../models/contact");

const getAll = async (req, res) => {
    const result = await Contact.find().populate("notes",{title:true, text:true});
    res.send(result);
};

const create = async (req, res) => {
    const result = await Contact.create(req.body);
    res.send(result);
};

const addNotes = async (req, res) => {
    const result = await Contact.findByIdAndUpdate(req.params.id, {$push:{notes:req.body.notesId}}, {new:true});
    res.send(result);
};

module.exports = {getAll, create, addNotes};

