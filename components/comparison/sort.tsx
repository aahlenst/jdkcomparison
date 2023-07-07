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
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "../icons";
import { Fragment } from "react";
import { AllComparators } from "@/src/sorting";
import {
	SetActiveComparator,
	useComparison,
	useComparisonDispatch,
} from "@/components/comparison/comparisonContext";
import { classNames } from "@/src/utils";

export function Sort() {
	const comparison = useComparison();
	const dispatch = useComparisonDispatch();

	function onClickHandler(comparator: string) {
		dispatch([new SetActiveComparator(comparator)]);
	}

	const sortOptions = AllComparators.map((comparator) => (
		<Menu.Item key={comparator.label}>
			{({ active }) => (
				<button
					onClick={() => onClickHandler(comparator.id)}
					className={classNames(
						active ? "bg-gray-100" : "",
						comparator.id === comparison.activeComparator?.id
							? "sort-option-active border-red-600 bg-red-50 text-red-700"
							: "sort-option-inactive border-transparent",
						"sort-option border-l-4 w-full px-4 py-2 text-left text-sm font-medium text-gray-900",
					)}
				>
					{comparator.label}
				</button>
			)}
		</Menu.Item>
	));

	return (
		<Menu as="div" id="sort-options" className="relative inline-block text-left">
			<div>
				<Menu.Button
					id="sort-options-button"
					className="group inline-flex items-baseline justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
				>
					Sort
					<ChevronDownIcon
						className="-mr-1 ml-1 h-3 w-3 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
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
					id="sort-options-menu"
					className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
				>
					<div className="py-1">{sortOptions}</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
