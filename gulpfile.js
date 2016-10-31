const gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  plumber = require('gulp-plumber'),
  concat = require('gulp-concat');

gulp.task('vendor', function () {
  return gulp.src('source/lib/*.*')
    .pipe(plumber())
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'));
});