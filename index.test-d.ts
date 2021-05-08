import {expectType} from 'tsd';
import modifyValues from './index.js';

expectType<Record<'foo', string>>(modifyValues({foo: 'UNICORN'}, value => value.toLowerCase()));
