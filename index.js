require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();


// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Home page
app.get("/", (req, res) => {
  res.send("Welcome to PJMiles API");
});


const Todos = require("./routes/task");

// to get all todos
app.use("/todo", Todos);

// create a todo task
app.post("/todo", Todos);

//to delete a todo
app.delete("/todo", Todos);

//to update a todo
app.put("/todo", Todos);


// connection to database
const database = () =>{
  const db = require("./config/mongoose")
  return db
}


// to start port and database
const start = async () => {
  try {
    await database(process.env.dbURI);
    app.listen(
      process.env.PORT,
      console.log(`Server now started on port: ${process.env.PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

