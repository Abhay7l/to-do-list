const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static("public"));
var items=[];
var count=[];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get("/", function(req, res) {
  // res.send(2+3);
  var day = new Date();
  var nday = day.getDay();
  var day = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long"
  };
  var today = new Date();
  res.render("list", {
    DayofWeek: today.toLocaleDateString("en-US", options),newListItems:items
  ,FirstNote:count});
});
app.post("/", function(req, res) {
  var item = req.body.task;
  items.push(item);
  count.push(items.length);
  // console.log(value);
  res.redirect("/");
});

app.listen(3000, function() {
  console.log("server started at port 3000")
});
