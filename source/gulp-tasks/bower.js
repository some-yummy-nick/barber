module.exports = function (options) {
  var wiredep = require('wiredep').stream;
  return this.gulp.src(options.src)
      .pipe(this.changed(options.src))
      .pipe(wiredep({
      ignorePath:/^(\.\.\/)*\.\./
    }))
    .pipe(this.gulp.dest(options.dist));
};