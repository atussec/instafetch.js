'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('./_sass/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
  .pipe(minifyCss({compatibility: 'ie8'}))
  .pipe(rename('main.min.css'))
  .pipe(gulp.dest('./css'));
});

gulp.task('build', ['sass']);

gulp.task('watch', function() {
  gulp.watch('./_sass/**/*.scss', ['sass']);
});

gulp.task('default', ['build', 'watch']);
