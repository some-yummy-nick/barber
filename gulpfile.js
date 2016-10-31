var gulp = require('gulp'),
  del = require('del'),
  task = require('gulp-lazy-task')('./source/gulp-tasks');

task('vendor', {
  src:'source/lib/*.*',
  dist: 'dist/scripts'
});

task('html', {
  src:'source/html/_pages/*.pug',
  dist: 'dist/'
});

task('html(build)', {
  src:'source/html/_pages/*.pug',
  dist: 'dist/'
});

task('js', {
  src:'./source/scripts/script.js',
  dist: 'dist/scripts/'
});

task('js(build)', {
  src:'./source/scripts/script.js',
  dist: 'dist/scripts/'
});

task('style', {
  src:'./source/styles/style.scss',
  dist: 'dist/styles/'
});

task('style(build)', {
  src:'./source/styles/style.scss',
  dist: 'dist/styles/'
});

task('sync', {
  dist: 'dist/**/*.*'
});

gulp.task('clean', function() {
  return del('dist');
});

gulp.task('build',gulp.series('clean', gulp.parallel('style(build)', 'js(build)', 'html(build)')));


gulp.task('watch', function () {
  gulp.watch('source/template/**/*.pug', gulp.series('html'));
  gulp.watch('source/lib/*.js', gulp.series('vendor'));
  gulp.watch('source/scripts/*.js', gulp.series('js'));
  gulp.watch('source/styles/**/*.scss', gulp.series('style'));
});



gulp.task('default', gulp.series( gulp.parallel('html', 'style'), 'vendor', 'js', gulp.parallel('watch','sync')));