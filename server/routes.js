const router = require('express').Router();

const controller = require('./controllers');


// Connect controller methods to their corresponding routes
router.get('/', controller.homepage.get);
router.get('/:id([0-9]{1,5})', controller.channel.get);  // id: a number from 1 to 5 digits long


router.get('/presentations', controller.presentation.get);
router.post('/presentations', controller.presentation.post);

router.get('/audience_presentation', controller.audience_presentation.get);
router.post('/audience_presentation', controller.audience_presentation.post);

module.exports = router;


app.post('/audience_presentation/add_bookmark', (req, res) => {
  if (!tempBookmarkStore.includes(req.body.slideIndex)) {
    bookmarks.push(req.body.slideIndex);
  }
  console.log('slide ', slideIndex, ' is being bookmarked');

})
