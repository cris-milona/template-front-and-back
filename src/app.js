const express = require('express');
const ejs = require('ejs');
const path = require('path');
const routerOne = require('./routers/routerOne');
const routerTwo = require('./routers/routerTwo');

require('./db/mongoose');

const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicDirectoryPath));
app.use(routerOne);
app.use(routerTwo);

app.set('view engine', 'ejs');

module.exports = app;
