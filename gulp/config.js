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
        src:src+'/img/**/*.{jpg,ico}',
        dest:dist+'/img'
    },
    css:{
        src:src+'/css/**/*.css',
        dest:dist+'/css'
    }
};
