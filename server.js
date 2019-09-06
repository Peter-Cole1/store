var express=require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT||3000;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/",function(req,res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/apparel",function(req,res){
    res.sendFile(path.join(__dirname, "shirts.html"));
});

app.get("/prints",function(req,res){
    res.sendFile(path.join(__dirname, "prints.html"));
});

app.get("/accessories",function(req,res){
    res.sendFile(path.join(__dirname, "accessories.html"));
});

app.get("/book",function(req,res){
    res.sendFile(path.join(__dirname, "book.html"));
});

app.get("/cart",function(req,res){
    res.sendFile(path.join(__dirname, "cart.html"));
});

app.get("/thx",function(req,res){
    res.sendFile(path.join(__dirname, "sold.html"));
});



app.listen(PORT,function(){
    console.log("App listening on PORT " + PORT);
});



