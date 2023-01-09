const express = require('express');
const bodyParser = require('body-parser');

const quotes = require('./quotes.json');

const app = express();
app.use(bodyParser.json());

app.get('/random', (req, res) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  res.send(quote);
});

app.get('/search', (req, res) => {
  const author = req.query.author;
  const results = quotes.filter(quote => quote.author.toLowerCase().includes(author.toLowerCase()));
  res.send(results);
});

module.exports = app;
