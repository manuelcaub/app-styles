var gulp = require('gulp');
var sass = require('gulp-sass');

var input = './styles/main.scss';
var output = './public';

gulp.task('sass', function () {
  return gulp
    .src(input)
    .pipe(sass())
    .pipe(gulp.dest(output));
});