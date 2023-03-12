import {useComparison, useComparisonDispatch} from "./comparisonContext";
import {Model} from "../../src/modelTypes";
import {Fragment, useState} from "react";
import {ChevronDownIcon} from "../icons";
import {Menu, Popover, Transition} from "@headlessui/react";
import {CheckboxFilter} from "./checkboxFilter";

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
						<Menu as="div" className="relative inline-block text-left invisible">
							<div>
								<Menu.Button
									className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
									Sort
									<ChevronDownIcon
										className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
										aria-hidden="true"
									/>
								</Menu.Button>
							</div>

							<Transition
								as={Fragment}
								enter="transition ease-out duration-100"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95"
							>
								<Menu.Items
									className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
									<div className="py-1">
										<Menu.Item>
											<span className="block px-4 py-2 text-sm font-medium text-gray-900">
												Version
											</span>
										</Menu.Item>
										<Menu.Item>
											<span className="block px-4 py-2 text-sm font-medium text-gray-900">
												Vendor
											</span>
										</Menu.Item>
									</div>
								</Menu.Items>
							</Transition>
						</Menu>
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
