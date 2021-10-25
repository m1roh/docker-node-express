const express = require('express');

const {getAllPosts, createPost, getPost, updatePost, deletePost} = require("../controllers/post");
const protect = require("../middlewares/auth");

const postRouter = express.Router();

postRouter
  .route('/')
  .get(protect, getAllPosts)
  .post(protect, createPost);

postRouter
  .route('/:id')
  .get(protect, getPost)
  .patch(protect, updatePost)
  .delete(protect, deletePost);

module.exports = postRouter;
