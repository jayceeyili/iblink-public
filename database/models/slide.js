'use strict';
module.exports = function(sequelize, DataTypes) {
  var Slide = sequelize.define('Slide', {
    image_url: DataTypes.STRING,
    slide_index: DataTypes.INTEGER,
    presentation_id: DataTypes.BIGINT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Slide;
};