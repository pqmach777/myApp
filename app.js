const express = require('express');
const reload = require('reload');
const app = express();
var io = require('socket.io')();

app.set('port', process.env.PORT || 3000 );
app.set('view engine', 'ejs');
app.set('views', 'views');



app.use(express.static('public'));
app.use(require('./routes/index'));
app.use(require('./routes/musicians'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.use(require('./routes/chat'))

var server = app.listen(app.get('port'), () =>{
  console.log('Listening on port ' + app.get('port'));
});

io.attach(server);
io.on('connection',(socket)=> {
  socket.on('postMessage',(data) =>{
    io.emit('updateMessages', data);
  });
});

reload(app);