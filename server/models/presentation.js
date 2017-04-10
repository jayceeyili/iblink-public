const imagePath = `${__dirname}/../../client/public/user_images/`;
const mvpPres = [`${imagePath}Slide1.jpg`, `${imagePath}Slide2.jpg`, `${imagePath}Slide3.jpg`];  // For MVP

module.exports.getPresentation = function (presentationIndex) {
  return mvpPres;
};

