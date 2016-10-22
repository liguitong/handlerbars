/**
 * Created by liguitong on 10/16/16.
 */

var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../../config').html;
var plugins = require('gulp-load-plugins')();
var pkg = require('../../../package.json');
gulp.task('copy:html',function () {
    return gulp.src(config.src)
        .pipe(plugins.replace(/{{JQUERY_VERSION}}/g, pkg.devDependencies.jquery))
        .pipe(gulp.dest(config.dest));
});
gulp.task('watch:html',function () {
    return watch(config.src,function(){
       gulp.start('copy:html');
    });
});
