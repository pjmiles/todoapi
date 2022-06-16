require("dotenv").config();
const express = require("express");
const cors = require('cors')
const db = require('./config/mongoose') //connection to database
const app = express();


// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())



//Home page
app.get('/', (req, res) =>{
  res.send('Welcome to my API')
})

// to get all todos
const Todos = require('./routes/task')
app.use('/todo', Todos)

// create a todo task
app.post('/todo', Todos)

//to delete a todo
app.delete('/todo', Todos)


// connection to server
app.listen(process.env.PORT, () =>
  console.log(`Server started on port: ${process.env.PORT}`)
);
