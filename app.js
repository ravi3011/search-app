const express = require('express');
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv/config');

app.use(bodyParser.json());


//import routes
const postRoute = require('./routes/posts');

app.use('/api',postRoute);

// get method
app.get('/',(req,res)=> {
    res.send('We are on home');
});


//connect to dp

mongoose.connect(
    process.env.DB_CONNECTION,
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => 
    {
            console.log("connected!!!");
    });


app.listen(3000);