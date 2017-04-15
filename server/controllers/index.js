const path = require('path');
const presentation = require('../models/presentation');

let maxSlide = 0;  // TODO: improve after MVP to support multiple presentations
let tempBookmarkStore = [];

module.exports = {

  homepage: {
    get(req, res) {
      let channel = req.query.channel;
      if (!channel) {
        channel = -1;
      }
      res.render('master', { channel });
    }
  },

  channel: {
    get(req, res) {
      res.redirect(`/?channel=${req.params.id}`);
    }
  },

  presentation: {
    get(req, res) {
      res.json(presentation.getPresentation());
      // TODO later: async access to DB:
      // users.get((err, results) => {
      //   if (err) { /* do something */ }
      //   res.json(results);
      // });
    },
    post(req, res) {
      // const params = [req.body.username];
      // models.users.post(params, (err, results) => {
      //   if (err) { /* do something */ }
      //   res.sendStatus(201);
      // });
    }
  },

  audience_presentation: {
    get(req, res) {
      res.json(maxSlide);
    },
    post(req, res) {
      maxSlide = req.body.maxSlide;
      console.log(maxSlide);
      res.json();
    }
  },

  audience_presentation_add_bookmark: {
    post(req, res) {
      let slideIndex = req.body.slideIndex;
      if (tempBookmarkStore.indexOf(slideIndex) < 0) {
        tempBookmarkStore.push(slideIndex);
        let slides = presentation.getPresentation();
        let bookmarkSlides = [];

        console.log('slide ', slideIndex, ' is being bookmarked');
      }
      console.log('tempBookmarkStore', tempBookmarkStore);
    }
  }
};
