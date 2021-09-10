/**
Modify the values of an object.

@param transformer - Gets the value and key for each item and is expected to return the new value.

@example
```
import modifyValues from 'modify-values';

modifyValues({foo: 'UNICORN'}, (value, key) => value.toLowerCase());
//=> {foo: 'unicorn'}
```
*/
export default function modifyValues<KeyType extends PropertyKey, ValueType, ReturnValueType>(object: Record<KeyType, ValueType>, transformer: (value: ValueType, key: KeyType) => ReturnValueType): Record<KeyType, ReturnValueType>;
