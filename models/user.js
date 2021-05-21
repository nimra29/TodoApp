// var Sequelize = require('sequelize')
// module.exports = (sequelize, type) => {
//     return sequelize.define('user', {
//         id: {
//             type: Sequelize.BIGINT(11),
//             autoIncrement: true,
//             primaryKey: true,
//           },
//            userName: {
//             type: Sequelize.STRING(255),
//           },
//           email: {
//             type: Sequelize.STRING(70),
//             unique: true,
//             validate: {
//               isEmail: true, // checks for email format (foo@bar.com)
//             },
//           }, 
//           password: {
//             type: Sequelize.STRING(255),
//           }
        
//     })
// }

var Sequelize = require('sequelize')
var db = require('../sequelize')



var users = db.define(
  'users',
  {
    id: {
      type: Sequelize.BIGINT(11),
      autoIncrement: true,
      primaryKey: true,
    },
    userName: {
      type: Sequelize.STRING(255),
    },
    email: {
      type: Sequelize.STRING(70),
      unique: true,
      validate: {
        isEmail: true, // checks for email format (foo@bar.com)
      },
    },
    password: {
      type: Sequelize.STRING(255),
    },
     
  },
  {
    
    tableName: 'users',
  },
)


module.exports = users;
