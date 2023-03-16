import React, {PropsWithChildren, useState} from "react";
import {SquareMinusIcon, SquarePlusIcon} from "../icons";

type ComparisonSectionProps = {
	id: string
	label: string
}

export function ComparisonSection({id, label, children}: PropsWithChildren<ComparisonSectionProps>) {
	const [open, setOpen] = useState(true);

	return (
		<section id={id} className="pt-4">
			<button className="toggle-section flex inline-flex items-center" onClick={() => setOpen(!open)}>
				<h2 className="section-label font-semibold">{label}</h2>
				{open &&
					<SquareMinusIcon className="ml-2 h-4 w-4"/>
				}
				{!open &&
					<SquarePlusIcon className="ml-2 h-4 w-4"/>
				}
			</button>
			{open && children}
		</section>
	);
}
