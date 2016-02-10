"use strict";

var concat = require('gulp-concat');
var gulp = require("gulp");


var vendorLib = [
  "node_modules/angular/angular.min.js",
  "node_modules/angular-ui-router/release/angular-ui-router.min.js"
];

gulp.task('js', function() {
  return gulp.src(vendorLib, { base: 'node_modules/' })
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./public/dist'));
});


