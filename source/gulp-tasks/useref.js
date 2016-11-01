module.exports = function (options) {
  return this.gulp.src(options.src)
    .pipe(this.changed(options.src))
    .pipe(this.useref())
    .pipe(this.gulp.dest(options.dist));
};