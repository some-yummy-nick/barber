var gulp = require('gulp'),
  task = require('gulp-lazy-task')('./source/tasks');

task('vendor', {
  src:['source/lib/*.*'],
  dist: 'dist/scripts'
});

task('pug', {
  src:['source/template/_pages/*.pug'],
  dist: 'dist/'
});

task('sync', {
  dist: 'dist/**/*.*'
});

gulp.task('watch', function () {
  gulp.watch('source/template/**/*.pug', gulp.series('pug'));
  gulp.watch('source/lib/*.js', gulp.series('vendor'));
});

gulp.task('default', gulp.series('vendor', 'pug', gulp.parallel('watch','sync')));