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
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "../icons";
import { Model } from "@/src/modelTypes";
import { ApplyFilter } from "@/hooks/usePropagateToSearchParams";

type CheckboxFilterMobileProps = {
	label: string;
	filter: Model.Filter;
	onChangeHandler: (action: ApplyFilter) => void;
};

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export function CheckboxFilterMobile({
	label,
	filter,
	onChangeHandler,
}: CheckboxFilterMobileProps) {
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
				<label htmlFor={option.id} className="ml-3 text-sm text-gray-500">
					{option.label}
				</label>
			</div>
		);
	});

	return (
		<Disclosure as="div" className="border-t border-gray-200 px-4 py-6">
			{({ open }) => (
				<>
					<h3 className="-mx-2 -my-3 flow-root">
						<Disclosure.Button
							id={`mobile-menu-filter-${filter.id}`}
							className="flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400"
						>
							<span className="filter-name font-medium text-gray-900">{label}</span>
							<span className="ml-6 flex items-center">
								<ChevronDownIcon
									className={classNames(
										open ? "-rotate-180" : "rotate-0",
										"h-5 w-5 transform",
									)}
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
