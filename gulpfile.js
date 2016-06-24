var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserify = require('browserify');
var through2 = require('through2');

gulp.task('build', function() {
  return gulp.src('./src/**/*.js')
      // http://qiita.com/ques0942/items/ad9428661e385fddb257
      .pipe(through2.obj(function(file, encode, callback) {
          browserify(file.path)
          .bundle(function(err, res){
              file.contents = res;
              callback(null, file)
          });
      }))
      .pipe($.uglify())
      .pipe($.sourcemaps.init({loadMaps: true}))
      .pipe($.sourcemaps.write('map'))  // Write to './dist/map'
      .pipe(gulp.dest('./dist/'));
});
