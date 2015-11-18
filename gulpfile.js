var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	imagemin = require('gulp-imagemin'), //image optimiser
	pngquant = require('imagemin-pngquant'), //png optimiser to work with imagemin
	mozjpeg = require('imagemin-mozjpeg'),
	handlebars = require('gulp-compile-handlebars'),
	rename = require('gulp-rename'),
	browserSync = require('browser-sync').create(),
	templateData = require('./config.js');


//Image compression using imagemin but their jpg/jpeg compression isn't very good so we're using mozjpeg in the next task
gulp.task('img-shrink', ['jpg-shrink'], function () {
    return gulp.src(['./src/imgs/*.png','./src/imgs/*.svg'])
        .pipe(imagemin({
            progressive: false,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/imgs'));
});


//This is mozjpeg, simply change the quality to whatever you like but it is defaulted here to 75
gulp.task('jpg-shrink', function() {
	return gulp.src(['./src/imgs/*.jpeg', './src/imgs/*.jpg'])
        .pipe(mozjpeg({quality: '75'})())
        .pipe(gulp.dest('./dist/imgs'));
});


//This task compiles the sass from styles.scss and outputs it as styles.css
gulp.task('compile-sass', function() {
	return gulp.src('./src/scss/styles.scss')
	.pipe(sass())
	.pipe(gulp.dest('./dist/css'));
});


//This task prefixes all of the css once compile-sass task has completed
gulp.task('autoprefix', ['compile-sass'], function() {
	return gulp.src('./dist/css/styles.css')
	.pipe(autoprefixer())
	.pipe(gulp.dest('./dist/css/'));
});


//Handlebars
gulp.task('html-compile', function() { 
    return gulp.src('./index.handlebars')
        .pipe(handlebars(templateData))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./dist'));
});


//watch
gulp.task('browser-sync', function() {
	browserSync.init({
			server: {
				baseDir: "./dist"
			}
		});
	gulp.watch(['./dist/css/**/*','./index.html']).on("change", browserSync.reload);
});

gulp.task('watcher', function() {
	gulp.watch(['./src/scss/**.scss'], ['autoprefix']);
	gulp.watch(['./index.handlebars'], ['html-compile']);
});

gulp.task('default', ['browser-sync', 'watcher']);

gulp.task('deploy', ['img-shrink','html-compile']);
