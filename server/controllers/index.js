const path = require('path');

const presentation = require('../models/presentation');
const channel = require('../models/channel');
// const configureStore = require('../../common/store/configureStore');
const bookmarkUtil = require('../models/bookmark');

let maxSlide = 0;  // TODO: improve after MVP to support multiple presentations
const tempBookmarkStore = [];
const bookmarkedSlides = [];

module.exports = {

  homepage: {
    get(req, res) {
      const channelNumber = req.query.channel;
      const sockets = {
        sentUrl: '',
        presenterIsOn: true,
        audienceIsOn: true
      };
      if (channel.channelIsLive(channelNumber)) {
        sockets.channel = channelNumber;
        sockets.receivedUrlId = 0;
      } else {
        sockets.channel = null;
        sockets.receivedUrlId = null;
      }

      // ************* INITIAL STORE ******************
      let preloadedState = {
        // livePresentation,
          // Object with:
          // * channel,
          // * presentationIndex, (in the presentations array below)
          // * currentSlideIndex, (in the slides array below)
          // * maxSlideIndex (in the slides array below)
        selectedPresentationIndex: 0,
        presentations: [presentation.getPresentation()],
          // title,
          // id,  (database ID)
          // slides: [ {original: url, thumbnail: url}, ... ]
        sockets
      };
      // ***********************************************

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

  liveChannel: {
    get(req, res) {
      let newChannel = channel.getNewChannel();
      res.json( newChannel );
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
      res.json(bookmarkedSlides);
    },
    post(req, res) {
      const slideIndex = req.body.slideIndex;
      if (!tempBookmarkStore.includes(slideIndex)) {
        tempBookmarkStore.push(slideIndex);
        const slides = presentation.getPresentation();
        bookmarkedSlides.push(slides.slides[slideIndex]);
        console.log('slide at index ', slideIndex, ' is being added to bookmarked');
      }
      res.json('slide at index ', slideIndex, ' is being added to bookmarked');
      console.log('tempBookmarkStore', tempBookmarkStore);
      console.log('bookmarkedSlides', bookmarkedSlides);
    }
  },

  audience_presentation_remove_bookmark: {
    post(req, res) {
      const slideIndex = req.body.slideIndex;
      tempBookmarkStore.splice(tempBookmarkStore.indexOf(slideIndex), 1);
      const slides = presentation.getPresentation();
      bookmarkedSlides.splice(slides.slides[slideIndex], 1);
      console.log('slide at index ', slideIndex, ' is being removed from bookmarked');
      res.json('slide at index ', slideIndex, ' is removed from bookmarked');
      console.log('tempBookmarkStore', tempBookmarkStore);
      console.log('bookmarkedSlides', bookmarkedSlides);
    }
  },

  audience_presentation_add_note: {
    post( req, res ) {
      console.log( 'received new note: ', req.body );
      res.status( 201 ).send({});
    }
  },

  audience_presentation_get_bookmarks: {
    get(req, res) {
      res.json(bookmarkedSlides);
    }
  },

  audience_presentation_store_bookmarks: {
    get(req, res) {
      console.log('storing ', tempBookmarkStore, ' into DB');
      let userId = 46231074627482;
      const slides = presentation.getPresentation();
      let bookmarkResults = tempBookmarkStore.map(index => slides.slides[index]);
      console.log('bookmarkResults', bookmarkResults);
      bookmarkUtil.storeBookmarks(bookmarkResults, userId);
      res.json(bookmarkResults);
    }
  },

//upload slides into database
  presenter_presentation: {
    post(req, res) {
      console.log('your presentation is persistent')
      res.status(201)
    }
  }
};
