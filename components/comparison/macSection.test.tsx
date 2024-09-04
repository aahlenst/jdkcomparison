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
import { describe, expect, test } from "@jest/globals";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/jest-globals";
import { render, screen } from "@testing-library/react";
import { MacFeaturesSlice, MacSection } from "@/components/comparison/macSection";
import { Model } from "@/src/modelTypes";
import Present = Model.Present;
import { remove } from "../../src/utils";

describe("<MacSection/>", () => {
	let data: MacFeaturesSlice[] = [];

	beforeEach(() => {
		data = [1, 2].map((i) => {
			return {
				id: `no-jdk-${i}`,
				macx64: { present: Model.Present.NO },
				macAArch64: { present: Model.Present.NO },
				macInstallers: { present: Model.Present.NO },
			};
		});
	});

	test("displays all features", () => {
		render(<MacSection productData={data} showDifferencesOnly={false} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Platforms: macOS");
		expect(screen.getAllByRole("row")).toHaveLength(3);
		expect(screen.getByRole("row", { name: "x86, 64-bit no no" })).toBeInTheDocument();
		expect(screen.getByRole("row", { name: "ARM, 64-bit no no" })).toBeInTheDocument();
		expect(screen.getByRole("row", { name: "Installers no no" })).toBeInTheDocument();
	});

	test("displays all features of a single product despite differences only on", () => {
		data = remove(data, (item) => item.id === "no-jdk-2");

		render(<MacSection productData={data} showDifferencesOnly={false} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Platforms: macOS");
		expect(screen.getAllByRole("row")).toHaveLength(3);
		expect(screen.getByRole("row", { name: "x86, 64-bit no" })).toBeInTheDocument();
		expect(screen.getByRole("row", { name: "ARM, 64-bit no" })).toBeInTheDocument();
		expect(screen.getByRole("row", { name: "Installers no" })).toBeInTheDocument();
	});

	test("disappears if all features are identical and differences only is on", () => {
		render(<MacSection productData={data} showDifferencesOnly={true} />);

		expect(screen.queryByRole("heading")).not.toBeInTheDocument();
		expect(screen.queryByRole("row")).not.toBeInTheDocument();
	});

	test("displays x86, 64-bit if features are different and differences only is on", () => {
		data[0].macx64.present = Present.YES;

		render(<MacSection productData={data} showDifferencesOnly={true} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Platforms: macOS");
		expect(screen.getAllByRole("row")).toHaveLength(1);
		expect(screen.getByRole("row", { name: "x86, 64-bit yes no" })).toBeInTheDocument();
	});

	test("displays ARM, 64-bit if features are different and differences only is on", () => {
		data[0].macAArch64.present = Present.YES;

		render(<MacSection productData={data} showDifferencesOnly={true} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Platforms: macOS");
		expect(screen.getAllByRole("row")).toHaveLength(1);
		expect(screen.getByRole("row", { name: "ARM, 64-bit yes no" })).toBeInTheDocument();
	});

	test("displays Installers if features are different and differences only is on", () => {
		data[0].macInstallers.present = Present.PARTIALLY;

		render(<MacSection productData={data} showDifferencesOnly={true} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Platforms: macOS");
		expect(screen.getAllByRole("row")).toHaveLength(1);
		expect(screen.getByRole("row", { name: "Installers partially no" })).toBeInTheDocument();
	});
});
