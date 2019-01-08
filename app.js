const express = require('express');
const app = express();

app.use(express.static('public'));

app.use(require('./routes/index'));
app.use(require('./routes/musicians'));
app.listen(3000, ()=> {
  console.log('Listening on port 3000');
});