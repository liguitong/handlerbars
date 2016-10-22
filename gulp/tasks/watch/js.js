/**
 * Created by liguitong on 10/22/16.
 */
var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../../config').js;
gulp.task('copy:js',function () {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});

gulp.task('watch:js',function () {
    return watch(config.src,function () {
        gulp.start('copy:js');
    });
});
