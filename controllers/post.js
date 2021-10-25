const Post = require("../models/post");

exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();

    res.status(200).json({
      status: 'success',
      results: posts.length,
      data: {...posts}
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e
    });
  }
};

exports.getPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {...post}
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e
    });
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const post = await Post.create(req.body);

    res.status(201).json({
      status: 'success',
      data: { post }
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e
    });
  }
};

exports.updatePost = async (req, res, next) => {
  const {params, body} = req;
  try {
    const post = await Post.findByIdAndUpdate(params.id, {...body}, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {...post}
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e
    });
  }
};

exports.deletePost = async (req, res, next) => {
  const {params} = req;
  try {
    await Post.findByIdAndDelete(params.id);

    res.status(204).json({status: 'success'});
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e
    });
  }
};
