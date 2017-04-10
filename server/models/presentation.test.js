const presentation = require('./presentation');
const imagePath = `${__dirname}/../../client/public/user_images/`;
const mvpPres = [`${imagePath}Slide1.jpg`, `${imagePath}Slide2.jpg`, `${imagePath}Slide3.jpg`];

test('Server model retrieves image files', () => {
  const fs = require('fs');
  const pres = presentation.getPresentation();
  expect(fs.existsSync(pres[2]).toBe(true));
  expect(pres.length.toBe(3));
});

