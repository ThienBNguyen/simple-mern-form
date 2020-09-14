const express = require('express');

const router = express.Router();

const BlogPost = require('../models/blogPost');

router.get('/', (req, res) => {
  //   const data = {
  //     usernane: 'Thien',
  //     age: 29,
  //   };
  BlogPost.find({})
    .then((data) => {
      console.log('data', data);
      res.json(data);
    })
    .catch((error) => {
      console.log('error');
    });
});

router.get('/name', (req, res) => {
  const data = {
    usernane: 'oanh',
    age: 24,
  };
  res.json(data);
});

module.exports = router;
