import test from 'ava';
import m from '.';

test('main', t => {
	t.is(m({foo: 'UNICORN'}, x => x.toLowerCase()).foo, 'unicorn');
});
