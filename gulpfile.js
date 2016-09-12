"use strict";

var gulp = require('gulp'),
    concat = require('gulp-concat');


gulp.task("concatScripts", function() {
   return gulp.src([
      'js/modernizr.js',
      'js/jquery-1.11.2.min.js',
      'js/animsition/jquery.animsition.min.js',
      'js/sticky/jquery.sticky.js',
      'js/slick/slick.min.js',
      'js/main.js',
      'js/particles.js',
      'js/bio.js',
      'js/scroll.js',
      'instashow/jquery.instashow.min.js',
      'js/lightbox.js',
      'js/spotify.js' ])
    .pipe(concat("app.js"))
    .pipe(gulp.dest("js"))
});


gulp.task("default", ["hello"], function(){
    console.log('The default task!');
});
