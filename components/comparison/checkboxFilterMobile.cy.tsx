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
import { CheckboxFilterMobile } from "./checkboxFilterMobile";
import { DynamicSelectionFilter } from "../../src/filter";
import { ApplyFilter } from "@/hooks/usePropagateToSearchParams";

describe("<CheckboxFilterMobile/>", () => {
	it("renders all options", () => {
		const filter = new DynamicSelectionFilter(
			"vendors",
			["Coffeecorp", "Dukecorp"],
			(fc) => fc.vendor
		);

		const onChangeHandler = function () {
			// Do nothing.
		};

		cy.mount(
			<CheckboxFilterMobile
				label="Vendors"
				filter={filter}
				onChangeHandler={onChangeHandler}
			/>
		);

		cy.get(".filter-name").should("have.text", "Vendors");
		cy.get(".filter-name").click();

		cy.get("label[for=vendors-0]").should("have.text", "Coffeecorp");
		cy.get("input[id=vendors-0]").should("not.be.checked");

		cy.get("label[for=vendors-1]").should("have.text", "Dukecorp");
		cy.get("input[id=vendors-1]").should("not.be.checked");
	});

	it("enables and disables options on click", () => {
		const filter = new DynamicSelectionFilter("versions", ["8", "11", "17"], (fc) =>
			fc.version.toString()
		);

		const onChangeHandler = function (action: ApplyFilter) {
			for (const option of filter.options) {
				if (option.label === action.option) {
					option.selected = action.active;
				}
			}
		};

		cy.mount(
			<CheckboxFilterMobile
				label="Versions"
				filter={filter}
				onChangeHandler={onChangeHandler}
			/>
		).then(({ rerender }) => {
			cy.get(".filter-name").should("have.text", "Versions");
			cy.get(".filter-name").click();

			cy.get("label[for=versions-0]").should("have.text", 8);
			cy.get("input[id=versions-0]").should("not.be.checked");

			cy.get("label[for=versions-1]").should("have.text", 11);
			cy.get("input[id=versions-1]").should("not.be.checked");

			cy.get("input[id=versions-0]").click();

			rerender(
				<CheckboxFilterMobile
					label="Versions"
					filter={filter}
					onChangeHandler={onChangeHandler}
				/>
			);

			cy.get("input[id=versions-0]").should("be.checked");
			cy.get("input[id=versions-1]").should("not.be.checked");

			cy.get("input[id=versions-0]").click();

			rerender(
				<CheckboxFilterMobile
					label="Versions"
					filter={filter}
					onChangeHandler={onChangeHandler}
				/>
			);

			cy.get("input[id=versions-0]").should("not.be.checked");
			cy.get("input[id=versions-1]").should("not.be.checked");

			cy.get("input[id=versions-0]").click();
			cy.get("input[id=versions-1]").click();

			rerender(
				<CheckboxFilterMobile
					label="Versions"
					filter={filter}
					onChangeHandler={onChangeHandler}
				/>
			);

			cy.get("input[id=versions-0]").should("be.checked");
			cy.get("input[id=versions-1]").should("be.checked");
		});
	});

	it("retains selected state after reopening", () => {
		const filter = new DynamicSelectionFilter("versions", ["8", "11", "17"], (fc) =>
			fc.version.toString()
		);

		const onChangeHandler = function (action: ApplyFilter) {
			for (const option of filter.options) {
				if (option.label === action.option) {
					option.selected = action.active;
				}
			}
		};

		cy.mount(
			<CheckboxFilterMobile
				label="Versions"
				filter={filter}
				onChangeHandler={onChangeHandler}
			/>
		).then(({ rerender }) => {
			cy.get(".filter-name").should("have.text", "Versions");
			cy.get(".filter-name").click();

			cy.get("label[for=versions-0]").should("have.text", 8);
			cy.get("input[id=versions-0]").should("not.be.checked");

			cy.get("label[for=versions-1]").should("have.text", 11);
			cy.get("input[id=versions-1]").should("not.be.checked");

			cy.get("input[id=versions-0]").click();
			cy.get(".filter-name").click();

			rerender(
				<CheckboxFilterMobile
					label="Versions"
					filter={filter}
					onChangeHandler={onChangeHandler}
				/>
			);

			cy.get(".filter-name").click();
			cy.get("input[id=versions-0]").should("be.checked");
			cy.get("input[id=versions-1]").should("not.be.checked");
		});
	});
});
