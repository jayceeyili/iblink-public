'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tweet = sequelize.define('Tweet', {
    slide_id: DataTypes.INTEGER,
    user_id: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Tweet;
};