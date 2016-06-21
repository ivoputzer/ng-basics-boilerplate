const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const annotate = require('gulp-ng-annotate')

gulp.task('javascript', function(){
  gulp.src(['app/index.js', 'app/controllers/**/*.js'])
    .pipe(concat('bundle.min.js'))
    .pipe(annotate({add: true, single_quotes: true}))
    .pipe(uglify({compress: {sequences: false, join_vars: false}}))
    .pipe(gulp.dest('www'))
})

gulp.task('javascript:watch', ['javascript'], function() {
  gulp.src(['app/index.js', 'app/controllers/**/*.js'], ['javascript'])
})
