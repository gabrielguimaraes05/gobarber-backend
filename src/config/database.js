require('dotenv/config');

const config = {
  dialect: 'postgres',
  host: process.env.DB_HOST.split(':')[0],
  port: Number.parseInt(process.env.DB_HOST.split(':')[1]),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

module.exports = {
  ...config,
  development: config,
  production: config,
  test: config,
}
