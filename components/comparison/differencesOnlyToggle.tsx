import {ToggleShowDifferencesOnly, useComparison, useComparisonDispatch} from "./comparisonContext";

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
				onChange={(e) => dispatch([new ToggleShowDifferencesOnly(e.target.checked)])}
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
