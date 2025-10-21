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
import {
	OtherPlatformsFeaturesSlice,
	OtherPlatformsSection,
} from "@/components/comparison/otherPlatformsSection";
import { Model } from "@/src/modelTypes";
import { remove } from "@/src/utils";
import Present = Model.Present;

describe("<OtherPlatformsSection/>", () => {
	let data: OtherPlatformsFeaturesSlice[] = [];

	beforeEach(() => {
		data = [1, 2].map((i) => {
			return {
				id: `no-jdk-${i}`,
				aixPPC: { present: Model.Present.NO },
				solarisSPARC: { present: Model.Present.NO },
				solarisx64: { present: Model.Present.NO },
			};
		});
	});

	test("displays all features", () => {
		render(<OtherPlatformsSection productData={data} showDifferencesOnly={false} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Platforms: Other");
		expect(screen.getAllByRole("row")).toHaveLength(3);
		expect(screen.getByRole("row", { name: "AIX, PPC no no" })).toBeInTheDocument();
		expect(screen.getByRole("row", { name: "Solaris, SPARC no no" })).toBeInTheDocument();
		expect(screen.getByRole("row", { name: "Solaris, x86, 64-bit no no" })).toBeInTheDocument();
	});

	test("displays all features of a single product despite differences only on", () => {
		data = remove(data, (item) => item.id === "no-jdk-2");

		render(<OtherPlatformsSection productData={data} showDifferencesOnly={false} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Platforms: Other");
		expect(screen.getAllByRole("row")).toHaveLength(3);
		expect(screen.getByRole("row", { name: "AIX, PPC no" })).toBeInTheDocument();
		expect(screen.getByRole("row", { name: "Solaris, SPARC no" })).toBeInTheDocument();
		expect(screen.getByRole("row", { name: "Solaris, x86, 64-bit no" })).toBeInTheDocument();
	});

	test("disappears if all features are identical and differences only is on", () => {
		render(<OtherPlatformsSection productData={data} showDifferencesOnly={true} />);

		expect(screen.queryByRole("heading")).not.toBeInTheDocument();
		expect(screen.queryByRole("row")).not.toBeInTheDocument();
	});

	test("displays AIX, PPC if features are different and differences only is on", () => {
		data[0].aixPPC.present = Present.YES;

		render(<OtherPlatformsSection productData={data} showDifferencesOnly={true} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Platforms: Other");
		expect(screen.getAllByRole("row")).toHaveLength(1);
		expect(screen.getByRole("row", { name: "AIX, PPC yes no" })).toBeInTheDocument();
	});

	test("displays Solaris, SPARC if features are different and differences only is on", () => {
		data[0].solarisSPARC.present = Present.YES;

		render(<OtherPlatformsSection productData={data} showDifferencesOnly={true} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Platforms: Other");
		expect(screen.getAllByRole("row")).toHaveLength(1);
		expect(screen.getByRole("row", { name: "Solaris, SPARC yes no" })).toBeInTheDocument();
	});

	test("displays Solaris, x86, 64-bit if features are different and differences only is on", () => {
		data[0].solarisx64.present = Present.YES;

		render(<OtherPlatformsSection productData={data} showDifferencesOnly={true} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Platforms: Other");
		expect(screen.getAllByRole("row")).toHaveLength(1);
		expect(
			screen.getByRole("row", { name: "Solaris, x86, 64-bit yes no" }),
		).toBeInTheDocument();
	});
});
