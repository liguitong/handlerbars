var src = 'src';
var dist = 'dist';
module.exports={
    watch:{
        html:src+'/**/*.{html,htm}',
    },
    sass:{
        src:src+'/scss/**/*.scss',
        destsrc:src+'/css',
        dest:dist+'/css',
    },
    less:{
        src:src+'/less/**/lgt.less',
        dest:dist+'/css',
        destsrc:src+'/css',
    },
    img:{
        src:src+'/img/**/*.jpg',
        dest:dist+'/img'
    }
};
