const router = require('express').Router();

const controller = require('./controllers');


// Connect controller methods to their corresponding routes
router.get('/', controller.homepage.get);
router.get('/:id([0-9]{1,5})', controller.channel.get);  // id: a number from 1 to 5 digits long

router.get('/liveChannel', controller.liveChannel.get);

router.get('/presentations', controller.presentation.get);
router.post('/presentations', controller.presentation.post);

router.get('/audience_presentation', controller.audience_presentation.get);
router.post('/audience_presentation', controller.audience_presentation.post);

router.post('/audience_presentation/add_bookmark', controller.audience_presentation_add_bookmark.post);
router.post('/audience_presentation/remove_bookmark', controller.audience_presentation_remove_bookmark.post);
// router.get('/audience_presentation/get_bookmarks', controller.audience_presentation_get_bookmarks.get);

// notes
router.post('/audience_presentation/add_note', controller.audience_presentation_note.post);
router.put('/audience_presentation/update_note', controller.audience_presentation_note.put);
router.delete('/audience_presentation/delete_note', controller.audience_presentation_note.delete);

router.post('/presenter_presentation', controller.presenter_presentation.post);

module.exports = router;
