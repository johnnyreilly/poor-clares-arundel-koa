'use strict';

var del = require('del');
var gutil = require('gulp-util');

function run(done) {
    del([
      './wwwroot/**', '!./wwwroot'
    ], { force: true })
    .then(function (paths) {
        gutil.log('Deleted files/folders:\n', paths.join('\n'));
        done();
    })
    .catch(function (error) {
        gutil.log('Problem deleting:\n', error);
        done();
    });
}

module.exports = {
    run: function (done) { return run(done); }
};
