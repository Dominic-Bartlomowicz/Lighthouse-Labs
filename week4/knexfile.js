// Update with your config settings.

var settings = require('./settings');

module.exports = {

  development: {
      client: 'postgresql',
      connection: {
      database: settings.database,
      user:     settings.user,
      password: settings.password,
      host:     settings.hostname,
      port:     settings.port
    }, 
      migrations: {
      tableName: 'knex_migrations'
    }
  },

};
