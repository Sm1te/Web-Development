const express = require("express");
const app = express();

app.get("/", function(request, response){
  response.send("hello");
});

app.get("/steam", function(req, res){
  res.send("add me with Smite");
})
app.get("/about". function(req, res){
  res.send("This is Yijian Li, student form Electrical Engineering");
})
app.listen(3000, function(){
  console.log("Server started on the port 3000");
});//respresents localhost:3000
