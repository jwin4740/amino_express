var aminoArray = require('../data/aminoacids.js');

exports.home = function (request, response) {
	response.render("home", {
		tagline : "Let's build a protein"
	});
};

var index;

// allows user to type in a number in the url (which is optional because question mark)
	// the user input is stored in the episodeNumber variable
exports.amino_acid = function (request, response) {
	var aminoAcid = request.params.amino_acid;
	var n = aminoArray.length;
for (var i = 0; i < n; i++){
	if (aminoAcid === aminoArray[i].name)
	{
		index = i;
	}
	else {
		console.log("missed");
	}
}
console.log(index);
	response.render("aminopages", {
		name : aminoArray[index].name,
		stick : aminoArray[index].ballStickImage,
		skeleton: aminoArray[index].skeletalImage
	});
};

// NOT FOUND (don't need an 'if statement' because requests execute functions sequentially)
exports.notFound = function (request, response) {
	response.send("<h1> 404 Page not found </h1");
};