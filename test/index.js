var fs = require('fs'),
	assert = require('chai').assert,
	lib = require('../index');	


var exportedHTML = __dirname + "/template.js";
	exportedHBS = __dirname + "/template-hbs.js";

module.exports = {

	beforeEach : function(){
	},

	'Transform' : {
		'HTML' : {
			'Should return stringified HTML' : function(done){
				
				fs.createReadStream(__dirname + '/test.html')
				.pipe(lib(__dirname + '/test.html'))
				.pipe(fs.createWriteStream(exportedHTML))
				.on("close", function () {
				  var template = require(exportedHTML);
				  assert.equal(template, '<h1>Hai!</h1>');
				  done();
				});

			}
		}
	}



}