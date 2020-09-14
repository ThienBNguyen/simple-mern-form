require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8000;

const routes = require('./routes/api');
const mongodbKey = process.env.MONGODB_URI;
mongoose.connect(mongodbKey || 'mongodb://localhost/mern_simple', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('conneted', () => {
  console.log('mongoose is connected');
});

//http request logger
app.use(morgan('tiny'));
app.use('/api', routes);
app.listen(PORT, console.log(`server is starting as ${PORT}`));

// saving data to our mongo database
// const data = {
//   title: 'oanh',
//   body: 'she is learning to become a nail tech',
// };

//instance of the model
// const newBlogPost = new BlogPost(data);

// newBlogPost.save((error) => {
//   if (error) {
//     console.log('oops, something happened');
//   } else {
//     console.log('Data has been saved!!');
//   }
// });
