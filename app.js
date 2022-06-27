const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-user', (req, res, next) => {
  res.send('<form action="/user" method="POST"><input type="text" name="title"><button type"submit">Send</button></input></form>')
})

app.post('/user', (req, res, next) => {
  console.log(req.body);
  res.redirect('/add-user')
});

app.use('/', (req, res, next) => {
  console.log('In /!');
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
