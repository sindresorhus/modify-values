'use strict';
var test = require('ava');
var modifyValues = require('./');

test(function (t) {
	t.assert(modifyValues({foo: 'UNICORN'}, function (val) {
		return val.toLowerCase();
	}).foo === 'unicorn');
	t.end();
});
