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
import { SupportFeaturesSlice, SupportSection } from "./supportSection";
import { Model } from "@/src/modelTypes";

describe("<SupportSection/>", () => {
	let data: SupportFeaturesSlice[] = [];

	beforeEach(() => {
		data = [1, 2].map((i) => {
			return {
				id: `jdk-${i}`,
				eolDate: { text: "2038-01" },
				updateTypes: { text: "no/tiered" },
				releaseSchedule: { text: "Custom" },
				releaseDelay: { text: "1-3 days" },
				paidSupport: { present: Model.Present.PARTIALLY },
			};
		});
	});

	test("displays all features", () => {
		render(<SupportSection productData={data} showDifferencesOnly={false} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Support");
		expect(screen.getAllByRole("row")).toHaveLength(5);
		expect(
			screen.getByRole("row", { name: "Patches Until Show explanation 2038-01 2038-01" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("row", { name: "CPU/PSU Show explanation no/tiered no/tiered" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("row", { name: "Release Schedule Show explanation Custom Custom" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("row", { name: "Release Delay Show explanation 1-3 days 1-3 days" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("row", { name: "Paid Support partially partially" }),
		).toBeInTheDocument();
	});

	test("displays all features of a single product despite differences only on", () => {
		data = remove(data, (item) => item.id === "jdk-2");

		render(<SupportSection productData={data} showDifferencesOnly={false} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Support");
		expect(screen.getAllByRole("row")).toHaveLength(5);
		expect(
			screen.getByRole("row", { name: "Patches Until Show explanation 2038-01" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("row", { name: "CPU/PSU Show explanation no/tiered" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("row", { name: "Release Schedule Show explanation Custom" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("row", { name: "Release Delay Show explanation 1-3 days" }),
		).toBeInTheDocument();
		expect(screen.getByRole("row", { name: "Paid Support partially" })).toBeInTheDocument();
	});

	test("disappears if all features are identical and differences only is on", () => {
		render(<SupportSection productData={data} showDifferencesOnly={true} />);

		expect(screen.queryByRole("heading")).not.toBeInTheDocument();
		expect(screen.queryByRole("row")).not.toBeInTheDocument();
	});

	test("displays Patches Until if features are different and differences only is on", () => {
		data[0].eolDate.text = "2030-12";

		render(<SupportSection productData={data} showDifferencesOnly={true} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Support");
		expect(screen.getAllByRole("row")).toHaveLength(1);
		expect(
			screen.getByRole("row", { name: "Patches Until Show explanation 2030-12 2038-01" }),
		).toBeInTheDocument();
	});

	test("displays CPU/PSU if features are different and differences only is on", () => {
		data[0].updateTypes.text = "no/free";

		render(<SupportSection productData={data} showDifferencesOnly={true} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Support");
		expect(screen.getAllByRole("row")).toHaveLength(1);
		expect(
			screen.getByRole("row", { name: "CPU/PSU Show explanation no/free no/tiered" }),
		).toBeInTheDocument();
	});

	test("displays Release Schedule if features are different and differences only is on", () => {
		data[0].releaseSchedule.text = "Once in a blue moon";

		render(<SupportSection productData={data} showDifferencesOnly={true} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Support");
		expect(screen.getAllByRole("row")).toHaveLength(1);
		expect(
			screen.getByRole("row", {
				name: "Release Schedule Show explanation Once in a blue moon Custom",
			}),
		).toBeInTheDocument();
	});

	test("displays Release Delay if features are different and differences only is on", () => {
		data[0].releaseDelay.text = "n/a";

		render(<SupportSection productData={data} showDifferencesOnly={true} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Support");
		expect(screen.getAllByRole("row")).toHaveLength(1);
		expect(
			screen.getByRole("row", { name: "Release Delay Show explanation n/a 1-3 days" }),
		).toBeInTheDocument();
	});

	test("displays Paid Support if features are different and differences only is on", () => {
		data[0].paidSupport.present = Model.Present.YES;

		render(<SupportSection productData={data} showDifferencesOnly={true} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Support");
		expect(screen.getAllByRole("row")).toHaveLength(1);
		expect(screen.getByRole("row", { name: "Paid Support yes partially" })).toBeInTheDocument();
	});
});
