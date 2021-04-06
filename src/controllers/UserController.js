const knex = require('../helpers/Database');

module.exports = {
  async index(req, res) {
    const results = await knex('users');

    return res.json(results);
  }
}