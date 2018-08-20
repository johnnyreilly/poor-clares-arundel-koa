/* eslint-disable no-var, strict, prefer-arrow-callback */
'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var eslint = require('gulp-eslint');
var tslint = require("gulp-tslint");
var yargs = require("yargs").argv;

var sass = require('./gulp/sass');
var webpack = require('./gulp/webpack');
var staticFiles = require('./gulp/staticFiles');
var tests = require('./gulp/tests');
var clean = require('./gulp/clean');
var inject = require('./gulp/inject');

var isDebug = yargs.mode === "Debug";

var eslintSrcs = ['./gulp/**/*.js'];
var tslintSrcs = ['./src/**/*.ts', './test/**/*.ts', '!**/*.d.ts'];

gulp.task('delete-wwwroot-contents', function (done) {
    done();
    // clean.run(done);
});

gulp.task('build-sass', ['delete-wwwroot-contents'], function(done) {
  sass.build().then(function() { done(); });
});

gulp.task('build-js', ['delete-wwwroot-contents'], function (done) {
    webpack.build().then(function () { done(); });
});

gulp.task('build-other', ['delete-wwwroot-contents'], function () {
    staticFiles.build();
});

gulp.task('run-tests', [], function (done) {
    tests.run(done);
});

gulp.task('build-release', ['build-sass', 'build-js', 'build-other', 'eslint', 'tslint'], function () {
    inject.build();
});

gulp.task('build', isDebug ? [] : ['build-release'], function () {
    if (isDebug) {
        gutil.log(gutil.colors.red("In debug mode so not building client side code; your gulp watch task should be running. Type 'npm run watch' at the command prompt in the project directory"));
    }
});

gulp.task('eslint', function () {
    return gulp.src(eslintSrcs)
      .pipe(eslint())
      .pipe(eslint.format());
});

gulp.task('tslint', function () {
    return gulp.src(tslintSrcs)
      .pipe(tslint())
      .pipe(tslint.report("verbose"))
});

gulp.task('watch', ['delete-wwwroot-contents'], function (done) {
    process.env.NODE_ENV = 'development';
    Promise.all([
      webpack.watch(),
      sass.watch()
    ]).then(function () {
        gutil.log('Now that initial assets (js and css) are generated injection starts...');
        inject.watch();
        done();
    }).catch(function (error) {
        gutil.log('Problem generating initial assets (js and css)', error);
    });

    gulp.watch(eslintSrcs, ['eslint']);
    gulp.watch(tslintSrcs, ['tslint']);
    staticFiles.watch();
    tests.watch();
});
