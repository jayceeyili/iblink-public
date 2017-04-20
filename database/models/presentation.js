'use strict';
module.exports = function(sequelize, DataTypes) {
  var Presentation = sequelize.define('Presentation', {
    title: DataTypes.STRING,
    user_id: DataTypes.BIGINT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Presentation;
};