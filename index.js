/*!
 * script-equal | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/script-equal
*/
'use strict';

var UglifyJS = require('uglify-js');
var xtend = require('xtend');

module.exports = function scriptEqual(first, second, options) {
  [first, second].forEach(function(arg, i) {
    if (typeof arg !== 'string') {
      throw new TypeError(
        i === 0 ? 'First' : 'Second',
        ' argument is not a string. Arguments must be: (string, string[, options])'
      );
    }
  });

  options = xtend(options, {fromString: true});
  return UglifyJS.minify(first, options).code === UglifyJS.minify(second, options).code;
};
