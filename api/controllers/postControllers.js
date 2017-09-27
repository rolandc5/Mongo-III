const mongoose = require('mongoose');
const Post = mongoose.model('Post');

const newPosts = (req, res) => {
  const { author, title, content } = req.body;
  console.log(req.body);
  const newPost = new Post({ author, title, content });
  newPost
    .save((err, post) => {s
      if (err) return res.json({ err: err.message });
      return res.json(post);
    })
}

const getPosts = (req, res) => {
 Post.find()
 .exec()
 .then((posts) => res.json(posts))
 .catch(err => res.json({ err: err.message }));
}

const getPost = (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  Post.findById(id)
  .exec()
  .then((post) => res.json(post))
  .catch(err => res.json({ err: err.message }));
}

const addComment = (req, res) => {
  const { text, author } = req.body
  const { id } = req.params;
  console.log(req.params);
  Post.findById(id)
  .exec()
  .then((post) => post.push({text, author}))
  .catch(err => res.json({ err: err.message }));
  
}

module.exports = {
  newPosts,
  getPosts,
  getPost,
  addComment
}
