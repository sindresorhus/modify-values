import test from 'ava';
import modifyValues from './index.js';

test('main', t => {
	t.is(modifyValues({foo: 'UNICORN'}, value => value.toLowerCase()).foo, 'unicorn');
});
