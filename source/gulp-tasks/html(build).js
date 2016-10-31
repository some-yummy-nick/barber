module.exports = function (options) {
  return this.gulp.src(options.src)
    .pipe(this.pug())
    .pipe(this.minifyHtml({collapseWhitespace: true}))
    .pipe(this.gulp.dest(options.dist));
};
