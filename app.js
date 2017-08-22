const express = require("express")
const app = express()
const mustache = require("mustache-express")
const MongoClient = require("mongodb")
app.engine('mustache', mustache())
app.set('views', './views')
app.set('view engine', 'mustache')
app.use( express.static('public'))

const robotUsers = require("./routes/users")
app.use(robotUsers)

app.listen(3000, function(){
  console.log("Express started on port 3000")
})
