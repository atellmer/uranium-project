var gulp = require('gulp'),
		stylus = require('gulp-stylus'),
		concatCss = require('gulp-concat-css'),
		minifyCSS = require('gulp-minify-css'),
		rename = require('gulp-rename'),
		livereload = require('gulp-livereload'),
		connect = require('gulp-connect');

//connect
gulp.task('connect', function() {
	connect.server({
		root: 'app',
		 port: 3000,
		livereload: true
		});
	});

//js
gulp.task('js', function() {
	gulp.src('app/js/*')
	.pipe(connect.reload());
});


//html
gulp.task('html', function() {
	gulp.src('app/*.html')
	.pipe(connect.reload());
});


//stylus
gulp.task('styl', function () {
   gulp.src('app/stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('app/css/'))
    .pipe(connect.reload());
});


//css
gulp.task('css', function() {
	return gulp.src('app/css/*.css')
	.pipe(concatCss("bundle.css"))
	.pipe(minifyCSS())
	.pipe(rename('css/production/bundle.min.css'))
	.pipe(gulp.dest('app/'))
	.pipe(connect.reload());
	});

//watch
gulp.task('watch', function() {
	gulp.watch('app/stylus/*.styl', ['styl']);
	gulp.watch('app/css/*.css', ['css']);
	gulp.watch('app/*.html', ['html']);
	gulp.watch('app/js/*', ['js']);
	});

gulp.task('default', ['connect', 'js', 'html', 'styl', 'css', 'watch']);