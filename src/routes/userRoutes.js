// routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Create a new user
router.post('/create', userController.createUser);

// Get all users
router.get('/all', userController.getAllUsers);

// Get user by ID
router.get('/:userId', userController.getUserById);

// Update user by ID
router.put('/:userId', userController.updateUser);

// Delete user by ID
router.delete('/:userId', userController.deleteUser);

module.exports = router;
