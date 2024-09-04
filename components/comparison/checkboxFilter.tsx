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
import { Model } from "../../src/modelTypes";
import { ChevronDownIcon } from "../icons";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ApplyFilter } from "@/hooks/usePropagateToSearchParams";

type CheckboxFilterProps = {
	label: string;
	filter: Model.Filter;
	onChangeHandler: (action: ApplyFilter) => void;
};

export function CheckboxFilter({ label, filter, onChangeHandler }: CheckboxFilterProps) {
	const numberOfSelectedOptions = filter.numberOfSelectedOptions();
	const fields = filter.options.map((option) => {
		return (
			<div key={option.id} className="flex items-center">
				<input
					id={option.id}
					name={filter.id}
					type="checkbox"
					checked={option.selected}
					className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
					onChange={(e) => {
						onChangeHandler(new ApplyFilter(filter.id, option.label, e.target.checked));
					}}
				/>
				<label
					htmlFor={option.id}
					className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
				>
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
			className="relative inline-block text-left px-4 last:pr-0"
		>
			<div>
				<PopoverButton className="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
					<span className="filter-name">{label}</span>
					{numberOfSelectedOptions > 0 && (
						<span className="active-filter-options ml-1.5 rounded bg-gray-200 py-0.5 px-1.5 text-xs font-semibold tabular-nums text-gray-700">
							{numberOfSelectedOptions}
						</span>
					)}
					<ChevronDownIcon
						className="-mr-1 last:mr-0 ml-1 h-3 w-3 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
						aria-hidden="true"
					/>
				</PopoverButton>
			</div>

			<PopoverPanel
				transition
				className="absolute max-h-72 overflow-auto right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
			>
				<form
					id={`filter-${filter.id}`}
					aria-label={`Selectable ${label}`}
					className="space-y-4"
				>
					{fields}
				</form>
			</PopoverPanel>
		</Popover>
	);
}
