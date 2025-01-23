const Notes = require('../models/noteModel');
const asyncHandler = require('express-async-handler');

const getNotes = asyncHandler(async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user._id });
        if (notes) {
            res.status(200).json(notes);
        }
        else {
            res.status(404).json({ message: "Not Notes Found!" })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error, please try again later!" })
    }
})

const createNote = asyncHandler(async (req, res) => {
    try {
        const { title, content, category } = req.body;
        if (!title || !content || !category) {
            res.status(400);
            throw new Error("Please fill the Fields!");
        }
        else {
            const note = new Notes({ user: req.user._id, title, content, category });
            const savedNote = await note.save();
            res.status(201).json(savedNote);
        }
    } catch (error) {
        res.status(500);
        throw new Error("Internal Server Error!")
    }
})

const updateNode = asyncHandler(async (req, res) => {
    try {
        const { title, content, category } = req.body;
        const { id } = req.params;
        const noteToUpdate = await Notes.findById(id);
        if (noteToUpdate) {
            noteToUpdate.title = title || noteToUpdate.title;
            noteToUpdate.content = content || noteToUpdate.content;
            noteToUpdate.category = category || noteToUpdate.category;
            const updatedNote = await noteToUpdate.save();
            res.status(200).json(updatedNote);
        }
        else {
            res.status(404);
            throw new Error("Not Found!");
        }
    } catch (error) {
        res.status(500)
        throw new Error("Internal Server Error!");
    }
})

const deleteNote = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        const noteToDelete = await Notes.deleteOne({ _id: id }); // true -> document deleted else -> false
        if (noteToDelete) {
            res.status(200).json({ message: "Document Deleted!" })
        }
        else {
            res.status(500);
            throw new Error("Internal Server Error!");
        }
    } catch (error) {
        res.status(500);
        throw new Error("Internal Server Error!");
    }
})

const deleteAll = asyncHandler(async (req, res) => {
    try {
        const deletedNotes = await Notes.deleteMany();
        if (deletedNotes.deletedCount > 0) {
            res.status(200).json({ message: "Sucessfully Deleted All Notes!" })
        }
    } catch (error) {
        res.status(500);
        throw new Error("Internal Server Error!");
    }
})

module.exports = { getNotes, createNote, updateNode, deleteNote, deleteAll };