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
import {
	ToggleShowDifferencesOnly,
	useComparison,
	useComparisonDispatch,
} from "./comparisonContext";

export function DifferencesOnlyToggle() {
	const comparison = useComparison();
	const dispatch = useComparisonDispatch();

	return (
		<div className="flex flex-row">
			<input
				type="checkbox"
				id="show-differences-only"
				name="show-differences-only"
				checked={comparison.showDifferencesOnly}
				className="h-4 w-4 mt-0.5 ml-1 rounded border-gray-300 text-red-600 focus:ring-red-500"
				onChange={(e) =>
					dispatch([new ToggleShowDifferencesOnly(e.target.checked)])
				}
			/>
			<label
				htmlFor="show-differences-only"
				className="grow ml-3 text-sm font-medium text-gray-900"
			>
				Show differences only
			</label>
		</div>
	);
}
