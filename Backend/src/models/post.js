const mongoose = require('mongoose');

const Post = mongoose.model('Post', {
    username: String,
    post_date: Date,
    category: String,
    tags: [{type: String}],
    title: String,
    description: String,
    project_url: String
});

module.exports = Post;