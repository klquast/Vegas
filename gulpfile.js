var gulp = require('gulp'),
    rimraf = require('rimraf');

var paths = {
    bower: "bower_components/",
    lib: "lib/"
};

gulp.task('clean', function(cb) {
    rimraf(paths.lib, cb);
});

gulp.task('copy', ['clean'], function(cb){
    var bower = {
        "bootstrap": "bootstrap/dist/**/*.{js,map,css,ttf,svg,woff,eot}",
        "jquery": "jquery/dist/*.{js,map}"
    }

    for(var destinationDir in bower) {
        gulp.src(paths.bower + bower[destinationDir])
            .pipe(gulp.dest(paths.lib + destinationDir));
    }
});

gulp.task('default', ['copy']);