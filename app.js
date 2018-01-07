const express = require('express'); //to use a node Module
const path = require('path'); //another module 'path' which is a core node module
const app = express();

//server static files and set static path
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function(){
  console.log('Server started on port 3000');
});
