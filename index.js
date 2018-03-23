'use strict';
module.exports = (object, transformer) => {
	const ret = {};

	for (const [key, value] of Object.entries(object)) {
		ret[key] = transformer(value, key);
	}

	return ret;
};
