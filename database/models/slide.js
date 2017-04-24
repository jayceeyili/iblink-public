
module.exports = function (sequelize, DataTypes) {
  const Slide = sequelize.define('Slide', {
    image_url: DataTypes.STRING,
    thumbnail_url: DataTypes.STRING,
    slide_index: DataTypes.INTEGER,
    thumbnail_url: DataTypes.STRING,
    presentation_id: DataTypes.BIGINT
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      }
    }
  });
  return Slide;
};
