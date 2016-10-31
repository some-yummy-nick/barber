module.exports = function (options) {
  return this.gulp.src(options.src)
    .pipe(this.plumber())
      .pipe(this.concat('vendor.min.js'))
      .pipe(this.uglify())
      .pipe(this.gulp.dest(options.dist));
};