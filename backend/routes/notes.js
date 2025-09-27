const express = require("express");
const router = express.Router();
var fetchUser = require("../middleware/fetchUser");
const Note = require("../models/Notes");
const { body, validationResult } = require('express-validator');

// to display content of 'notes' routing
// ROUTE 1: fetch all the notes of logined user using: GET "/api/notes/fetchAllNotes". Login required.
router.get('/fetchAllNotes', fetchUser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occured");
    }
})

// ROUTE 2: add a new note of logined user using: POST "/api/notes/addnote". Login required.
router.post('/addnote', fetchUser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Enter a valid description').isLength({ min: 5 }),
], async (req, res) => {
    const { title, description, tag } = req.body;
    // checking errors here
    const result = validationResult(req);
    if (result.isEmpty()) {  // if no errors
        try {
            const note = new Note({
                title, description, tag, user: req.user.id
            })
            const saveNote = await note.save();
            res.json(note);
        }
        catch (error) {
            console.log(error.message);
            res.status(500).send("Some error occured");
        }
    }
    else {
        res.send({ errors: result.array() })  // if errors, return errors
    }
})

// ROUTE 3: update an existing note of logined user using: PUT "/api/notes/updatenote". Login required.
router.put('/updatenote/:id', fetchUser, async (req, res) => {
    const { title, description, tag } = req.body;
    try {
        // create a new note
        const newNote = {};
        if (title) newNote.title = title;
        if (description) newNote.description = description;
        if (tag) newNote.tag = tag;
        // find the note to be updated
        let note = await Note.findById(req.params.id);
        if (!note) return res.status(404).json({ error: "Not found error" });
        else {
            if (note.user.toString() !== req.user.id) {
                return res.status(401).send({ error: "Not allowed" });
            }
            else {
                note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
                res.json(note);
            }
        }

    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occured");
    }
})

// ROUTE 4: delete an existing note of logined user using: DELETE "/api/notes/deletenote". Login required.
router.delete('/deletenote/:id', fetchUser, async (req, res) => {
    try {
        // find the note to be deleted
        let note = await Note.findById(req.params.id);
        if (!note) return res.status(404).json({ error: "Not found error" });
        // allow deletion only if user owns this note
        else {
            if (note.user.toString() !== req.user.id) {
                return res.status(401).send({ error: "Not allowed" });
            }
            else {
                note = await Note.findByIdAndDelete(req.params.id);
                res.json({success: "note has been deleted", note: note});
            }
        }

    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occured");
    }
})

module.exports = router;