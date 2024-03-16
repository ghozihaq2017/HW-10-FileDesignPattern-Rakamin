const UserRepository = require('../repositories/userRepository.js');
const { Op } = require('sequelize');
require('dotenv').config();

class UserService {
  static findAll = async (params) => {
    try {
      let { email, gender, role } = params;

      let filterOptions = {
        where: {},
      };

      let emailFilter = {};
      let genderFilter = {};
      let roleFilter = {};

      if (email)
        emailFilter = {
          email: {
            [Op.iLike]: `%${email}%`,
          },
        };

      if (gender)
        genderFilter = {
          gender: {
            [Op.iLike]: `%${gender}%`,
          },
        };

      if (role)
        roleFilter = {
          role: {
            [Op.iLike]: `%${role}%`,
          },
        };

      filterOptions.where = {
        ...emailFilter,
        ...genderFilter,
        ...roleFilter,
      };

      const users = await UserRepository.findAll(filterOptions);
      return users;
    } catch (err) {
      throw err;
    }
  };

  static findOne = async (id) => {
    try {
      const filterOptions = {
        where: {
          id,
        },
      };

      const user = await UserRepository.findOne(filterOptions);
      if (!user) throw { name: 'ErrorNotFound', message: 'User Not Found' };

      return user;
    } catch (err) {
      throw err;
    }
  };

  static create = async (params) => {
    try {
      const user = await UserRepository.create(params);
      return user;
    } catch (err) {
      throw err;
    }
  };

  static update = async (params) => {
    try {
      const { id, body } = params;

      await UserRepository.update(id, body);
    } catch (err) {
      throw err;
    }
  };

  static destroy = async (id) => {
    try {
      const filterOptions = {
        where: {
          id,
        },
      };
      await UserRepository.destroy(filterOptions);
    } catch (err) {
      throw err;
    }
  };
}

module.exports = UserService;
