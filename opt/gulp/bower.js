const gulp = require('gulp')
const bower = require('gulp-bower')

gulp.task('bower', function(){
  bower()
})

gulp.task('bower:watch', ['bower'], function(){
  gulp.watch(['bower.json'], ['bower'])
})
