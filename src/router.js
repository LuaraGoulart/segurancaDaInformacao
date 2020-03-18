const express = require('express');
const test = require('./test');

const route = express.Router();

route.get("/teste/:decript", test.teste);


module.exports = route;