var Sequelize, User, app, express, sequelize, server, socket;

Sequelize = require('sequelize');

socket = require('socket.io');

express = require('express');

app = express();

sequelize = new Sequelize('turbojs', 'root', '');

User = sequelize.define('User', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

sequelize.sync().then(function() {
  return User.create({
    username: 'jona',
    birthday: new Date(1968, 6, 20)
  }).then(function(user) {
    return console.log(user.get({
      plain: true
    }));
  });
});

app.get('/', function(req, res) {
  return res.send('Hello World!');
});

server = app.listen(3000, function() {
  var host, port;
  host = server.address().address;
  port = server.address().port;
  return console.log('Hey there, i\'m running on '.concat(port));
});
