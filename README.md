html-browserify
===============

[![Build Status](https://travis-ci.org/duckbox/html-browserify.png?branch=master)](https://travis-ci.org/duckbox/html-browserify)


Simple HTML transform for Browserify

## Install

	npm install html-browserify

## Usage with Gulp

```javascript

//...
var html = require('html-browserify');
//...

gulp.task('js', function() {
  gulp.src('js/app.js')
    .pipe(browserify({
      insertGlobals: true,
      transform: html
    }))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./public/js'));
});
```

