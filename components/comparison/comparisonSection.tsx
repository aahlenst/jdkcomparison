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
			<h2 className="toggle-section cursor-pointer"
				onClick={() => setOpen(!open)}>
				<button className="sticky left-0 flex inline-flex items-center pl-2 sm:pl-6 lg:pl-8">
					<span className="section-label font-semibold">{label}</span>
					{open &&
						<SquareMinusIcon className="ml-2 h-4 w-4" role="img" aria-label="Hide section">
							<title>Hide section</title>
						</SquareMinusIcon>
					}
					{!open &&
						<SquarePlusIcon className="ml-2 h-4 w-4" role="img" aria-label="Show section">
							<title>Show section</title>
						</SquarePlusIcon>
					}
				</button>
			</h2>
			{open && children}
		</section>
	);
}
