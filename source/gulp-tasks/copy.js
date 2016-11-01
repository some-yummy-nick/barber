module.exports = function (options) {
    this.gulp.src(options.srcFonts)
      .pipe(this.changed(options.distFonts))
      .pipe(this.gulp.dest(options.distFonts));
    return this.gulp.src(options.srcFavicon)
      .pipe(this.changed(options.distFavicon))
      .pipe(this.gulp.dest(options.distFavicon));
};
