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
import { useState } from "react";
import { usePopper } from "react-popper";
import { Popover } from "@headlessui/react";
import { ClientOnlyPortal } from "@/components/clientOnlyPortal";
import { Model } from "@/src/modelTypes";
import { useComparison } from "@/components/comparison/comparisonContext";

type FootnoteProps = {
	footnoteReference: Model.FootnoteReference;
};

export function Footnote({ footnoteReference }: FootnoteProps) {
	const comparison = useComparison();
	const footnote = resolveFootnote(comparison.footnotes, footnoteReference.number);
	const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);
	const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
	const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null);
	const { styles, attributes } = usePopper(referenceElement, popperElement, {
		modifiers: [
			{ name: "arrow", options: { element: arrowElement } },
			{ name: "offset", options: { offset: [0, 10] } },
		],
	});

	return (
		<Popover as="sup" className="ml-0.5">
			[
			<Popover.Button
				as="a"
				ref={setReferenceElement}
				href={`#fn-${footnoteReference.number}`}
				className="footnote-ref underline hover:no-underline text-blue-600 visited:text-violet-600"
			>
				{footnote.number}
			</Popover.Button>
			]
			<ClientOnlyPortal selector="#comparison-modals">
				{/* Overlay, only displayed on smaller screens. */}
				<Popover.Overlay className="mobile-footnote-overlay sm:hidden fixed z-40 inset-0 bg-black opacity-30" />
				{/* Popover for smaller screens. Appears at the bottom of the screen. */}
				<Popover.Panel className="mobile-footnote sm:hidden fixed z-40 bottom-0 inset-x-0">
					<div
						className="overflow-hidden bg-white p-3 prose prose-sm max-w-none"
						dangerouslySetInnerHTML={{ __html: footnote.html }}
					/>
				</Popover.Panel>
				{/* Popover for larger screens. Appears as a tooltip next to the button. */}
				<Popover.Panel
					ref={setPopperElement}
					style={styles.popper}
					{...attributes.popper}
					className="desktop-footnote popper-tooltip hidden sm:block absolute left-1/2 z-10 w-screen max-w-sm -translate-x-1/2 transform"
				>
					<div
						className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-20 bg-white p-3 prose prose-sm max-w-none"
						dangerouslySetInnerHTML={{ __html: footnote.html }}
					/>
					{/* The small arrow on the left side of popover that points towards the info button. */}
					<div
						ref={setArrowElement}
						style={styles.arrow}
						{...attributes.arrow}
						className="popper-tooltip-arrow"
					/>
				</Popover.Panel>
			</ClientOnlyPortal>
		</Popover>
	);
}

function resolveFootnote(footnotes: Model.Footnote[], number: number): Model.Footnote {
	const footnote = footnotes.find((f) => f.number === number);
	if (footnote === undefined) {
		throw new Error(`Unknown footnote: ${number}`);
	}
	return footnote;
}
