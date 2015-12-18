var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint');

gulp.task('minify-js', function() {
  return gulp.src('textural.js')
    .pipe(uglify({keepSpecialComments:"1"}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(''))
});

gulp.task('test', function () {
    return gulp.src([
            'textural.js'
        ])
        .pipe(jshint())
        .pipe(jshint.reporter('default', { verbose: true }))
        .pipe(jshint.reporter('fail'));
});

gulp.task('default', ['minify-js']);