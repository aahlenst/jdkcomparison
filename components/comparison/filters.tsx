import { useComparison } from "./comparisonContext";
import { Model } from "../../src/modelTypes";
import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
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

export function Filters() {
	const comparison = useComparison();
	const handleSearchParamsAction = usePropagateToSearchParams();
	const [open, setOpen] = useState(false);

	return (
		<div
			id="filters"
			className="fixed left-0 top-16 right-0 h-12 z-30 flex items-center bg-white border-t border-b border-gray-200 py-3 px-2 sm:px-6 lg:px-8"
		>
			{/* Mobile filters */}
			<Transition.Root show={open} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-40 sm:hidden"
					onClose={setOpen}
				>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 z-40 flex">
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="translate-x-full"
						>
							<Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
								<div className="flex items-center justify-between px-4">
									<h2 className="text-lg font-medium text-gray-900">
										Filters
									</h2>
									<button
										id="mobile-filters-close"
										type="button"
										className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
										onClick={() => setOpen(false)}
									>
										<span className="sr-only">
											Close menu
										</span>
										<XMarkIcon
											className="h-6 w-6"
											aria-hidden="true"
										/>
									</button>
								</div>
								<form className="mt-4">
									<CheckboxFilterMobile
										label="Versions"
										filter={getFilter(
											"versions",
											comparison.filters
										)}
										onChangeHandler={
											handleSearchParamsAction
										}
									/>
									<CheckboxFilterMobile
										label="Vendors"
										filter={getFilter(
											"vendors",
											comparison.filters
										)}
										onChangeHandler={
											handleSearchParamsAction
										}
									/>
									<CheckboxFilterMobile
										label="VMs"
										filter={getFilter(
											"vms",
											comparison.filters
										)}
										onChangeHandler={
											handleSearchParamsAction
										}
									/>
									<CheckboxFilterMobile
										label="Technologies"
										filter={getFilter(
											"technologies",
											comparison.filters
										)}
										onChangeHandler={
											handleSearchParamsAction
										}
									/>
									<CheckboxFilterMobile
										label="Licensing"
										filter={getFilter(
											"licensing",
											comparison.filters
										)}
										onChangeHandler={
											handleSearchParamsAction
										}
									/>
								</form>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>

			{/* Desktop filters */}
			<section
				aria-labelledby="filter-heading"
				className="w-full mx-auto text-center"
			>
				<h2 id="filter-heading" className="sr-only">
					Filters
				</h2>
				<div className="flex items-center justify-between">
					<Sort />
					<button
						type="button"
						id="mobile-filters-open"
						className="inline-block text-sm font-medium text-gray-700 pr-2 sm:pr-0 hover:text-gray-900 sm:hidden"
						onClick={() => setOpen(true)}
					>
						Filters
					</button>
					<Popover.Group className="hidden divide-x divide-gray-200 sm:flex sm:items-baseline">
						<CheckboxFilter
							label="Versions"
							filter={getFilter("versions", comparison.filters)}
							onChangeHandler={handleSearchParamsAction}
						/>
						<CheckboxFilter
							label="Vendors"
							filter={getFilter("vendors", comparison.filters)}
							onChangeHandler={handleSearchParamsAction}
						/>
						<CheckboxFilter
							label="VMs"
							filter={getFilter("vms", comparison.filters)}
							onChangeHandler={handleSearchParamsAction}
						/>
						<CheckboxFilter
							label="Technologies"
							filter={getFilter(
								"technologies",
								comparison.filters
							)}
							onChangeHandler={handleSearchParamsAction}
						/>
						<CheckboxFilter
							label="Licensing"
							filter={getFilter("licensing", comparison.filters)}
							onChangeHandler={handleSearchParamsAction}
						/>
					</Popover.Group>
				</div>
			</section>
		</div>
	);
}
