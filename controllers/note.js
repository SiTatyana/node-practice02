const Note = require("../models/note");

const getAll = async (req, res) => {
    const result = await Note.find().populate("contact");
    res.send(result);
};

const create = async (req, res) => {
    const result = await Note.create({...req.body, contact:req.params.id});
    res.send(result);
};

module.exports = {getAll, create};