const mongoose = require("mongoose");
const db = mongoose.connection;
// Connecting to database
mongoose.connect(
"mongodb://localhost:27017/",
{
	dbName: "deleting-updating-objects-in-database-and-distributing-views",
	useNewUrlParser: true,
	useUnifiedTopology: true,
},
(err) =>
	err ? console.log(err) : console.log(
	"Connected to deleting-updating objects-in data base and distributing-views database")
);
const express = require("express");
const app = express();
const cors = require("cors");
console.log("App listen at port 8000");
module.exports=db;