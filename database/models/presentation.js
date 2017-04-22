'use strict';
module.exports = function(sequelize, DataTypes) {
  var Presentation = sequelize.define('Presentation', {
    title: DataTypes.STRING,
    user_id: DataTypes.BIGINT,
    attendee_count: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Presentation;
};