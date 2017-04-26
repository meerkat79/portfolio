var gulp = require('gulp'),
// connect = require('gulp-connect'),
connect = require('gulp-connect'),
sass = require('gulp-sass');

gulp.task('connect', function() {
	connect.server({
		root: 'src',
		livereload: true
	});
});

gulp.task('reload', function () {
	gulp.src('./src/*.html')
	.pipe(connect.reload());
});

gulp.task('sass', function(){
  return gulp.src('./src/assets/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/assets/css'));
});

gulp.task('watch', function () {
	gulp.watch(['./src/*.html'], ['reload']);
	gulp.watch(['./src/js/*.js'], ['reload']);
	gulp.watch('./src/assets/sass/*.scss', ['sass', 'reload']);
	gulp.watch('./src/assets/sass/_*.scss', ['sass', 'reload']);
});

gulp.task('default', ['connect', 'watch', 'sass']);