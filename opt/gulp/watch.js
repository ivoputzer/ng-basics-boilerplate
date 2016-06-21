const gulp = require('gulp')

gulp.task('watch', ['assets:watch', 'sass:watch', 'javascript:watch', 'webserver'])
