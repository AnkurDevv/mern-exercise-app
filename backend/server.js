const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// for every model(user Schema) you create a route add that route here  
const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

// telling the browser which ROUTE to use depending upon URL 
app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);


app.listen(port, () => {
  console.log(`Server is running at port:${port}`);
});