// create web server with express
const express = require('express')
const app = express()
// import body-parser
const bodyParser = require('body-parser')
// import mongoose
const mongoose = require('mongoose')
// import Comment model
const Comment = require('./models/comment')
// import Post model
const Post = require('./models/post')
// import cors
const cors = require('cors')
// import dotenv
const dotenv = require('dotenv')
dotenv.config()

// connect to mongodb
mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch(err => {
    console.log(err)
  })

// use cors
app.use(cors())
// use body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// get all comments
app.get('/comments', (req, res) => {
  Comment.find()
    .then(comments => {
      res.json(comments)
    })
    .catch(err => {
      console.log(err)
    })
})

// get all comments for a post
app.get('/comments/:id', (req, res) => {
  Comment.find({ post: req.params.id })
    .then(comments => {
      res.json(comments)
    })
    .catch(err => {
      console.log(err)
    })
})

// post a comment
app.post('/comments', (req, res) => {
  const newComment = new Comment({
    post: req.body.post,
    body: req.body.body,


