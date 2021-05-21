var Sequelize = require('sequelize')
var db = require('../sequelize')



var todos = db.define(
  'todos',
  {
    id: {
      type: Sequelize.BIGINT(11),
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING(255),
    },

    priority: {
        type: Sequelize.STRING(255),
      },
    userId: {
      type: Sequelize.BIGINT(11),
      references: {
        model: 'users', //  refers to table name
        key: 'id', //  refers to column name in reference table
      },
    } 
  },
  {
    
    tableName: 'todos',
  },
)


module.exports = todos;
