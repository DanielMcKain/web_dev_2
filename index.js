// Get Mustache
const mustache = require('mustache-express');
app.engine('mustache', mustache());
app.set('view engine', 'mustache');

