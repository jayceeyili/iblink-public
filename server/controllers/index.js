const path = require('path');

const presentation = require('../models/presentation');
// const configureStore = require('../../common/store/configureStore');


let maxSlide = 0;  // TODO: improve after MVP to support multiple presentations
let tempBookmarkStore = [];
let bookmarkedSlides = [];

module.exports = {

  homepage: {
    get(req, res) {
      let preloadedState = {
        channel: req.query.channel,
        selectedPresentationIndex: 0,
        presentations: [presentation.getPresentation()]
      };

      // const store = configureStore(preloadedState);
      preloadedState = JSON.stringify(preloadedState).replace(/</g, '\\x3c');
      // console.log('preloadedState', preloadedState);
      res.render('master', { preloadedState });
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
    get(req, res) {
      console.log('storing bookmarked slides into DB');
      res.json(bookmarkedSlides);
    },
    post(req, res) {
      let slideIndex = req.body.slideIndex;
      if (!tempBookmarkStore.includes(slideIndex)) {
        tempBookmarkStore.push(slideIndex);
        let slides = presentation.getPresentation();
        bookmarkedSlides.push(slides[slideIndex]);

        console.log('slide ', slideIndex, ' is being bookmarked');
      }
      res.json();
      console.log('tempBookmarkStore', tempBookmarkStore);
      console.log('bookmarkedSlides', bookmarkedSlides);
    }
  },

  audience_presentation_store_bookmark: {
    get(req, res) {
      console.log('storing ', bookmarkedSlides, ' into DB');
      res.json(bookmarkedSlides);
    }
  }
};
