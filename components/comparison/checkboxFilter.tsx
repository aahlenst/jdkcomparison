import {Model} from "../../src/modelTypes";
import {ApplyCheckboxFilter} from "./comparisonContext";
import {ChevronDownIcon} from "../icons";
import {Fragment} from "react";
import {Popover, Transition} from "@headlessui/react";

type CheckboxFilterProps = {
	label: string
	filter: Model.Filter,
	onChangeHandler: (action: ApplyCheckboxFilter) => void
}

export function CheckboxFilter({label, filter, onChangeHandler}: CheckboxFilterProps) {
	const numberOfSelectedOptions = filter.numberOfSelectedOptions();
	const fields = filter.options.map((option) => {
		return (
			<div key={option.id} className="flex items-center">
				<input
					id={option.id}
					name={`${filter.id}[]`}
					type="checkbox"
					checked={option.selected}
					className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
					onChange={(e) => {
						onChangeHandler(new ApplyCheckboxFilter(e.target.id, e.target.checked));
					}}
				/>
				<label htmlFor={option.id} className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900">
					{option.label}
				</label>
			</div>
		);
	});

	return (
		<Popover
			as="div"
			key={filter.id}
			id={`desktop-menu-filter-${filter.id}`}
			className="relative inline-block text-left px-4"
		>
			<div>
				<Popover.Button
					className="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
					<span className="filter-name">{label}</span>
					{numberOfSelectedOptions > 0 &&
						<span className="active-filter-options ml-1.5 rounded bg-gray-200 py-0.5 px-1.5 text-xs font-semibold tabular-nums text-gray-700">{numberOfSelectedOptions}</span>
					}
					<ChevronDownIcon
						className="-mr-1 ml-1 h-3 w-3 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
						aria-hidden="true"
					/>
				</Popover.Button>
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
				<Popover.Panel
					className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
					<form id={`filter-${filter.id}`} className="space-y-4">
						{fields}
					</form>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
}
