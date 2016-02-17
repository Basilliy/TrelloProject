'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
// var addsrc = require('gulp-add-src');
var cssnano = require("gulp-cssnano")
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');

var vendorLibJs = [
  'node_modules/angular/angular.min.js',
  'node_modules/angular-ui-router/release/angular-ui-router.min.js',
  'node_modules/angular-resource/angular-resource.min.js'
];

gulp.task('js', function() {
  return gulp.src(['./public/scripts/**/*.js', '!./public/scripts/**/*.test.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest('./public/dist'));
});

gulp.task("css", function() {
  return gulp.src('./public/scripts/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(cssnano())
    .pipe(concat('style.css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./public/dist"))
    .pipe(livereload());
});

gulp.task('vendor-js', function() {
  return gulp.src(vendorLibJs)
    .pipe(concat('vendor.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./public/dist'));
});

gulp.task("watch", function() {
  livereload.listen();
  gulp.watch('./public/scripts/**/*.css', ['css']);
  gulp.watch('./public/scripts/**/*.js', ['js']);
});

gulp.task("default", ["watch"]);



