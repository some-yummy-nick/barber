module.exports = function (options) {
  var browserify = require("browserify"),
    babelify = require('babelify'),
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream');

  return browserify()
    .require(options.src, { entry: true,
      extensions: ['.js'],
      debug: true
    })
    .transform(babelify, {presets: ["es2015"]})
    .bundle()
    .pipe(source('script.js'))
    .pipe(this.gulp.dest(options.dist));
};


