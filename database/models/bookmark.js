'use strict';
module.exports = function(sequelize, DataTypes) {
  var Bookmark = sequelize.define('Bookmark', {
    slide_id: DataTypes.INTEGER,
    user_id: DataTypes.BIGINT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Bookmark;
};