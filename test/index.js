var fs = require('fs'),
	assert = require('chai').assert,
	lib = require('../index');	


var exportedSimpleHTML = __dirname + "/template-simple.js";
var exportedNoWhitespaceHTML = __dirname + "/template-without-whitespace.js";
var exportedWithWhitespaceHTML = __dirname + "/template-with-whitespace.js";

module.exports = {

	'Transform' : {
		'HTML' : {
			'Should return stringified HTML' : function(done){
				
				fs.createReadStream(__dirname + '/test.html')
				.pipe(lib(__dirname + '/test.html'))
				.pipe(fs.createWriteStream(exportedSimpleHTML))
				.on("close", function () {
				  var template = require(exportedSimpleHTML);
				  assert.equal(template, '<h1>Hai!</h1>');
				  done();
				});

			},
			'Should return stringified HTML, with whitespace removed by default' : function(done){
				
				fs.createReadStream(__dirname + '/test-with-whitespace.html')
				.pipe(lib(__dirname + '/test-with-whitespace.html'))
				.pipe(fs.createWriteStream(exportedNoWhitespaceHTML))
				.on("close", function () {
				  var template = require(exportedNoWhitespaceHTML);
				  assert.equal(template, '<h1>Hai!</h1><p>No more whitespace.</p>');
				  done();
				});

			},
			'Should return stringified HTML, with whitespace retained when `options.htmlclean` is set to `false`' : function(done){
				
				fs.createReadStream(__dirname + '/test-with-whitespace.html')
				.pipe(lib(__dirname + '/test-with-whitespace.html', {
					htmlclean: false
				}))
				.pipe(fs.createWriteStream(exportedWithWhitespaceHTML))
				.on("close", function () {
				  var template = require(exportedWithWhitespaceHTML);
				  assert.equal(template, '<h1>Hai!</h1>\n\n\t<p>No more whitespace. </p>\n');
				  done();
				});

			}
		}
	}



}