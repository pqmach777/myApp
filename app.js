const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));
app.use(require('./routes/index'));
app.use(require('./routes/musicians'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.listen(3000, ()=> {
  console.log('Listening on port 3000');
});