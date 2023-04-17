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
import { expect, test } from "@jest/globals";
import { classNames, difference, intersection, remove, symmetricDifference } from "./utils";

describe("utils", () => {
	test("difference()", () => {
		expect(difference([1, 2, 3], [3, 2, 1])).toEqual([]);
		expect(difference([1, 2, 3], [1, 3])).toEqual([2]);
		expect(difference([1, 2, 3], [2, 3, 5])).toEqual([1]);
		expect(difference([1, 2, 3], [])).toEqual([1, 2, 3]);
		expect(difference([], [])).toEqual([]);
	});

	test("symmetricDifference()", () => {
		expect(symmetricDifference([1, 2, 3], [3, 2, 1])).toEqual([]);
		expect(symmetricDifference([1, 2, 3], [1, 3])).toEqual([2]);
		expect(symmetricDifference([1, 2, 3], [2, 3, 5])).toEqual([1, 5]);
		expect(symmetricDifference([], [])).toEqual([]);
		expect(symmetricDifference([], [3, 2, 1])).toEqual([3, 2, 1]);
	});

	test("intersection()", () => {
		expect(intersection([1, 2, 3], [3, 2, 1])).toEqual([1, 2, 3]);
		expect(intersection([1, 2, 3], [1, 3])).toEqual([1, 3]);
		expect(intersection([1, 2, 3], [2, 3, 5])).toEqual([2, 3]);
		expect(intersection([], [])).toEqual([]);
		expect(intersection([1, 2, 3], [4, 5, 6])).toEqual([]);
	});

	test("remove()", () => {
		expect(remove([1, 2, 3], (x) => x === 2)).toEqual([1, 3]);
		expect(remove([1, 3], (x) => x === 3)).toEqual([1]);
		expect(remove([1], (x) => x === 1)).toEqual([]);
		expect(remove([1], (x) => x === 10)).toEqual([1]);
		expect(remove([], (x) => x === 10)).toEqual([]);
	});

	test("classNames()", () => {
		expect(classNames()).toEqual("");
		expect(classNames("a", "b", "c")).toEqual("a b c");
		expect(classNames(undefined, null, "b", "c")).toEqual("b c");
	});
});
