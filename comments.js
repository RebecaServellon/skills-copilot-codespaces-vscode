// Create web server

// Import express
const express = require('express');
const router = express.Router();

// Import comment controller
const commentController = require('../controllers/commentController');

// Get all comments
router.get('/', commentController.getComments);

// Get comment by id
router.get('/:id', commentController.getCommentById);

// Create comment
router.post('/', commentController.createComment);

// Update comment
router.put('/:id', commentController.updateComment);

// Delete comment
router.delete('/:id', commentController.deleteComment);

// Export module
module.exports = router;

