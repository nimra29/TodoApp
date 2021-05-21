const Sequelize = require('sequelize')

const db = new Sequelize('TodoDB', 'root', 'nn2739aa.', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
db.sync({
  logging: false,
  force: false //The "force: true" option for sync will add "DROP TABLE IF EXISTS" to the create statements,
}).then(() => {
  console.log("DB sync sucessfull");
})
  .catch(err => {
    console.error('Unable to sync the database:', err);
  });

module.exports = db;
