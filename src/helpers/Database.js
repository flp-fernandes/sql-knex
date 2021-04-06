const knex = require('knex');

const knexfile = require('../../knexfile');

const { dbEnviroment } = require('../env');

module.exports = knex(knexfile[dbEnviroment]);