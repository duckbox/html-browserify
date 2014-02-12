html-browserify
===============

.. image:: https://travis-ci.org/duckbox/html-browserify.png?branch=master
        :target: https://travis-ci.org/duckbox/html-browserify

Simple HTML transform for Browserify

##Install

	npm install html-browserify

##Usuage with Gulp

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

