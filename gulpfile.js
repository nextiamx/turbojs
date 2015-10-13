var gulp        = require('gulp');
var uglify      = require('gulp-uglify');
var browserify  = require('gulp-browserify');
var stylus      = require('gulp-stylus');
var coffee      = require('gulp-coffee');
var util        = require('gulp-util');

    gulp.task('coffee', function() {
      gulp.src('source/coffee/*.coffee')
        .pipe(coffee({bare: true}).on('error', util.log))
        .pipe(gulp.dest('./'))
    });
/*
    gulp.task('scripts', function(){
        gulp.src('source/compiled/*.js')
            .pipe(browserify({
                    insertGlobals : false,
                    debug : true
            }))
            //.pipe(uglify())
            .pipe(gulp.dest('./public/js'))
    })
*/
    gulp.task('stylus', function(){
        gulp.src('source/styl/*.styl')
            .pipe(stylus())
            .pipe(gulp.dest('./public/css'))
    })

    gulp.task('default', ['stylus','coffee'], function(){
       // gulp.watch('source/**/*.js', ['scripts']);
        gulp.watch('source/**/*.styl', ['stylus']);
        gulp.watch('source/**/*.coffee', ['coffee'])
    })

