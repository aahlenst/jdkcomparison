/*
 * Copyright 2023 the original author or authors.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

export function difference<T>(a: T[], b: T[]): T[] {
	return a.filter((x) => !b.includes(x));
}

export function symmetricDifference<T>(a: T[], b: T[]): T[] {
	return a
		.filter((x) => !b.includes(x))
		.concat(b.filter((x) => !a.includes(x)));
}

export function intersection<T>(a: T[], b: T[]): T[] {
	return a.filter((x) => b.includes(x));
}

export function remove<T>(
	a: T[],
	predicate: (item: T) => boolean = (item) => item === item
): T[] {
	const index = a.findIndex(predicate);
	return [...a.slice(0, index), ...a.slice(index + 1)];
}

export function classNames(...classes: (string | undefined | null)[]) {
	// Wondering about filter(Boolean)? See https://mikebifulco.com/posts/javascript-filter-boolean.
	return classes.filter(Boolean).join(" ");
}
