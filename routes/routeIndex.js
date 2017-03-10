var aminoArray = require('../data/aminoacids.js');
console.log(aminoArray[0]);
exports.home = function (request, response) {
	response.render("home", {
		tagline : "Let's build a protein"
	});
};


// allows user to type in a number in the url (which is optional because question mark)
	// the user input is stored in the episodeNumber variable
exports.amino_acid = function (request, response) {
	var aminoAcid = request.params.amino_acid;
	response.render("aminopages", {
		output : aminoAcid
	});
};

// NOT FOUND (don't need an 'if statement' because requests execute functions sequentially)
exports.notFound = function (request, response) {
	response.send("<h1> 404 Page not found </h1");
};