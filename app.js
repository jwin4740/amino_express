// require express module
var express = require('express');
var path = require('path');
// new instance of express
var app = express();

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.use(express.static('public')); //needed to render static files
app.use(express.static(path.join(__dirname, 'public')));
var routes = require('./routes/routeIndex.js');
var port = 3000;
//Routes

//home

app.get('/', routes.home);

// allows user to type in a number in the url (which is optional because question mark)
	// the user input is stored in the episodeNumber variable
app.get('/amino_acids/:amino_acid?', routes.amino_acid);
// NOT FOUND (don't need an 'if statement' because requests execute functions sequentially)
app.get('*', routes.notFound);

app.listen(port, function () {
	console.log("Server is listening on http://localhost:%s", port);
});