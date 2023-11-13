# MERN-Simple-Application

## This is a tutorial showing how to setup a simple application with MERN stack for beginners.

### **Setup MongoDB**

- Create a project
  - Add name
  - Add member
- Build a database
  - Cloud Provider: anyone is OK
  - Region: nearby you
  - Cluster Tier: free one, M0 Sandbox
  - Cluster Name: put a name that make sense to you
- Connect to MongoDB Compass and Application
  - MongoDB Compass
    - Click connnect
      - Add your current IP Address
      - username, password
    - Create database user
    - Choose a connection method
      - connect using mongoDB compass
    - Copy **Connection String** which can be used on the mongoDB compass
      - copy it to mongoDB compass
      - replace the `<password>` to your real password
  - Application
    - Click connect again
    - Connect your application
    - Copy Connection String into the brackets of `mongoose.connect("")`--this code represents the connection to the cluster we created
      - replace the `<password>` to your real password
      - add database name before `?` in the string

### **Create App**

Creating a folder and opening VS Code, creating two packages in the folder

1. server

   - navigate to server directory

     - run `npm init -y` to create a package.json
     - run `npm install express mongoose cors nodemon` to communicate to mongoDB in express or node.js
       - _mongoose: allow us to communicate with our database in a very easy manner_
       - _cors: a dependency to make a connection between react app and back end_
     - create **index.js** in server folder

       - \*All the API requests that I make will exist inside of this file
       - In index.js

       ```javascript
       const express = require("express");
       const app = express();
       const mongoose = require("mongoose");
       const cors = require("cors"); //allow us to connect this API with our React front end

       mongoose.connect("");

       app.get();
       app.post();

       app.listen(3001, () => {
         //3001 is a port
       });
       ```

     - create folder named **models**
       - _every mongoDB project will probably have a models folder_
       - inside the folder: create files that represent different collections that we have in our database
         - eg. users collection -> Users.js
         - in Users.js: create **UserSchema** and **UserModel**

1. client

   - open a new tab of termanal
     - one tab for running server (backend)
     - one tab for running react server (frontend)
   - change directory to client
     - run: `npx create-react-app`, this is the command that creates a react boilerplate application
     - run: `npm install axios`, it is a library allows you to make API requests very simply
     - run: `npm start`
   - delete some files in src like: Apptest.js, index.css, logo.svg, setupTests.js
   - come to index.js to delete some disabled import because we delete some files before
   - come to App.js to delete contents inside `<div></div>` and disabled import
   - in App.js

     ```javascript
     import {useState, useEffect} from "react";
     import Axios from "axios";


     function App() {
        //create state
        const [listOfUsers, setListOfUsers] = useState([]);

        //create states for each of inputs
        //useEffect()
        //const createUser

         return (
             //page content
         )
     }
     ```

### **Test**

Use **Thunder Client** extension to test

- GET
  - New Request
  - GET: http://localhost:3001/getUsers
    - _this is the link to our API, where our API will be running in our computer_
    - `/getUsers` is a route
  - SEND
    - returns back the data from our database
- POST

  - POST: http://localhost:3001/createUser
  - BODY: Json Content

    ```json
    {
      "name": "Vivian",
      "age": 18,
      "username": "vivian18"
    }
    ```

  - SEND
    - Go to mongoDB Compass to check
