/**
 * Compile scss files to css
 * Created by liguitong on 10/16/16.
 */
var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var config = require('../../config').less;
gulp.task('less',function () {
    return gulp.src(config.src)
        .pipe(less())
        .pipe(gulp.dest(config.destsrc))
        .pipe(gulp.dest(config.dest));
});

gulp.task('watch:less',function () {
    return watch(config.src,function () {
        gulp.start('less');
    })
})
