const presentation = require('./presentation');

test('Server model retrieves image files', () => {
  const fs = require('fs');
  const pres = presentation.getPresentation();
  expect(pres.length).toBe(6);
});

