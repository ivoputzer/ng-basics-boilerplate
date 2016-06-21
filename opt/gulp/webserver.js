const gulp = require('gulp')
const webserver = require('gulp-webserver')

gulp.task('webserver', function(){
  gulp.src('www')
    .pipe(webserver({
    port: 8080,
    livereload: true,
    open: true,
    middleware: []
  }))
})
