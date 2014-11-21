/*!
 * script-equal | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/script-equal
*/
'use strict';

var UglifyJS = require('uglify-js');
var xtend = require('xtend');

var msg = ' Arguments must be: (string, string[, options])';

module.exports = function scriptEqual(first, second, options) {
  if (arguments.length < 2) {
    throw new TypeError('Two arguments required.' + msg);
  }

  [first, second].forEach(function(arg, i) {
    if (typeof arg !== 'string') {
      throw new TypeError((i === 0 ? 'First' : 'Second') + ' argument is not a string.' + msg);
    }
  });

  options = xtend(options, {fromString: true});
  return UglifyJS.minify(first, options).code === UglifyJS.minify(second, options).code;
};
