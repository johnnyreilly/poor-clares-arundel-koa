/* eslint-disable no-var, strict */
'use strict';
var path = require('path');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  // Documentation: https://karma-runner.github.io/0.13/config/configuration-file.html
  config.set({
    browsers: [ 'PhantomJS' ],

    files: [
      // This ensures we have the es6 shims in place from babel and that angular and angular-mocks are loaded
      // and then loads all the tests
      'test/main.js'
    ],

    port: 9876,

    frameworks: [ 'jasmine' ],

    logLevel: config.LOG_INFO, //config.LOG_DEBUG

    preprocessors: {
      'test/main.js': [ 'webpack', 'sourcemap' ]
    },

    webpack: {
      devtool: 'inline-source-map',
      module: webpackConfig.module,
      plugins: [
        new webpack.DefinePlugin({
            __IN_DEBUG__: false,
            __VERSION__: JSON.stringify('tests')
        })
      ],
      resolve: webpackConfig.resolve
    },

    webpackMiddleware: {
      quiet: true,
      stats: {
        colors: true
      }
    },

    // reporter options
    mochaReporter: {
      colors: {
        success: 'bgGreen',
        info: 'cyan',
        warning: 'bgBlue',
        error: 'bgRed'
      }
    },

    junitReporter: {
      outputDir: 'reports/test', // results will be saved as $outputDir/$browserName.xml
      outputFile: undefined, // if included, results will be saved as $outputDir/$browserName/$outputFile
      suite: ''
    }
  });
};
