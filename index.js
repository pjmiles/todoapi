require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const Todos = require("./routes/task");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Home page
app.get("/", (req, res) => {
  res.send("Welcome to PJMiles todo API");
});

// todo api
app.use("/todos", Todos);

// connection to database
mongoose.connect(
  process.env.dbURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if(err) console.log(err)
   else console.log("Connected to Database");
  }
);

app.listen(
  process.env.PORT,
  console.log(`Server now started on port: ${process.env.PORT}`)
);

// for unforseen error
app.use((err, req, res, next) => {
  return res.status(err.status).send({ message: err.message });
});
