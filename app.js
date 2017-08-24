const express = require("express")
const app = express()
const session = require("express-session")
const mongooseSession = require("mongoose-session")
const mustache = require("mustache-express")
const bodyParser = require("body-parser")
const MongoClient = require("mongodb")
const mongoose = require("mongoose")
mongoose.Promise = require("bluebird")
app.engine('mustache', mustache())
app.set('views', './views')
app.set('view engine', 'mustache')
app.use( express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

var sess = {
  secret: "keyboard cat",
  cookie: {},
  saveUninitialized: true,
  resave: true
}
app.use(session(sess))

const url = "mongodb://127.0.0.1:27017/robots"
mongoose.connect(url)

const newRobot = require("./models/robots")

const robotUsers = require("./routes/users")
app.use(robotUsers)

app.listen(3000, function(){
  console.log("Express started on port 3000")
})
