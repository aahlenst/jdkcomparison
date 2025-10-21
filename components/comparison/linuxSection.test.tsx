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
import { beforeEach, describe, expect, test } from "@jest/globals";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/jest-globals";
import { render, screen } from "@testing-library/react";
import { LinuxFeaturesSlice, LinuxSection } from "@/components/comparison/linuxSection";
import { Model } from "@/src/modelTypes";
import Present = Model.Present;
import { remove } from "@/src/utils";

describe("<LinuxSection/>", () => {
	const features: [string, string | null, (s: LinuxFeaturesSlice) => Model.FeaturePresence][] = [
		["x86, 64-bit", null, (s) => s.linuxx64],
		["x86, 64-bit, musl", "Show explanation", (s) => s.linuxx64Musl],
		["x86, 32-bit", null, (s) => s.linuxx32],
		["ARM, 64-bit", null, (s) => s.linuxAArch64],
		["ARM, 64-bit, musl", "Show explanation", (s) => s.linuxAArch64Musl],
		["ARM, 32-bit", null, (s) => s.linuxAArch32],
		["PPC, 64-bit", null, (s) => s.linuxPPC64],
		["RISC-V, 64-bit", null, (s) => s.linuxRISCV64],
		["S390, 64-bit", null, (s) => s.linuxs390x],
		["APK Packages", "Show explanation", (s) => s.linuxAPK],
		["Deb Packages", "Show explanation", (s) => s.linuxDeb],
		["RPM Packages", "Show explanation", (s) => s.linuxRPM],
		["Container Images", null, (s) => s.linuxContainerImages],
	];

	let data: LinuxFeaturesSlice[] = [];

	beforeEach(() => {
		data = [1, 2].map((i) => {
			return {
				id: `no-jdk-${i}`,
				linuxx64: { present: Model.Present.NO },
				linuxx64Musl: { present: Model.Present.NO },
				linuxx32: { present: Model.Present.NO },
				linuxAArch64: { present: Model.Present.NO },
				linuxAArch64Musl: { present: Model.Present.NO },
				linuxAArch32: { present: Model.Present.NO },
				linuxPPC64: { present: Model.Present.NO },
				linuxRISCV64: { present: Model.Present.NO },
				linuxs390x: { present: Model.Present.NO },
				linuxAPK: { present: Model.Present.NO },
				linuxDeb: { present: Model.Present.NO },
				linuxRPM: { present: Model.Present.NO },
				linuxContainerImages: { present: Model.Present.NO },
			};
		});
	});

	test("displays all features", () => {
		render(<LinuxSection productData={data} showDifferencesOnly={false} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Platforms: Linux");
		expect(screen.getAllByRole("row")).toHaveLength(features.length);

		features.forEach(([label, tooltip]) => {
			const name = tooltip ? `${label} ${tooltip} no no` : `${label} no no`;
			expect(screen.getByRole("row", { name: name })).toBeInTheDocument();
		});
	});

	test("displays all features of a single product despite differences only on", () => {
		data = remove(data, (item) => item.id === "no-jdk-2");

		render(<LinuxSection productData={data} showDifferencesOnly={false} />);

		features.forEach(([label, tooltip]) => {
			const name = tooltip ? `${label} ${tooltip} no` : `${label} no`;
			expect(screen.getByRole("row", { name: name })).toBeInTheDocument();
		});
	});

	test("disappears if all features are identical and differences only is on", () => {
		render(<LinuxSection productData={data} showDifferencesOnly={true} />);

		expect(screen.queryByRole("heading")).not.toBeInTheDocument();
		expect(screen.queryByRole("row")).not.toBeInTheDocument();
	});

	features.forEach(([label, tooltip, supplier]) => {
		test(`displays ${label} if features are different and differences only is on`, () => {
			supplier(data[0]).present = Present.YES;

			render(<LinuxSection productData={data} showDifferencesOnly={true} />);

			expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Platforms: Linux");
			expect(screen.getAllByRole("row")).toHaveLength(1);
			const name = tooltip ? `${label} ${tooltip} yes no` : `${label} yes no`;
			expect(screen.getByRole("row", { name: name })).toBeInTheDocument();
		});
	});
});
