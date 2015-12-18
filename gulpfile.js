var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint'),
    nodeunit = require('gulp-nodeunit'),
    cover = require('gulp-coverage'),
    coveralls = require('gulp-coveralls');

gulp.task('minify-js', function() {
  return gulp.src('textural.js')
    .pipe(uglify({keepSpecialComments:"1"}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(''))
});

gulp.task('jshint', function () {
    return gulp.src([
            'textural.js'
        ])
        .pipe(jshint())
        .pipe(jshint.reporter('default', { verbose: true }))
        .pipe(jshint.reporter('fail'));
});

gulp.task('unit', function () {
    return gulp.src('tests/*.js')
        .pipe(cover.instrument({
            pattern: ['textural.js']
        }))
        .pipe(nodeunit({
            reporter: 'junit',
            reporterOptions: {
                output: 'test'
            }
        }))
        .pipe(cover.gather())
        .pipe(cover.format({ reporter: 'lcov' }))
        .pipe(coveralls());
});

gulp.task('test', ['jshint', 'unit']);

gulp.task('default', ['minify-js', 'test']);