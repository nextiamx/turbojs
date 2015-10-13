Sequelize = require 'sequelize'
socket = require 'socket.io'
express = require 'express'
app = express()

sequelize = new Sequelize 'turbojs','root',''

User = sequelize.define 'User',
	username : Sequelize.STRING,
	birthday : Sequelize.DATE

sequelize.sync().then ->
	User.create 
		username: 'jona',
		birthday: new Date 1968, 6, 20
	.then (user)->
		console.log user.get 
			plain:true

app.get '/', (req, res)->
	res.send 'Hello World!'

server = app.listen 3000, ()->
	host = server.address().address
	port = server.address().port
	console.log 'Hey there, i\'m running on ' . concat port 