import {useComparison, useComparisonDispatch} from "./comparisonContext";
import {Model} from "../../src/modelTypes";
import {useState} from "react";
import {Popover} from "@headlessui/react";
import {CheckboxFilter} from "./checkboxFilter";
import {Sort} from "./sort";

function getFilter(id: string, filters: Model.Filter[]): Model.Filter {
	const filter = filters.find(filter => filter.id === id);

	if (filter === undefined) {
		throw new Error(`Could not find filter: ${id}`);
	}

	return filter;
}

export function Filters() {
	const comparison = useComparison();
	const dispatch = useComparisonDispatch();
	const [open, setOpen] = useState(false);

	return (
		<div id="filters">
			<div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
				<section aria-labelledby="filter-heading" className="border-t border-b border-gray-200 py-6">
					<h2 id="filter-heading" className="sr-only">
						Filters
					</h2>

					<div className="flex items-center justify-between">
						<Sort/>
						<button
							type="button"
							className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
							onClick={() => setOpen(true)}
						>
							Filters
						</button>
						<Popover.Group className="hidden divide-x divide-gray-200 sm:flex sm:items-baseline">
							<CheckboxFilter label="Versions" filter={getFilter("versions", comparison.filters)}
											onChangeHandler={dispatch}/>
							<CheckboxFilter label="Vendors" filter={getFilter("vendors", comparison.filters)}
											onChangeHandler={dispatch}/>
							<CheckboxFilter label="Technologies" filter={getFilter("technologies", comparison.filters)}
											onChangeHandler={dispatch}/>
						</Popover.Group>
					</div>
				</section>
			</div>
		</div>
	);
}
