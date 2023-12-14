// services/userService.js
const User = require('../models/userModel');

class UserService {
  async createUser(userData) {
    try {
      const newUser = await User.create(userData);
      return newUser;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  async getAllUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      console.error('Error retrieving users:', error);
      throw error;
    }
  }

  async getUserById(userId) {
    try {
      const user = await User.findByPk(userId);
      return user;
    } catch (error) {
      console.error('Error retrieving user by ID:', error);
      throw error;
    }
  }

  async updateUser(userId, userData) {
    try {
      const [, updatedUser] = await User.update(userData, {
        where: { user_id: userId },
        returning: true,
      });
      return updatedUser[0];
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  }

  async deleteUser(userId) {
    try {
      const deletedUser = await User.destroy({
        where: { user_id: userId },
      });
      return deletedUser;
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  }
}

module.exports = new UserService();
