const gulp = require('gulp')

gulp.task('assets', function(){
  gulp.src('app/*.html')
    .pipe(gulp.dest('www'))
})

gulp.task('assets:watch', ['assets'], function () {
  gulp.watch('app/*.html', ['assets'])
})
