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
import { remove } from "../../src/utils";
import { LicensingFeaturesSlice, LicensingSection } from "./licensingSection";
import { Model } from "@/src/modelTypes";

describe("<LicensingSection/>", () => {
	let data: LicensingFeaturesSlice[] = [];

	beforeEach(() => {
		data = [1, 2].map((i) => {
			return {
				id: `jdk-${i}`,
				license: { text: "Proprietary" },
				freeInDevelopment: { present: Model.Present.NO },
				freeInProduction: { present: Model.Present.NO },
			};
		});
	});

	test("displays all features", () => {
		render(<LicensingSection productData={data} showDifferencesOnly={false} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Licensing");
		expect(screen.getAllByRole("row")).toHaveLength(3);
		expect(
			screen.getByRole("row", { name: "License Show explanation Proprietary Proprietary" }),
		).toBeInTheDocument();
		expect(screen.getByRole("row", { name: "Free in Development no no" })).toBeInTheDocument();
		expect(screen.getByRole("row", { name: "Free in Production no no" })).toBeInTheDocument();
	});

	test("displays all features of a single product despite differences only on", () => {
		data = remove(data, (item) => item.id === "jdk-2");

		render(<LicensingSection productData={data} showDifferencesOnly={false} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Licensing");
		expect(screen.getAllByRole("row")).toHaveLength(3);
		expect(
			screen.getByRole("row", { name: "License Show explanation Proprietary" }),
		).toBeInTheDocument();
		expect(screen.getByRole("row", { name: "Free in Development no" })).toBeInTheDocument();
		expect(screen.getByRole("row", { name: "Free in Production no" })).toBeInTheDocument();
	});

	test("disappears if all features are identical and differences only is on", () => {
		render(<LicensingSection productData={data} showDifferencesOnly={true} />);

		expect(screen.queryByRole("heading")).not.toBeInTheDocument();
		expect(screen.queryByRole("row")).not.toBeInTheDocument();
	});

	test("displays License if features are different and differences only is on", () => {
		data[0].license.text = "GPLv2+CE";

		render(<LicensingSection productData={data} showDifferencesOnly={true} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Licensing");
		expect(screen.getAllByRole("row")).toHaveLength(1);
		expect(
			screen.getByRole("row", { name: "License Show explanation GPLv2+CE Proprietary" }),
		).toBeInTheDocument();
	});

	test("displays Free in Development if features are different and differences only is on", () => {
		data[0].freeInDevelopment.present = Model.Present.YES;

		render(<LicensingSection productData={data} showDifferencesOnly={true} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Licensing");
		expect(screen.getAllByRole("row")).toHaveLength(1);
		expect(screen.getByRole("row", { name: "Free in Development yes no" })).toBeInTheDocument();
	});

	test("displays Free in Production if features are different and differences only is on", () => {
		data[0].freeInProduction.present = Model.Present.YES;

		render(<LicensingSection productData={data} showDifferencesOnly={true} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Licensing");
		expect(screen.getAllByRole("row")).toHaveLength(1);
		expect(screen.getByRole("row", { name: "Free in Production yes no" })).toBeInTheDocument();
	});
});
