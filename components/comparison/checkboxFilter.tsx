import {Model} from "../../src/modelTypes";
import {ApplyCheckboxFilter} from "./comparisonContext";

type CheckboxFilterProps = {
	label: string
	filter: Model.Filter,
	onChangeHandler: (action: ApplyCheckboxFilter) => void
}

export function CheckboxFilter({label, filter, onChangeHandler}: CheckboxFilterProps) {
	const fields = filter.options.map((option) => {
		return (
			<div key={option.id}>
				<input type="checkbox" id={option.id} checked={option.selected}
					   onChange={(e) => {
						   onChangeHandler(new ApplyCheckboxFilter(e.target.id, e.target.checked));
					   }}/>
				<label htmlFor={option.id}>{option.label}</label>
			</div>
		);
	});

	return (
		<fieldset id={`filter-${filter.id}`}>
			<legend>{label}</legend>
			{fields}
		</fieldset>
	);
}
