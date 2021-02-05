//jshint esversion: 6
const express = require ("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const _ = require("lodash");
const favicon = require('serve-favicon');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(favicon(__dirname + '/public/images/logo-custom.png'));

// app.get("/", function(req,res){
// //res.render("list", {title: "templete", success:''});
// });
// Connection URL
//mongoose.connect("mongodb+srv://miriam-learnmongo:5ecur1tylearnmongo@cluster0-dybg6.mongodb.net/todolistDB", {useUnifiedTopology: true, useNewUrlParser: true });
//mongoose.connect("mongodb://localhost:27017/kcblogDB", {useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connect("mongodb+srv://sparks-admin:5ecur1tymongodb@cluster0-xs6vq.mongodb.net/todolistDB", {useUnifiedTopology: true, useNewUrlParser: true });
const itemsSchema = {
name: String,
date:String
};

const Item = mongoose.model("item",itemsSchema);
const item1 = new Item({

    name:"welcome to your todolist"
  });
  const item2 = new Item({
    name:"Add more items"
  });
  const item3 = new Item({
    name:"delete item"
  });

const defaultItems =[item1];

const listSchema = {
 name: String,
 date:String,
 items: [itemsSchema]
};

const List = mongoose.model("List", listSchema);
app.get("/", function(req,res){

  Item.find({}, function(err, foundItems){

    if(foundItems.length === 0){
      Item.insertMany(defaultItems,function(err){
        if(err){
          console.log("error occured in insertion");
        }else{
          console.log("successfully");
        }
      });
res.redirect("/");
    }else{
res.render("list", {listTitle: "Today", newListItems:foundItems});
    }

  });

});


app.get("/:customListName", function(req, res){
 const customListName = _.capitalize(req.params.customListName);

List.findOne({name: customListName}, function(err,foundList){
 if(!err){
   if(!foundList){

   const list = new List({
     name: customListName,

     items: defaultItems


   });
   list.save();
   res.redirect("/" + customListName);
 }else{

//res.render( customListName, {listTitle: foundList.name, newListItems:foundList.items})
res.render("list", {listTitle: foundList.name, newListItems:foundList.items})
   }
 }
});

});



app.post("/", function(req,res){
 const itemName = req.body.newItem;
 const listName = req.body.list;
 var myDate = Date();;

const item = new Item({
 name:itemName,
 date:myDate
});
if (listName === "Today"){
 item.save();
 res.redirect("/");
}else{
 List.findOne({name:listName}, function(err,foundList){
foundList.items.push(item);
foundList.save();
res.redirect("/" + listName);
 });
}

});


app.post("/delete", function(req,res){
 const checkedItemId = req.body.checkbox;
   const listName = req.body.listName;

if ( listName === "Today"){
 Item.findByIdAndRemove(checkedItemId,function(err){

   if(!err){
     console.log("deleted successfull");
     res.redirect("/");
   }
 });
}else{
 List.findOneAndUpdate({name:listName}, {$pull: {items: {_id: checkedItemId}}}, function(err, foundList){
if (!err){
 res.redirect("/" + listName);
}
 });
}

});




app.get("/about", function(req,res){
 res.render("about");
})

let port = process.env.PORT;
if (port == null || port == ""){
 port = 3000;
}

app.listen(port, function(){
 console.log("server started running successfully");
});
