//index.js is the entry point of API
//use it to start API
//write all the API setup and database setup information

const express = require("express"); //importing the express libraries that we just installed
const app = express(); //represents all the express stuff that we get from the library
//setting up mongodb connection
const mongoose = require("mongoose"); //import mongoose from the mongoose library
const UserModel = require("./models/Users");

const cors = require("cors"); //allow us to connect this API with our react front end without giving us any errors

app.use(express.json()); //parse a json file to an object in express. eg.const user = req.body; parse body(json file) we get from frontend to user object
app.use(cors()); //should fix all the errors

//connect to our database
//the string in the brackets represents the connection to the cluster that we created
//vivianzhuopassword is instead of <password>, mernsimpleapplication is the database name
mongoose.connect(
  "mongodb+srv://vivianzhuo:vivianzhuopassword@cluster0.1jknr3r.mongodb.net/mernsimpleapplication?retryWrites=true&w=majority"
);

//write http requests inside of express, there is other ways of doing this using routes to separate it throughout your files
//create bridges in the backend, when requested in the frontend, makes a connection to our database, then sends back information
//this bridges are called API requests or API endpoints
app.get("/getUsers", (req, res) => {
  //"/getUsers": some sort of route
  //req: we can get information that is send from the front end
  //res: we can send information from the back end to the front end

  //find function to retrieve all the users
  UserModel.find({})
    //put empty object{}, it will basically return back all the documents or all the data inside of the collection
    //after it returns all the data
    //1. err: errors that occur; 2. result: the result from the request to the database
    .then((result) => {
      //if no error, return back to the front end the result that we just got back from our database
      res.json(result); //it's used for transforming result and parsing this into json and sending back json data to front end
    })
    .catch((err) => {
      res.json(err); //send back the error
    });
});

app.post("/createUser", async (req, res) => {
  //add async: because most of this operations are going to be asynchronous
  const user = req.body; //user: data we want to insert in our database; req.body: sending this from the frontend
  const newUser = new UserModel(user); //add the data to our model, so need a variable newUser, UserModel is created in ./models/Users.js
  await newUser.save(); // save the information, a mongoose function

  res.json(user);
});

//tell my API to start
//1. put the port number 3001, react will run on the port 3000
//2. callback function will just run when server starts running
app.listen(3001, () => {
  console.log("Running Vivian"); //use 'node index.js' command to test, ctrl C to kill the terminal
});
