const Sequelize = require('sequelize');

const sequelize = new Sequelize('	postgres://djzynqci:Z-RSCR-rZ9cae-pUThjfcqSaYc3qCs7Y@raja.db.elephantsql.com:5432/djzynqci');

const todo = require('./models/todo')(sequelize, Sequelize);

const db = {
  sequelize,
  Sequelize,
  todo
};

db.sequelize.sync();

module.exports = db;
