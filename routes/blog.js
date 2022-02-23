var express = require('express');
var blogController = require('../controller/blogController')
var router = express.Router();

/* GET blog page. */
router.post('/insert', blogController.insertBlogs);
router.get('/blogs',blogController.getBlogs);

module.exports = router;
