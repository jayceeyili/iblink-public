const mvpPres = {
  title: 'MVP Presentation',
  id: 1,
  slides: [
    {
      original: 'http://i.imgur.com/1NDbR9t.jpg',
      thumbnail: 'http://i.imgur.com/1NDbR9t.jpg'
    },
    {
      original: 'http://i.imgur.com/kTQhA6J.jpg',
      thumbnail: 'http://i.imgur.com/kTQhA6J.jpg'
    },
    {
      original: 'http://i.imgur.com/jUkgkhB.jpg',
      thumbnail: 'http://i.imgur.com/jUkgkhB.jpg'
    },
    {
      original: 'http://i.imgur.com/8IzciiM.jpg',
      thumbnail: 'http://i.imgur.com/8IzciiM.jpg'
    },
    {
      original: 'http://i.imgur.com/ULvmW7i.jpg',
      thumbnail: 'http://i.imgur.com/ULvmW7i.jpg'
    },
    {
      original: 'http://i.imgur.com/aSgIylL.jpg',
      thumbnail: 'http://i.imgur.com/aSgIylL.jpg'
    }
  ]
};

module.exports.getPresentation = function (presentationIndex) {
  return mvpPres;
};
