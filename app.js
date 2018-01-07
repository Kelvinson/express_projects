const express = require('express'); //to use a node Module
const path = require('path'); //another module 'path' which is a core node module
const app = express();

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

app.listen(3000, function(){
  console.log('Server started on port 3000');
});
