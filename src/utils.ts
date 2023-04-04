export function difference<T>(a: T[], b: T[]): T[] {
	return a.filter(x => !b.includes(x));
}

export function symmetricDifference<T>(a: T[], b: T[]): T[] {
	return a.filter(x => !b.includes(x))
		.concat(b.filter(x => !a.includes(x)));
}

export function intersection<T>(a: T[], b: T[]): T[] {
	return a.filter(x => b.includes(x));
}

export function remove<T>(a: T[], predicate: (item: T) => boolean = (item) => item === item): T[] {
	const index = a.findIndex(predicate);
	return [...a.slice(0, index), ...a.slice(index + 1)];
}

export function classNames(...classes: (string | undefined | null)[]) {
	// Wondering about filter(Boolean)? See https://mikebifulco.com/posts/javascript-filter-boolean.
	return classes.filter(Boolean).join(" ");
}
