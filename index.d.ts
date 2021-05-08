/**
Modify the values of an object

@param transformer Gets the value and key for each item and is expected to return the new value.

@example
```
import modifyValues from 'modify-values';

modifyValues({foo: 'UNICORN'}, (value, key) => value.toLowerCase());
//=> {foo: 'unicorn'}
```
*/
declare function modifyValues<KeyType extends string | number | symbol, ValueType, ReturnValueType>(object: Record<KeyType, ValueType>, transformer: (key: KeyType, value: ValueType) => ReturnValueType): Record<KeyType, ReturnValueType>;

export default modifyValues;
