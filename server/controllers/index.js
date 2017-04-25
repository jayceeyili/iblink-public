const path = require('path');

const presentation = require('../models/presentation');
const channel = require('../models/channel');
// const configureStore = require('../../common/store/configureStore');
const bookmarkUtil = require('../models/bookmark');
const noteUtil = require('../models/note');

let maxSlide = 0;  // TODO: improve after MVP to support multiple presentations
const slides = presentation.getPresentation().slides;

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
      const newChannel = channel.getNewChannel();
      res.json(newChannel);
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
      const userId = '46231074627482';
      const bookmarkedSlideUrl = slides[slideIndex].original;
      bookmarkUtil.addBookmark(bookmarkedSlideUrl, userId);
      console.log('slide at index ', slideIndex, ' is added to bookmarked');
      res.json('slide at index ', slideIndex, ' is added to bookmarked');
    }
  },

  audience_presentation_remove_bookmark: {
    post(req, res) {
      const slideIndex = req.body.slideIndex;
      const userId = '46231074627482';
      const bookmarkedSlideUrl = slides[slideIndex].original;
      bookmarkUtil.removeBookmark(bookmarkedSlideUrl, userId);
      console.log('slide at index ', slideIndex, ' is being removed from bookmarked');
      res.json('slide at index ', slideIndex, ' is removed from bookmarked');
    }
  },

  audience_presentation_note: {
    post(req, res) {
      noteUtil.storeNote(req.body);
      res.status(201).send(JSON.stringify('Note Saved Successfully!'));
    },

    put(req, res) {
      noteUtil.updateNote(req.body);
      res.status(200).send(JSON.stringify('Note Updated Successfully!'));
    },

    delete(req, res) {
      noteUtil.deleteNote(req.body);
      res.status(200).send(JSON.stringify('Note Deleted Successfully!'));
    }
  },

  // audience_presentation_get_bookmarks: {
  //   get(req, res) {
  //     res.json(bookmarkedSlides);
  //   }
  // },

  // upload slides into database
  presenter_presentation: {
    post(req, res) {
      console.log('In server controller, getting presentation:', req.body.newPresentation);
      // presentation.storePresentation(req);
      res.status(201);
    }
  },

  metrics: {
    get(req, res) {
      const presentationId = req.query.presentationId;
      // declare a variable initialized at an empty array to store the resulting metrics data
      let metricsData = [];
      // declare a variable that stores the result of the slideUtil function that queries db to get all the slides of that presentation id
      // iterate over the target slides 
      // query db to get the count of bookmarks with set presentation id and set slide index
      // query db to get the count of notes with set presentation id and set slide index
      res.json(metricsData)
      // [
      //   {
      //     notes: '10',
      //     bookmarks: '13',
      //     slide: '1'
      //   }, {
      //     notes: '0',
      //     bookmarks: '2',
      //     slide: '2'
      //   }, {
      //     notes: '5',
      //     bookmarks: '6',
      //     slide: '3'
      //   }, {
      //     notes: '12',
      //     bookmarks: '0',
      //     slide: '4'
      //   }, {
      //     notes: '7',
      //     bookmarks: '2',
      //     slide: '5'
      //   }
      // ]
    }
  }
};
