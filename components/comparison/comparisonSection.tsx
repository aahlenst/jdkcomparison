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
import React, { PropsWithChildren, useState } from "react";
import { SquareMinusIcon, SquarePlusIcon } from "../icons";

type ComparisonSectionProps = {
	id: string;
	label: string;
};

export function ComparisonSection({
	id,
	label,
	children,
}: PropsWithChildren<ComparisonSectionProps>) {
	const [open, setOpen] = useState(true);

	return (
		<section id={id}>
			<div
				className="toggle-section sticky left-0 inline-flex items-center py-2 px-4 cursor-pointer"
				onClick={() => setOpen(!open)}
			>
				<h2 className="section-label font-semibold">{label}</h2>
				<button>
					{open && (
						<SquareMinusIcon
							className="ml-2 h-4 w-4"
							role="img"
							aria-label={`Hide section ${label}`}
						>
							<title>{`Hide section ${label}`}</title>
						</SquareMinusIcon>
					)}
					{!open && (
						<SquarePlusIcon
							className="ml-2 h-4 w-4"
							role="img"
							aria-label={`Show section ${label}`}
						>
							<title>{`Show section ${label}`}</title>
						</SquarePlusIcon>
					)}
				</button>
			</div>
			{open && children}
		</section>
	);
}
