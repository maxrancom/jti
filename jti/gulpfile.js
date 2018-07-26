var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    changed = require('gulp-changed');


var SCSS_SRC ='./src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css/';


gulp.task('sass',function(){
    return gulp.src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(changed(SCSS_SRC))
    .pipe(gulp.dest(SCSS_DEST));
});

gulp.task('watch',function(){
    gulp.watch(SCSS_SRC,['sass']);
});

gulp.task('default',['watch']);
