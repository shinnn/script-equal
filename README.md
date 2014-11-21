# script-equal 

[![Build Status](https://travis-ci.org/shinnn/script-equal.svg?branch=master)](https://travis-ci.org/shinnn/script-equal)
[![Build status](https://ci.appveyor.com/api/projects/status/ia3h5bcsy84vgfpc?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/script-equal)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/script-equal.svg)](https://coveralls.io/r/shinnn/script-equal)
[![Dependency Status](https://david-dm.org/shinnn/script-equal.svg)](https://david-dm.org/shinnn/script-equal)
[![devDependency Status](https://david-dm.org/shinnn/script-equal/dev-status.svg)](https://david-dm.org/shinnn/script-equal#info=devDependencies)

Check if one JavaScript code is equivalent to another code, using [UglifyJS]

```javascript
var scriptEqual = require('script-equal');

scriptEqual(
  'window.foo = {a: 0, b: 1};',
  'window["foo"]={\nb: 1,\rna: 0\n};'
); //=> true

scriptEqual(
  'var foo = 12',
  'var foo = 1 + 1 * 14 - 3;;;;;;;;;;;;;;;;;;;'
); //=> true
```

## Installation

[![NPM version](https://badge.fury.io/js/script-equal.svg)](https://www.npmjs.org/package/script-equal)

[Use npm.](https://www.npmjs.org/doc/cli/npm-install.html)

```
npm install script-equal
```

## API

```javascript
var scriptEqual = require('script-equal');
```

### scriptEqual(*script0*, *script1* [, *options*])

*script0*:`String` (JavaScript code)  
*script1*:`String` (JavaScript code)  
*options*: `Object` ([UglifyJS][options] options)  
Return: `Boolean`

It compresses two JavaScript string with [UglifyJS]. If the results are the same string, it returns `true`. Otherwise it returns `false`.

You can use all [UglifyJS][options] options.

```javascript
var scriptEqual = require('script-equal');

var foo = 'a = {}; a.b = 0;';
var bar = 'a = {}; a[\'b\'] = 0;';

scriptEqual(foo, bar); //=> true

scriptEqual(foo, bar, {
  compress: {properties: false}
}); //=> false
```

It throws an error when it fails to parse strings.

```javascript
scriptEqual('a = 1', '1 = a'); // Error
```

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).

[UglifyJS]: https://github.com/mishoo/UglifyJS2
[options]: https://github.com/mishoo/UglifyJS2#api-reference
