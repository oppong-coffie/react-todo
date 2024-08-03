const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const route = require('./routes/route');

// Create Express app
const app = express();

// Middleware to log requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next(); // Call next to pass control to the next middleware
});

// Middlewares
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// Define routes
app.use('/', route);

// Connect to MongoDB and start server
mongoose.connect('mongodb://localhost:27017/todo')
  .then(() => {
    app.listen(5000, () => {
      console.log('Server is running on port 5000 and MongoDB is connected');
    });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });
