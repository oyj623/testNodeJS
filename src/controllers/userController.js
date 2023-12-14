// controllers/userController.js
const userService = require('../services/userService');

class UserController {
  async createUser(req, res) {
    try {
      const { username, user_password, user_role, user_credit } = req.body;
      const userData = { username, user_password, user_role, user_credit };
      const newUser = await userService.createUser(userData);
      res.json(newUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error('Error retrieving users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getUserById(req, res) {
    try {
      const userId = parseInt(req.params.userId, 10);
      const user = await userService.getUserById(userId);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error retrieving user by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async updateUser(req, res) {
    try {
      const userId = parseInt(req.params.userId, 10);
      const { username, user_password, user_role, user_credit } = req.body;
      const userData = { username, user_password, user_role, user_credit };
      const updatedUser = await userService.updateUser(userId, userData);
      if (updatedUser) {
        res.json(updatedUser);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async deleteUser(req, res) {
    try {
      const userId = parseInt(req.params.userId, 10);
      const deletedUser = await userService.deleteUser(userId);
      if (deletedUser) {
        res.json({ message: 'User deleted successfully' });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = new UserController();
