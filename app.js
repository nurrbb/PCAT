const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();

app.set("view engine","ejs");

const myLogger = (req, res, next) => {
  console.log('Middleware Log 1');
  next();
};

const myLogger2 = (req, res, next) => {
  console.log('Middleware Log 1');
  next();
};

app.use(express.static(`public`));
app.use(myLogger);
app.use(myLogger2);

app.get('/', (req, res) => {
  res.render('index')
});
app.get('/about', (req, res) => {
  res.render('about')
});
app.get('/add', (req, res) => {
  res.render('add')
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
