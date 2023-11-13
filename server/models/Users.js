//every mongodb project will probably have a model folder
//inside models package, create files that represent different collections that we have in our database
//eg. we have users collection in the database, the create Users.js in models

const mongoose = require("mongoose");

//create schema
const UserSchema = new mongoose.Schema({
  //create an object inside of here, defines all the fields and values that the schema should contain
  name: {
    //give certain information about this field
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

//create model
//this function takes two things: 1. the name of the model (is collection name); 2. the schema that represents that model
//will automatically create it inside of your database
const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel; //so that we have access to this model outside of this file and we can make changes to our table or collection throughout our application
