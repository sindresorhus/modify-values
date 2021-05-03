export default function modifyValues(object, transformer) {
	return Object.fromEntries(
		Object.entries(object).map(([key, value]) => [key, transformer(value, key)])
	);
}
