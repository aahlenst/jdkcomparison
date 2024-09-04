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
import { remove } from "../../src/utils";
import { TechnologiesFeaturesSlice, TechnologiesSection } from "./technologiesSection";
import { Model } from "@/src/modelTypes";

describe("<TechnologiesSection/>", () => {
	let data: TechnologiesFeaturesSlice[] = [];

	beforeEach(() => {
		data = [1, 2].map((i) => {
			return {
				id: `no-jdk-${i}`,
				jfx: { present: Model.Present.NO },
				jfr: { present: Model.Present.NO },
				jaws: { present: Model.Present.NO },
			};
		});
	});

	test("displays all features", () => {
		render(<TechnologiesSection productData={data} showDifferencesOnly={false} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Technologies");
		expect(screen.getAllByRole("row")).toHaveLength(3);
		expect(
			screen.getByRole("row", { name: "JavaFX Show explanation no no" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("row", { name: "Flight Recorder Show explanation no no" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("row", { name: "Java Web Start Show explanation no no" }),
		).toBeInTheDocument();
	});

	test("displays all features of a single product despite differences only on", () => {
		data = remove(data, (item) => item.id === "no-jdk-2");

		render(<TechnologiesSection productData={data} showDifferencesOnly={false} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Technologies");
		expect(screen.getAllByRole("row")).toHaveLength(3);
		expect(screen.getByRole("row", { name: "JavaFX Show explanation no" })).toBeInTheDocument();
		expect(
			screen.getByRole("row", { name: "Flight Recorder Show explanation no" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("row", { name: "Java Web Start Show explanation no" }),
		).toBeInTheDocument();
	});

	test("disappears if all features are identical and differences only is on", () => {
		render(<TechnologiesSection productData={data} showDifferencesOnly={true} />);

		expect(screen.queryByRole("heading")).not.toBeInTheDocument();
		expect(screen.queryByRole("row")).not.toBeInTheDocument();
	});

	test("displays JavaFX if features are different and differences only is on", () => {
		data[0].jfx.present = Model.Present.PARTIALLY;

		render(<TechnologiesSection productData={data} showDifferencesOnly={true} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Technologies");
		expect(screen.getAllByRole("row")).toHaveLength(1);
		expect(
			screen.getByRole("row", { name: "JavaFX Show explanation partially no" }),
		).toBeInTheDocument();
	});

	test("displays Flight Recorder if features are different and differences only is on", () => {
		data[0].jfr.present = Model.Present.YES;

		render(<TechnologiesSection productData={data} showDifferencesOnly={true} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Technologies");
		expect(screen.getAllByRole("row")).toHaveLength(1);
		expect(
			screen.getByRole("row", { name: "Flight Recorder Show explanation yes no" }),
		).toBeInTheDocument();
	});

	test("displays Java Web Start if features are different and differences only is on", () => {
		data[0].jaws.present = Model.Present.YES;

		render(<TechnologiesSection productData={data} showDifferencesOnly={true} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Technologies");
		expect(screen.getAllByRole("row")).toHaveLength(1);
		expect(
			screen.getByRole("row", { name: "Java Web Start Show explanation yes no" }),
		).toBeInTheDocument();
	});
});
