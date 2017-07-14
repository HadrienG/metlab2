/*jshint esversion: 6 */
const choo = require('choo');
const app = choo({ href:false });

var html = require('choo/html');

// create a route
app.route('/', require('./sidebar'));

app.mount('body');
