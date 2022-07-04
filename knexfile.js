const path = require('path');

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      // em que lugar esta meu arquivo do banco
      filename: path.resolve(__dirname, 'src', 'database', 'database.db'),
    },
    pool: {
      afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb),
    },
    migrations: {
      directory: path.join(__dirname, 'src', 'database', 'knex', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'database', 'knex', 'seeds'),
    },
    useNullAsDefault: true,
  },
};
