const express = require('express');
const notes = require('./data/notes');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.get('/api/notes', (req, res) => {
    res.json(notes);
})

app.get('/api/notes/:id', (req, res) => {
    try {
        const note = notes.find((n) => n._id === req.params.id);
        if (!note) {
            res.json({ 'error': "not found" });
        }
        else {
            res.json(note)
        }
    } catch (error) {
        res.json(error);
    }
})
app.listen(process.env.PORT, () => {
    try {
        console.log(`Server started on port ${5000}`);
    } catch (error) {
        console.log('error while starting server:', error);
    }
})