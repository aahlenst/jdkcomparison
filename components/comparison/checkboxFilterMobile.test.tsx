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
import { fireEvent, render, screen } from "@testing-library/react";
import { CheckboxFilterMobile } from "./checkboxFilterMobile";
import { DynamicSelectionFilter } from "../../src/filter";
import { ApplyFilter } from "@/hooks/usePropagateToSearchParams";

describe("<CheckboxFilterMobile/>", () => {
	test("renders all options", () => {
		const filter = new DynamicSelectionFilter(
			"vendors",
			["Coffeecorp", "Dukecorp"],
			(fc) => fc.vendor,
		);

		const onChangeHandler = function () {
			// Do nothing.
		};

		render(
			<CheckboxFilterMobile
				label="Vendors"
				filter={filter}
				onChangeHandler={onChangeHandler}
			/>,
		);

		fireEvent.click(screen.getByRole("button", { name: "Vendors" }));

		expect(screen.getAllByRole("checkbox")).toHaveLength(2);
		expect(screen.getByRole("checkbox", { name: "Coffeecorp" })).not.toBeChecked();
		expect(screen.getByRole("checkbox", { name: "Dukecorp" })).not.toBeChecked();
	});

	test("enables and disables options on click", () => {
		const filter = new DynamicSelectionFilter("versions", ["8", "11"], (fc) =>
			fc.version.toString(),
		);

		const onChangeHandler = function (action: ApplyFilter) {
			for (const option of filter.options) {
				if (option.label === action.option) {
					option.selected = action.active;
				}
			}
		};

		const { rerender } = render(
			<CheckboxFilterMobile
				label="Versions"
				filter={filter}
				onChangeHandler={onChangeHandler}
			/>,
		);

		expect(screen.queryByRole("button", { name: "Versions" })).toBeInTheDocument();

		fireEvent.click(screen.getByRole("button", { name: "Versions" }));

		expect(screen.getAllByRole("checkbox")).toHaveLength(2);
		expect(screen.getByRole("checkbox", { name: "8" })).not.toBeChecked();
		expect(screen.getByRole("checkbox", { name: "11" })).not.toBeChecked();

		fireEvent.click(screen.getByRole("checkbox", { name: "8" }));

		// We have to rerender because the filter state is in the prop `filter`. See
		// https://testing-library.com/docs/example-update-props/
		rerender(
			<CheckboxFilterMobile
				label="Versions"
				filter={filter}
				onChangeHandler={onChangeHandler}
			/>,
		);

		expect(screen.queryByRole("button", { name: "Versions" })).toBeInTheDocument();

		expect(screen.getByRole("checkbox", { name: "8" })).toBeChecked();
		expect(screen.getByRole("checkbox", { name: "11" })).not.toBeChecked();

		fireEvent.click(screen.getByRole("checkbox", { name: "8" }));

		// We have to rerender because the filter state is in the prop `filter`. See
		// https://testing-library.com/docs/example-update-props/
		rerender(
			<CheckboxFilterMobile
				label="Versions"
				filter={filter}
				onChangeHandler={onChangeHandler}
			/>,
		);

		expect(screen.queryByRole("button", { name: "Versions" })).toBeInTheDocument();

		expect(screen.getByRole("checkbox", { name: "8" })).not.toBeChecked();
		expect(screen.getByRole("checkbox", { name: "11" })).not.toBeChecked();

		fireEvent.click(screen.getByRole("checkbox", { name: "8" }));
		fireEvent.click(screen.getByRole("checkbox", { name: "11" }));

		rerender(
			<CheckboxFilterMobile
				label="Versions"
				filter={filter}
				onChangeHandler={onChangeHandler}
			/>,
		);

		expect(screen.queryByRole("button", { name: "Versions" })).toBeInTheDocument();

		expect(screen.getByRole("checkbox", { name: "8" })).toBeChecked();
		expect(screen.getByRole("checkbox", { name: "11" })).toBeChecked();
	});

	test("retains selected state after reopening", () => {
		const filter = new DynamicSelectionFilter("versions", ["8", "11"], (fc) =>
			fc.version.toString(),
		);

		const onChangeHandler = function (action: ApplyFilter) {
			for (const option of filter.options) {
				if (option.label === action.option) {
					option.selected = action.active;
				}
			}
		};

		const { rerender } = render(
			<CheckboxFilterMobile
				label="Versions"
				filter={filter}
				onChangeHandler={onChangeHandler}
			/>,
		);

		expect(screen.queryByRole("button", { name: "Versions" })).toBeInTheDocument();

		fireEvent.click(screen.getByRole("button", { name: "Versions" }));

		expect(screen.getAllByRole("checkbox")).toHaveLength(2);
		expect(screen.getByRole("checkbox", { name: "8" })).not.toBeChecked();
		expect(screen.getByRole("checkbox", { name: "11" })).not.toBeChecked();

		fireEvent.click(screen.getByRole("checkbox", { name: "8" }));
		fireEvent.click(screen.getByRole("button", { name: "Versions" }));

		rerender(
			<CheckboxFilterMobile
				label="Versions"
				filter={filter}
				onChangeHandler={onChangeHandler}
			/>,
		);

		expect(screen.queryByRole("button", { name: "Versions" })).toBeInTheDocument();

		fireEvent.click(screen.getByRole("button", { name: "Versions" }));

		expect(screen.getAllByRole("checkbox")).toHaveLength(2);
		expect(screen.getByRole("checkbox", { name: "8" })).toBeChecked();
		expect(screen.getByRole("checkbox", { name: "11" })).not.toBeChecked();
	});
});
