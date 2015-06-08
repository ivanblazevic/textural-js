var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('minify-js', function() {
  return gulp.src('textural.js')
    .pipe(uglify({keepSpecialComments:"1"}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(''))
});

gulp.task('default', ['minify-js']);