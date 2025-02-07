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
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { ChevronDownIcon } from "../icons";
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
		<MenuItem key={comparator.label}>
			{({ focus }) => (
				<button
					onClick={() => onClickHandler(comparator.id)}
					className={classNames(
						focus ? "bg-gray-100" : "",
						comparator.id === comparison.activeComparator?.id
							? "sort-option-active border-red-600 bg-red-50 text-red-700"
							: "sort-option-inactive border-transparent",
						"sort-option border-l-4 w-full px-4 py-2 text-left text-sm font-medium text-gray-900",
					)}
				>
					{comparator.label}
				</button>
			)}
		</MenuItem>
	));

	return (
		<Menu as="div" id="sort-options" className="relative inline-block text-left">
			<div>
				<MenuButton
					id="sort-options-button"
					className="group inline-flex items-baseline justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
				>
					Sort
					<ChevronDownIcon
						className="-mr-1 ml-1 h-3 w-3 shrink-0 text-gray-400 group-hover:text-gray-500"
						aria-hidden="true"
					/>
				</MenuButton>
			</div>

			<MenuItems
				id="sort-options-menu"
				transition
				className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-hidden transition ease-out data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-leave:duration-75"
			>
				<div className="py-1">{sortOptions}</div>
			</MenuItems>
		</Menu>
	);
}
