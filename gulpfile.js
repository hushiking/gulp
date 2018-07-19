var fileinclude = require('gulp-file-include'),
    gulp = require('gulp'),
    del = require('del')

// 注意异步处理
gulp.task('del', function() {
    return del('dist')
})

gulp.task('fileinclude', ['del'], function() {
    return gulp.src('src/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: 'src/include',
            indent: true,
            context: {
                name: 'test',
                footer: true
            }
        }))
        .pipe(gulp.dest('dist/'))
})

gulp.task('default', ['fileinclude'])