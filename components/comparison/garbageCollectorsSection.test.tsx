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
import { remove } from "@/src/utils";
import {
	GarbageCollectorsFeaturesSlice,
	GarbageCollectorsSection,
} from "./garbageCollectorsSection";
import { Model } from "@/src/modelTypes";

describe("<GarbageCollectorsSection/>", () => {
	let data: GarbageCollectorsFeaturesSlice[] = [];

	beforeEach(() => {
		data = [1, 2].map((i) => {
			return {
				id: `no-jdk-${i}`,
				cms: { present: Model.Present.NO },
				epsilon: { present: Model.Present.NO },
				g1: { present: Model.Present.NO },
				parallel: { present: Model.Present.NO },
				serial: { present: Model.Present.NO },
				shenandoah: { present: Model.Present.NO },
				z: { present: Model.Present.NO },
				customGCs: { text: "none" },
			};
		});
	});

	test("displays all features", () => {
		render(<GarbageCollectorsSection productData={data} showDifferencesOnly={false} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Garbage Collectors");
		expect(screen.getAllByRole("row")).toHaveLength(8);
		expect(screen.getByRole("row", { name: "CMS Show explanation no no" })).toBeInTheDocument();
		expect(
			screen.getByRole("row", { name: "Epsilon Show explanation no no" }),
		).toBeInTheDocument();
		expect(screen.getByRole("row", { name: "G1 Show explanation no no" })).toBeInTheDocument();
		expect(
			screen.getByRole("row", { name: "Parallel Show explanation no no" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("row", { name: "Serial Show explanation no no" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("row", { name: "Shenandoah Show explanation no no" }),
		).toBeInTheDocument();
		expect(screen.getByRole("row", { name: "Z Show explanation no no" })).toBeInTheDocument();
		expect(screen.getByRole("row", { name: "Custom GCs none none" })).toBeInTheDocument();
	});

	test("displays all features of a single product despite differences only on", () => {
		data = remove(data, (item) => item.id === "no-jdk-2");

		render(<GarbageCollectorsSection productData={data} showDifferencesOnly={false} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Garbage Collectors");
		expect(screen.getAllByRole("row")).toHaveLength(8);
		expect(screen.getByRole("row", { name: "CMS Show explanation no" })).toBeInTheDocument();
		expect(
			screen.getByRole("row", { name: "Epsilon Show explanation no" }),
		).toBeInTheDocument();
		expect(screen.getByRole("row", { name: "G1 Show explanation no" })).toBeInTheDocument();
		expect(
			screen.getByRole("row", { name: "Parallel Show explanation no" }),
		).toBeInTheDocument();
		expect(screen.getByRole("row", { name: "Serial Show explanation no" })).toBeInTheDocument();
		expect(
			screen.getByRole("row", { name: "Shenandoah Show explanation no" }),
		).toBeInTheDocument();
		expect(screen.getByRole("row", { name: "Z Show explanation no" })).toBeInTheDocument();
		expect(screen.getByRole("row", { name: "Custom GCs none" })).toBeInTheDocument();
	});

	test("disappears if all features are identical and differences only is on", () => {
		render(<GarbageCollectorsSection productData={data} showDifferencesOnly={true} />);

		expect(screen.queryByRole("heading")).not.toBeInTheDocument();
		expect(screen.queryByRole("row")).not.toBeInTheDocument();
	});

	[
		["CMS", "cms"],
		["Epsilon", "epsilon"],
		["G1", "g1"],
		["Parallel", "parallel"],
		["Serial", "serial"],
		["Shenandoah", "shenandoah"],
		["Z", "z"],
	].forEach(([name, id]) => {
		test(`displays ${name} if features are different and differences only is on`, () => {
			const propertyName = id as keyof Omit<(typeof data)[0], "id" | "customGCs">;
			data[0][propertyName].present = Model.Present.YES;

			render(<GarbageCollectorsSection productData={data} showDifferencesOnly={true} />);

			expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
				"Garbage Collectors",
			);
			expect(screen.getAllByRole("row")).toHaveLength(1);
			expect(
				screen.getByRole("row", { name: `${name} Show explanation yes no` }),
			).toBeInTheDocument();
		});
	});

	test("displays Custom GCs if features are different and differences only is on", () => {
		data[0].customGCs.text = "FairyGC";

		render(<GarbageCollectorsSection productData={data} showDifferencesOnly={true} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Garbage Collectors");
		expect(screen.getAllByRole("row")).toHaveLength(1);
		expect(screen.getByRole("row", { name: "Custom GCs FairyGC none" })).toBeInTheDocument();
	});
});
