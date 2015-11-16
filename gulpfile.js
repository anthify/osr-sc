var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	imagemin = require('gulp-imagemin'), //image optimiser
	pngquant = require('imagemin-pngquant'), //png optimiser to work with imagemin
	mozjpeg = require('imagemin-mozjpeg');