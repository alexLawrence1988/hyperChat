var express = require('express');
var app = express();
var environment = 'local'
var http = require('http').Server(app);
var config = require('./configuration/config.' + environment + '.js');
var io = require('socket.io')(http);
var xterm = require('xterm');
var chat = require('./routes/chat.js')
var commandFile = require('./commandHelper.js')();
var path = require('path');


app.use(express.static(path.join(__dirname, 'public')));

app.get('/chat', function(req,res){
    res.sendFile(__dirname + '/views/index.html');
})

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg){
    switch (msg){
      case 'help':
      msg = commandFile.getHelpCommands();
      io.emit('chat message', JSON.stringify(msg));
      break;

      default:
      io.emit('chat message', msg);
      break;
    }
    
  });
});



http.listen(3000, function(){
  console.log('listening on *:3000');
});

