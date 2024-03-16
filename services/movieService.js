const MovieRepository = require('../repositories/movieRepository.js');
const { Op } = require('sequelize');
require('dotenv').config();

class MovieService {
  static findAll = async (params) => {
    try {
      let { title, genres, year } = params;

      let filterOptions = {
        where: {},
      };

      let titleFilter = {};
      let genresFilter = {};
      let yearFilter = {};

      if (title)
        titleFilter = {
          title: {
            [Op.iLike]: `%${title}%`,
          },
        };

      if (genres)
        genresFilter = {
          genres: {
            [Op.iLike]: `%${genres}%`,
          },
        };

      if (year)
        yearFilter = {
          year: +year,
        };

      filterOptions.where = {
        ...titleFilter,
        ...genresFilter,
        ...yearFilter,
      };

      const movies = await MovieRepository.findAll(filterOptions);
      return movies;
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

      const movie = await MovieRepository.findOne(filterOptions);
      if (!movie) throw { name: 'ErrorNotFound', message: 'Movie Not Found' };

      return movie;
    } catch (err) {
      throw err;
    }
  };

  static create = async (params) => {
    try {
      const movie = await MovieRepository.create(params);
      return movie;
    } catch (err) {
      throw err;
    }
  };

  static uploads = async (file) => {
    try {
      if (file) {
        const url = `${process.env.BASE_URL}/photos/${file.filename}`;
        console.log(process.env.BASE_URL);

        return url;
      } else {
        throw { name: 'MissingFile' };
      }
    } catch (err) {
      throw err;
    }
  };

  static update = async (params) => {
    try {
      const { id, body } = params;

      await MovieRepository.update(id, body);
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
      await MovieRepository.destroy(filterOptions);
    } catch (err) {
      throw err;
    }
  };
}

module.exports = MovieService;
