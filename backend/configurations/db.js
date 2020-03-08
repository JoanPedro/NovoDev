const config = require('../knexfile.js')
const knex = require('knex')(config)

knex.migrate.latest([config]) //Cuidado. Migrate:Latest automático.
module.exports = knex