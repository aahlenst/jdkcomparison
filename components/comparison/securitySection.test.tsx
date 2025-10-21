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
import { SecurityFeaturesSlice, SecuritySection } from "@/components/comparison/securitySection";
import { Model } from "@/src/modelTypes";
import Present = Model.Present;
import { remove } from "@/src/utils";

describe("<SecuritySection/>", () => {
	let data: SecurityFeaturesSlice[] = [];

	beforeEach(() => {
		data = [1, 2].map((i) => {
			return {
				id: `no-jdk-${i}`,
				sbom: { present: Model.Present.NO },
			};
		});
	});

	test("displays all features", () => {
		render(<SecuritySection productData={data} showDifferencesOnly={false} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Security");
		expect(screen.getAllByRole("row")).toHaveLength(1);
		expect(
			screen.getByRole("row", { name: "SBOM Show explanation no no" }),
		).toBeInTheDocument();
	});

	test("displays all features of a single product despite differences only on", () => {
		data = remove(data, (item) => item.id === "no-jdk-2");

		render(<SecuritySection productData={data} showDifferencesOnly={false} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Security");
		expect(screen.getAllByRole("row")).toHaveLength(1);
		expect(screen.getByRole("row", { name: "SBOM Show explanation no" })).toBeInTheDocument();
	});

	test("disappears if all features are identical and differences only is on", () => {
		render(<SecuritySection productData={data} showDifferencesOnly={true} />);

		expect(screen.queryByRole("heading")).not.toBeInTheDocument();
		expect(screen.queryByRole("row")).not.toBeInTheDocument();
	});

	test("displays SBOM if features are different and differences only is on", () => {
		data[0].sbom.present = Present.PARTIALLY;

		render(<SecuritySection productData={data} showDifferencesOnly={true} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Security");
		expect(screen.getAllByRole("row")).toHaveLength(1);
		expect(
			screen.getByRole("row", { name: "SBOM Show explanation partially no" }),
		).toBeInTheDocument();
	});
});
