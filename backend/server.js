const express = require('express');
//const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express(); // create express server
const port = process.env.PORT || 5000; // port

app.use(cors()); // cors middleware
//app.use(bodyParser.json()); // body parser middleware
app.use(express.json()); // express middleware

const uri = process.env.ATLAS_URI; // database uri
//mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }); // connect to database
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection; // connection variable
connection.once('open', () => 
{
    console.log("MongoDB database connection established successfully");
})

const excercisesRouter = require('./routes/excercise'); // excercises router
const usersRouter = require('./routes/users'); // users router

app.use('/excercise', excercisesRouter); // use excercises router
app.use('/users', usersRouter); // use users router

app.listen(port, () => 
{
    console.log(`Server is running on port: ${port}`);
});

