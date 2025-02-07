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
import { useComparison } from "./comparisonContext";
import { Model } from "../../src/modelTypes";
import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel, PopoverGroup } from "@headlessui/react";
import { CheckboxFilter } from "./checkboxFilter";
import { Sort } from "./sort";
import { XMarkIcon } from "../icons";
import { CheckboxFilterMobile } from "./checkboxFilterMobile";
import { usePropagateToSearchParams } from "@/hooks/usePropagateToSearchParams";

function getFilter(id: string, filters: Model.Filter[]): Model.Filter {
	const filter = filters.find((filter) => filter.id === id);

	if (filter === undefined) {
		throw new Error(`Could not find filter: ${id}`);
	}

	return filter;
}

const filtersToDisplay = [
	{ id: "versions", label: "Versions" },
	{ id: "vendors", label: "Vendors" },
	{ id: "vms", label: "VMs" },
	{ id: "technologies", label: "Technologies" },
	{ id: "gcs", label: "GCs" },
	{ id: "platforms", label: "Platforms" },
	{ id: "licensing", label: "Licensing" },
];

export function Filters() {
	const comparison = useComparison();
	const handleSearchParamsAction = usePropagateToSearchParams();
	const [open, setOpen] = useState(false);

	const mobileFilters = filtersToDisplay.map((filter) => (
		<CheckboxFilterMobile
			key={filter.id}
			label={filter.label}
			filter={getFilter(filter.id, comparison.filters)}
			onChangeHandler={handleSearchParamsAction}
		/>
	));
	const desktopFilters = filtersToDisplay.map((filter) => (
		<CheckboxFilter
			key={filter.id}
			label={filter.label}
			filter={getFilter(filter.id, comparison.filters)}
			onChangeHandler={handleSearchParamsAction}
		/>
	));

	return (
		<div
			id="filters"
			className="fixed left-0 top-16 right-0 h-12 z-30 flex items-center bg-white border-t border-b border-gray-200 py-3 px-2 sm:px-6 lg:px-8"
		>
			{/* Mobile filters */}
			<Dialog
				className="relative z-40 lg:hidden"
				open={open}
				onClose={setOpen}
				aria-label="Menu Filters"
			>
				<DialogBackdrop
					transition
					className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
				/>

				<div className="fixed inset-0 z-40 flex">
					<DialogPanel
						transition
						className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
					>
						<div className="flex items-center justify-between px-4">
							<h2 className="text-lg font-medium text-gray-900">Filters</h2>
							<button
								id="mobile-filters-close"
								type="button"
								className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:outline-hidden focus:ring-2 focus:ring-red-500"
								onClick={() => setOpen(false)}
							>
								<span className="sr-only">Close menu Filters</span>
								<XMarkIcon className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
						<form className="mt-4">{mobileFilters}</form>
					</DialogPanel>
				</div>
			</Dialog>

			{/* Desktop filters */}
			<section aria-labelledby="filter-heading" className="w-full mx-auto text-center">
				<h2 id="filter-heading" className="sr-only">
					Filters
				</h2>
				<div className="flex items-center justify-between">
					<Sort />
					<button
						type="button"
						id="mobile-filters-open"
						className="inline-block text-sm font-medium text-gray-700 pr-2 md:pr-0 hover:text-gray-900 lg:hidden"
						onClick={() => setOpen(true)}
					>
						Filters
					</button>
					<PopoverGroup className="hidden divide-x divide-gray-200 lg:flex lg:items-baseline">
						{desktopFilters}
					</PopoverGroup>
				</div>
			</section>
		</div>
	);
}
