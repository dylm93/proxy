const express = require('express');
const morgan = require('morgan');
const path = require('path');
const request = require('request');
const app = express();
const port = process.env.PORT || 3003;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/proxy/public')));

app.use('/artists', function(req, res) {
  var url = 'http://localhost:3000/artists';
  req.pipe(request(url)).pipe(res);
  });

app.use('/api/songs', function(req, res) {
  var url = `http://localhost:3001/api/songs/${req.params.id}`;
  req.pipe(request(url)).pipe(res);
  });
  
app.use('/data', function(req, res) {
  var url = `http://localhost:3002/data`;
  req.pipe(request(url)).pipe(res);
  });
  


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
