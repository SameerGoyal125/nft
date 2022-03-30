//jshint esversion:6
const express= require("express");
const { reset } = require("nodemon");
const app = express();
app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html")
});
app.get("/faqs", function(req,res){
    res.sendFile(__dirname+"/faqs.html")
});
app.get("/about", function(req,res){
    res.send(__dirname+"/")
    res.redirect("/#about")

});
app.get("/roadmap", function(req,res){
    res.sendFile(__dirname+"/roadmap.html")

});
app.use(express.static('public'));
app.use(express.static('images'));
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
