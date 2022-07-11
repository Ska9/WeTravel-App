
module.exports = {
  client: 'pg',
  connection: {
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '123456',
    port: 5432,
  },
  pool: {
    min: 2,
    max: 10
  },
};
