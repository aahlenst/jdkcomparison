import {Disclosure} from "@headlessui/react";
import {ChevronDownIcon} from "../icons";
import {Model} from "@/src/modelTypes";
import {ApplyCheckboxFilter} from "./comparisonContext";

type CheckboxFilterMobileProps = {
	label: string
	filter: Model.Filter,
	onChangeHandler: (action: ApplyCheckboxFilter) => void
}

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export function CheckboxFilterMobile({label, filter, onChangeHandler}: CheckboxFilterMobileProps) {
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
				<label htmlFor={option.id} className="ml-3 text-sm text-gray-500">
					{option.label}
				</label>
			</div>
		);
	});

	return (
		<Disclosure as="div" className="border-t border-gray-200 px-4 py-6">
			{({open}) => (
				<>
					<h3 className="-mx-2 -my-3 flow-root">
						<Disclosure.Button
							id={`mobile-menu-filter-${filter.id}`}
							className="flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400">
							<span className="filter-name font-medium text-gray-900">{label}</span>
							<span className="ml-6 flex items-center">
                                <ChevronDownIcon
									className={classNames(open ? "-rotate-180" : "rotate-0", "h-5 w-5 transform")}
									aria-hidden="true"
								/>
                              </span>
						</Disclosure.Button>
					</h3>
					<Disclosure.Panel className="pt-6">
						<div id={`filter-${filter.id}`} className="space-y-6">
							{fields}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
