var gulp = require('gulp'),
		stylus = require('gulp-stylus'),
		concatCss = require('gulp-concat-css'),
		minifyCSS = require('gulp-minify-css'),
		rename = require('gulp-rename'),
		livereload = require('gulp-livereload'),
		connect = require('gulp-connect');
		concat = require('gulp-concat');
		uglify = require('gulp-uglify');

//connect
gulp.task('connect', function() {
	connect.server({
		root: 'client',
		 port: 3000,
		livereload: true
		});
	});

//js
gulp.task('scripts', function() {
	return gulp.src(['client/app/**/*.module.js', 'client/app/**/*.controller.js'])
	.pipe(concat('bundle.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('client/app/dist/'))
	.pipe(connect.reload());
});

//html
gulp.task('html', function() {
	return gulp.src('client/*.html')
	.pipe(connect.reload());
});


//stylus
gulp.task('styl', function () {
   return gulp.src('client/stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('client/css/'))
    .pipe(connect.reload());
});


//css
gulp.task('css', function() {
	return gulp.src('client/css/*.css')
	.pipe(concatCss("bundle.css"))
	.pipe(minifyCSS())
	.pipe(rename('css/dist/bundle.min.css'))
	.pipe(gulp.dest('client/'))
	.pipe(connect.reload());
	});

//watch
gulp.task('watch', function() {
	gulp.watch('client/stylus/*.styl', ['styl']);
	gulp.watch('client/css/*.css', ['css']);
	gulp.watch('client/*.html', ['html']);
	gulp.watch('client/app/**/*.js', ['scripts']);
	});

gulp.task('default', ['connect', 'scripts', 'html', 'styl', 'css', 'watch']);