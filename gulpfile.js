var gulp = require('gulp');
var compass = require('gulp-compass'),
	path = require('path');


gulp.task('compass', function() {
	return gulp.src('./sass/*.scss')
		.pipe(compass({
			css: 'css',
			sass: 'sass',
			image: 'img'
		}))
		.pipe(gulp.dest('css'));
});

gulp.task('watch',function(){
	gulp.watch('sass/**/*.scss', ['compass']);
});

gulp.task('default', function(){
	gulp.start('compass','watch');
});