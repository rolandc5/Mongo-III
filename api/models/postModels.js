const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: { type: String, required: true },
  content: { type: String, required: true },
  comments: [
    {
      text: { type: String },
      author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    }
  ]
});

module.exports = mongoose.model('Post', PostSchema);