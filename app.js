//jshind esversion:6

// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// app.get("/", function (req, res) {
//   res.send(`lets freaking go dude!`);
// });

// app.listen(3000, function () {
//   console.log("Server is online on port 3000");
// });  these are basics for node.js

const express = require('express');
const bodyParser = require('body-parser');
const { redirect } = require('express/lib/response');

const app = express();
let items =['Daily  Post', '2 Photoshop Skills', '2 Illustrator Skills'];
let workItems = []
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static('public'))
app.get('/', function (req, res) {
  let today = new Date();
  let options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }
  let day = today.toLocaleDateString('en-US', options)
  res.render('list', {
    listTitle: day,
    newlistitems : items
  
  });
});




app.post ('/', function (req, res) {
 let item = req.body.newItem
 items.push(item)
 res.redirect('/')
})

//for work list
app.get('/work',function(req,res){
  console.log(req.body)
  res.render('list', {
    listTitle: "Work List",
    newlistitems : workItems,
  })
})
app.post('/work', function(req,res){
  let item = req.body.newItem;
  workItems.push(item)
  res.redirect('/work')
})
app.listen(3000, function () {
  console.log('Server is online on port 3000');
});