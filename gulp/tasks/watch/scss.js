/**
 * Compile scss files to css
 * Created by liguitong on 10/16/16.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var config = require('../../config').sass;
gulp.task('sass',function () {
    return gulp.src(config.main)
        .pipe(sass())
        .pipe(gulp.dest(config.destsrc))
        .pipe(gulp.dest(config.dest));
});

gulp.task('watch:sass',function () {
    return watch(config.src,function () {
        gulp.start('sass');
    })
})
