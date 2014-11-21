'use strict';

var scriptEqual = require('./');
var test = require('tape');

test('scriptEqual()', function(t) {
  t.plan(8);

  t.strictEqual(
    scriptEqual(
      'function w() {};\n(function() {\r\nvar d =2;var arr={e:0, f:[\'\', {}]}})();',
      '(function() {\nvar w=1+  1*"1",a = {f: ["", {}], e: 0};})();       function w() {}'
    ),
    true,
    'should return boolean if the first script is equivalent to the second.'
  );

  t.strictEqual(
    scriptEqual(
      'a={};a[\'b\']=1;',
      'a={};a.b=1;',
      {compress: {properties: false}}
    ),
    false,
    'should support `compress` option.'
  );

  t.strictEqual(
    scriptEqual(
      '(function(a) {a=1})(this)',
      '(function(b) {b=1})(this)',
      {mangle: false}
    ),
    false,
    'should support `mangle` option.'
  );

  t.strictEqual(
    scriptEqual('', ' ', false),
    true,
    'should run completely even if the third argument is falsy.'
  );

  t.throws(
    scriptEqual.bind(null, [''], '', {}), /TypeError.*First/,
    'should throw a type error when the first argument is not a string.'
  );

  t.throws(
    scriptEqual.bind(null, '', 1), /TypeError.*Second/,
    'should throw a type error when the second argument is not a string.'
  );

  t.throws(
    scriptEqual.bind(null, ''), /TypeError.*Two arguments/,
    'should throw a type error when it takes only one argument.'
  );

  t.throws(
    scriptEqual.bind(null), /TypeError.*Two arguments/,
    'should throw a type error when it takes no arguments.'
  );
});
