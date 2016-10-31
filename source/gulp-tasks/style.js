module.exports = function (options) {
  var autoprefixer = require('autoprefixer'),
    easysprite = require('postcss-easysprites'),
    mqpacker = require('css-mqpacker');
  
  return this.gulp.src(options.src)
    .pipe(this.sourcemaps.init())
    .pipe(this.plumber())
    .pipe(this.sass())
    .pipe(this.sass().on('error',  this.sass.logError))
    .pipe(this.csscomb())
    .pipe(this.postcss([
      autoprefixer({
        browsers: ['last 15 versions','ie 8']
      }),
      easysprite({
        imagePath: './source/img',
        spritePath: './source/img'
      }),
      mqpacker({
        sort: true
      })
    ]))
    .pipe(this.sourcemaps.write(''))
    .pipe(this.gulp.dest(options.dist));
};