const express = require("express")
const app = express()
const router = express.Router()
const mustache = require("mustache-express")
const MongoClient = require("mongodb")
const mongoose = require("mongoose")
mongoose.Promise = require("bluebird")
const users = require("../models/robots")
const url = "mongodb://127.0.0.1:27017/robots"
console.log(mongoose);

// To push data to Mongo Database:

// MongoClient.connect(url, function(err, db) {
//   if (err) {
//     throw err;
//   } else {
//     console.log('Successfully connected to the database');
//   }
//   for (var i = 0; i < data.users.length; i++) {
//     const user = data.users[i];
//     db.collection("users").updateOne(
//       {id: user.id},
//       user,
//       {upsert: true}
//     )
//   }
// })

router.get("/", function(req, res) {
    mongoose.connect(url,function(err, db) {
    console.log("Connected");
    const title = "ChipedIn: LinkedIn for Robots"
    users.find()
    .then(function(users){
      res.render("index", {
        title: title,
        users: users
      })
    })
  })
})

// router.get("/users/:id", function (req, res) {
//     MongoClient.connect(url,function(err, db) {
//     db.collection("users").findOne({id:parseInt((req.params.id))}).then(function(user){
//       res.render("profile", {
//         user:user
//       })
//     })
//   })
// })

router.get("/register", function (req, res) {
  res.render("register")
})

router.post("/newRobot", function (req, res) {
  res.redirect("/")
})

module.exports = router
