// create web server with express
const express = require('express');
const router = express.Router();

// import models
const Comment = require('../models/Comment');
const Post = require('../models/Post');

// create route to post comments
router.post('/', async (req, res) => {
    // create comment
    const comment = new Comment({
        content: req.body.content,


