const express = require('express');
const { getNotes, createNote, updateNode, deleteNote } = require('../controllers/noteController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/create', protect, createNote);
router.get('/', protect, getNotes);
router.put('/:id', protect, updateNode);
router.delete('/:id', protect, deleteNote);

module.exports = router;