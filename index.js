require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const cors = require('cors')



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())





app.listen(process.env.PORT, () =>
  console.log(`Server started on port: ${process.env.PORT}`)
);
