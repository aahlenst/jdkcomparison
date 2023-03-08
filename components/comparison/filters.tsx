import {useComparison, useComparisonDispatch} from "./comparisonContext";
import {CheckboxFilter} from "./checkboxFilter";
import {Model} from "@/src/modelTypes";

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

	return (
		<div id="filters">
			<CheckboxFilter label="Versions" filter={getFilter("versions", comparison.filters)}
							onChangeHandler={dispatch}/>
			<CheckboxFilter label="Vendors" filter={getFilter("vendors", comparison.filters)}
							onChangeHandler={dispatch}/>
		</div>
	);
}
