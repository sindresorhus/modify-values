# modify-values [![Build Status](https://travis-ci.org/sindresorhus/modify-values.svg?branch=master)](https://travis-ci.org/sindresorhus/modify-values)

> Modify the values of an object


## Install

```
$ npm install modify-values
```


## Usage

```js
const modifyValues = require('modify-values');

modifyValues({foo: 'UNICORN'}, (value, key) => value.toLowerCase());
//=> {foo: 'unicorn'}
```


## API

### modifyValues(input, transformer)

Modifies the values and returns a new object.

#### input

Type: `Object`

#### transformer(value, key)

Type: `Function`

Gets the value and key for each item and is expected to return the new value.


## Related

See [`modify-keys`](https://github.com/sindresorhus/modify-keys) for modifying the keys of an object.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
