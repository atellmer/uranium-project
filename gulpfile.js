var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	nib = require('nib'),
	rename = require('gulp-rename'),
	connect = require('gulp-connect'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');


var path = {
	root: 'client/',
	stylus: function () {
		return this.root + 'stylesheets/stylus/'
	},
	css: function () {
		return this.root + 'stylesheets/css/'
	}
}

//connect
gulp.task('connect', function () {
	connect.server({
		root: 'client',
		port: 3000,
		livereload: true
	});
});

//js
gulp.task('scripts', function () {
	return gulp.src([
		path.root + 'app/**/*.module.js',
		path.root + 'app/**/*.config.js',
		path.root + 'app/**/*.controller.js'
	])
		.pipe(concat('bundle.js'))
		.pipe(uglify())
		.pipe(rename('bundle.min.js'))
		.pipe(gulp.dest('client/app/dist/'))
		.pipe(connect.reload());
});

//stylus
gulp.task('styl', function () {
	return gulp.src(path.stylus() + '*.styl')
		.pipe(concat('bundle.styl'))
		.pipe(stylus({
			use: [nib()],
			compress: true
		}))
		.pipe(rename('bundle.min.css'))
		.pipe(gulp.dest(path.css()))
		.pipe(connect.reload());
});

//html
gulp.task('html', function () {
	return gulp.src([
				path.root + 'index.html',
				path.root + 'app/views/*.html'
			])
		.pipe(connect.reload());
});

//watch
gulp.task('watch', function () {
	gulp.watch(path.root + 'app/**/*.*', ['scripts']);
	gulp.watch(path.stylus() + '*.styl', ['styl']);
	gulp.watch([path.root + 'index.html', path.root + 'app/views/*.html'], ['html']);

});

gulp.task('default', ['connect', 'scripts', 'styl', 'html', 'watch']);