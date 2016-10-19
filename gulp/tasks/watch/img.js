/**
 * Created by liguitong on 10/17/16.
 */
var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../../config').img;
gulp.task('copy:img',function () {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});

gulp.task('watch:img',function () {
    return watch(config.src,function () {
        gulp.start('copy:img');
    });
});
