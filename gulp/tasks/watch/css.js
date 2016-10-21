/**
 * Created by liguitong on 10/21/16.
 */
var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../../config').css;
gulp.task('copy:css',function () {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});

gulp.task('watch:css',function () {
    return watch(config.src,function () {
        gulp.start('copy:css');
    });
});
