const express = require('express'); //to use a node Module
const path = require('path'); //another module 'path' which is a core node module
const bodyParser = require('body-parser'); //use the 'body-parser' module
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//server static files and set static path
app.use(express.static(path.join(__dirname, 'public')));

//server json file, REST API
app.get('/users', (req, res) => {
    let users = [
      {
        first_name: "John",
        last_name: "Doe",
        age: 34,
        gender: "male"
      },
      {
        first_name: "Tom",
        last_name: "Jackson",
        age: 23,
        gender: "male"
      },
      {
        first_name: "Tracy",
        last_name:"Smith",
        age: 38,
        gender: "female"
      }
    ];
    res.json(users);
});

//server pdf files using res.download API
app.get('/download', (req, res) => {
  res.download(path.join(__dirname,'/downloads/TTCG.pdf'));
});

//express redirect page
app.get('/about', (req, res) => {
  res.redirect('/about.html');
});

//post the form request defined in the index.html
app.post('/subscribe', (req, res) => {
  //rember to use 'body-parse' module before use the json data;
  let name = req.body.name;
  let email = req.body.email;

  console.log(name + ' has subscribe with ' + email);
});

app.listen(3000, function(){
  console.log('Server started on port 3000');
});
