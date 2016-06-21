const gulp = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')

gulp.task('sass', function () {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('bundle.min.css'))
    .pipe(gulp.dest('www'))
})

gulp.task('sass:watch', ['sass'], function(){
  gulp.watch('app/scss/**/*.scss', ['sass'])
})


