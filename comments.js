// create a web server
// 1. install express 
// 2. require express
// 3. create an express app
// 4. create a get route for comments
// 5. create a post route for comments
// 6. start the server

// 1. install express
// $ npm install express

// 2. require express
const express = require('express');

// 3. create an express app
const app = express();

// 4. create a get route for comments
app.get('/comments', (req, res) => {
    res.send('GET request to the comments page');
});

// 5. create a post route for comments
app.post('/comments', (req, res) => {
    res.send('POST request to the comments page');
});

// 6. start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

