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
import { describe, expect } from "@jest/globals";
import { useShowDifferencesOnly } from "@/hooks/useShowDifferencesOnly";
import { Model } from "@/src/modelTypes";
import Present = Model.Present;

describe("useShowDifferencesOnly", () => {
	const identical = {
		a: [{ present: Present.YES }, { present: Present.YES }],
	};
	const different = {
		b: [{ present: Present.YES }, { present: Present.NO }],
	};
	const mixed = { a: identical.a, b: different.b };

	test("show section and all features if showDifferencesOnly is false", () => {
		const [showSection, showFeatures] = useShowDifferencesOnly(
			false,
			identical
		);
		expect(showSection).toBeTruthy();
		expect(showFeatures.a).toBeTruthy();
	});

	test("hide section if showDifferencesOnly is true and features are identical", () => {
		const [showSection, showFeatures] = useShowDifferencesOnly(
			true,
			identical
		);
		expect(showSection).toBeFalsy();
		expect(showFeatures.a).toBeFalsy();
	});

	test("show section if showDifferencesOnly is true and features are different", () => {
		const [showSection, showFeatures] = useShowDifferencesOnly(
			true,
			different
		);
		expect(showSection).toBeTruthy();
		expect(showFeatures.b).toBeTruthy();
	});

	test("show section if showDifferencesOnly is true and features are mixed", () => {
		const [showSection, showFeatures] = useShowDifferencesOnly(true, mixed);
		expect(showSection).toBeTruthy();
		expect(showFeatures.a).toBeFalsy();
		expect(showFeatures.b).toBeTruthy();
	});

	test("show everything if there is only one value per feature", () => {
		const oneValue = {
			a: [{ present: Present.YES }],
			b: [{ present: Present.YES }],
		};
		const [showSection, showFeatures] = useShowDifferencesOnly(
			true,
			oneValue
		);
		expect(showSection).toBeTruthy();
		expect(showFeatures.a).toBeTruthy();
		expect(showFeatures.b).toBeTruthy();
	});
});
