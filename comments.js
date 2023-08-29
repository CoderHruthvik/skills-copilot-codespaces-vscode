// create web server
// 1. use express
const express = require('express');
// 2. create web server object
const router = express.Router();
// 3. import controller
const commentsCtrl = require('../controllers/comments');
// 4. set route
router.post('/comments', commentsCtrl.createComment);
router.get('/comments', commentsCtrl.getComments);
router.get('/comments/:id', commentsCtrl.getComment);
router.put('/comments/:id', commentsCtrl.updateComment);
router.delete('/comments/:id', commentsCtrl.removeComment);
// 5. export router
module.exports = router;