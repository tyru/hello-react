var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function() {
  browserify('./src/app.jsx', { debug: true })
    .transform(babelify)
    .bundle()
    .on("error", function (err) {
      console.log("Error : " + err.message);
      console.log(err.stack);
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist'))
});
