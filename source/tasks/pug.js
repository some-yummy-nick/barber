module.exports = function (options) {
  return this.gulp.src(options.src)
    .pipe(this.pug({
      pretty: '  '
    }))
    .pipe(this.gulp.dest(options.dist));
};
