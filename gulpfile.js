var gulp = require('gulp'),
  del = require('del'),
  task = require('gulp-lazy-task')('./source/gulp-tasks');

task('html', {
  src:'./source/html/_pages/*.pug',
  dist: './source/'
});

task('html(build)', {
  src:'./source/html/_pages/*.pug',
  dist: './source/'
});

task('useref', {
  src:'./source/*.html',
  dist: './dist/'
});

task('bower', {
  src:'./source/*.html',
  dist: './source/'
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

task('image', {
  src:'./source/img/*.*',
  dist: 'dist/img'
});

task('sync', {
  dist: 'dist/**/*.*'
});

task('deploy', {
  src: 'dist/**/*.*'
});

task('copy', {
  srcFonts: './source/fonts/**/*.*',
  distFonts:'dist/fonts/',
  srcFavicon:'./source/img/favicon/*.*',
  distFavicon:'dist/img/favicon/'
});


gulp.task('clean', function() {
  return del('dist');
});

gulp.task('build',gulp.series('clean', gulp.parallel('style(build)', 'js(build)', 'html(build)', 'image', 'copy')));


gulp.task('watch', function () {
  gulp.watch('source/html/**/*.pug', gulp.series('html','bower', 'useref'));
  gulp.watch('source/scripts/*.js', gulp.series('js'));
  gulp.watch('source/styles/**/*.scss', gulp.series('style'));
});



gulp.task('default', gulp.series( gulp.parallel('html', 'style', 'image', 'copy'), 'bower', 'useref', 'js', gulp.parallel('watch','sync')));