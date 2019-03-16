//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");
const app = express();


let items = [];
let workItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get('/', function(req, res) {
  let day = date.getDate();

  res.render('list', {
    listTitle: day,
    newListItems: items
  });
});

app.post("/", function(req, res){
  // console.log(req.body);
  let item = req.body.newItem;
  if(req.body.workList === 'Work'){
    workItems.push(item);
    res.redirect('/work');
  }else{
    items.push(item);
    res.redirect("/");
  }

});

app.get('/work', function(req, res){
  res.render('list', {
    listTitle: 'Work List',
    newListItems: workItems
  });
});

app.get('/about', function(req, res){
    res.render('about');
});

// app.post('/work', function(req, res){
//   let item = req.body.newItem;
//   workItems.push(item);
//   res.redirect('/work');
// });


app.listen(3006, function(){
  console.log("working on the port 3006 now!");
});




// if (currentD === 0 || currentD === 6) {
//   day = "weekend";
// } else {
//   day = "weekday";
// }


// switch (currentD) {
//   case 0:
//     day = 'Sunday';
//     break;
//   case 1:
//     day = 'Monday';
//     break;
//   case 2:
//     day = 'Tuesday';
//     break;
//   case 3:
//     day = 'Wednsday';
//     break;
//   case 4:
//     day = 'Thursday';
//     break;
//   case 5:
//     day = 'Friday';
//     break;
//   case 6:
//     day = 'Saturday';
//     break;
//   default:
//     console.log("error");
// }
