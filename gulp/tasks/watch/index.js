/**
 * Created by liguitong on 10/16/16.
 */

var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../../config').watch;
gulp.task('watch:index',function () {
    return watch(config.html,function(){
       gulp.start('copy:index.html');
    });
})
