var through = require('through');

module.exports = function(file) {

	var buffer = '';

	if (!/\.tpl|\.html/.test(file)) {
		return through(function(){

			this.emit('end');

		});
	} else {
		return through(function(chunk) {

			return buffer += chunk.toString();

		}, function() {
			
			var jst = buffer.toString(),
				compiled = 'module.exports = "' + jst + '";\n';
			
			this.queue(compiled);
			return this.queue(null);

		});

	}
	
}