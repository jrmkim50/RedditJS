const Post = require('../models/post');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    Post.find({})
    .then(posts => {
        res.render("posts/index", { posts });
    })
    .catch(err => {
        console.log(err.message);
    });
})



router.get('/new', function(req, res, next) {
    res.render('posts/posts-new');
});

router.post("/new", (req, res, next) => {
    const post = new Post(req.body);
    console.log(req.body);
    post.save((err, post) => {
        console.log(err);
        return res.redirect("/")
    })
});
  
module.exports = router;