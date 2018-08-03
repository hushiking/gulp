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
            prefix: '@@', // 识别什么前缀
            basepath: 'src/include', // 指定包含块的目录
            indent: true, // 是否保留缩进
            context: { // 携带的数据
                name: 'test',
                footer: true
            }
        }))
        .pipe(gulp.dest('dist/'))
})

gulp.task('default', ['fileinclude'])