export function randomKey() {
	return typeof crypto.randomUUID == "function"
		? crypto.randomUUID()
		: String(Math.random());
}
