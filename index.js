var through = require('through');
var htmlclean = require('htmlclean');

module.exports = function(file, options) {

	options = options || {};
	options.htmlclean = typeof options.htmlclean !== 'undefined'? options.htmlclean : true;
	
	var buffer = '';

	if (!/\.(tpl|html)/.test(file)) {
		
		return through();
		
	} else {
		
		return through(function(chunk) {

			return buffer += chunk.toString();

		}, function() {
			
			var jst = buffer.toString();
				
			if (options.htmlclean) {
				//options.htmlclean is truthy
				
				if (typeof options.htmlclean === 'object') {
					//options.htmlclean is an options object for the htmlclean module
					jst = htmlclean(jst, options.htmlclean);
				} else {
					//otherwise, clean using default options
					jst = htmlclean(jst);
				}
			}

			var compiled = 'module.exports = ';
			compiled += JSON.stringify(jst);
			compiled += ';\n';
			
			this.queue(compiled);
			return this.queue(null);

		});

	}
	
}