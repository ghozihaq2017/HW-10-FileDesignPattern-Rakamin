const UserService = require('../services/userService');

class UserController {
  // List All User
  static findAll = async (req, res, next) => {
    try {
      const users = await UserService.findAll(req.query);
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  };

  // List User by id
  static findOne = async (req, res, next) => {
    try {
      const user = await UserService.findOne(req.params.id);
      res.status(200).json({
        data: user,
      });
    } catch (err) {
      next(err);
    }
  };

  // Add User
  static create = async (req, res, next) => {
    try {
      const user = await UserService.create(req.body);

      res.status(201).json({
        message: 'User added successfully',
        data: user,
      });
    } catch (err) {
      next(err);
    }
  };

  // Update User
  static update = async (req, res, next) => {
    try {
      const params = {
        id: req.params.id,
        body: req.body,
      };

      await UserService.update(params);

      res.status(200).json({ message: 'User updated successfully' });
    } catch (err) {
      next(err);
    }
  };

  // Delete Movie
  static destroy = async (req, res, next) => {
    try {
      await UserService.destroy(req.params.id);

      res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = UserController;
