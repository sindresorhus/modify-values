# modify-values

> Modify the values of an object

## Install

```
$ npm install modify-values
```

## Usage

```js
import modifyValues from 'modify-values';

modifyValues({foo: 'UNICORN'}, (value, key) => value.toLowerCase());
//=> {foo: 'unicorn'}
```

## API

### modifyValues(object, transformer)

Modifies the values and returns a new object.

#### object

Type: `object`

#### transformer(value, key)

Type: `Function`

Gets the value and key for each item and is expected to return the new value.

## Related

See [`modify-keys`](https://github.com/sindresorhus/modify-keys) for modifying the keys of an object.

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-modify-values?utm_source=npm-modify-values&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
