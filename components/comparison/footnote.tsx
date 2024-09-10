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
import { useRef, useState } from "react";
import { Model } from "@/src/modelTypes";
import { useComparison } from "@/components/comparison/comparisonContext";
import {
	arrow,
	autoPlacement,
	FloatingArrow,
	FloatingOverlay,
	FloatingPortal,
	offset,
	useClick,
	useDismiss,
	useFloating,
	useInteractions,
} from "@floating-ui/react";

type FootnoteProps = {
	footnoteReference: Model.FootnoteReference;
};

const ARROW_HEIGHT = 7;
const GAP = 4;

export function Footnote({ footnoteReference }: FootnoteProps) {
	const comparison = useComparison();
	const footnote = resolveFootnote(comparison.footnotes, footnoteReference.number);
	const arrowRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);
	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		placement: "right",
		middleware: [
			autoPlacement(),
			arrow({
				element: arrowRef,
			}),
			offset(ARROW_HEIGHT + GAP),
		],
	});
	const click = useClick(context);
	const dismiss = useDismiss(context);
	const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss]);

	return (
		<sup className="ml-0.5">
			[
			<a
				ref={refs.setReference}
				{...getReferenceProps()}
				href={`#fn-${footnoteReference.number}`}
				title={`Show footnote ${footnote.number}`}
				className="footnote-ref underline hover:no-underline text-blue-600 visited:text-violet-600"
			>
				{footnote.number}
			</a>
			]{/* See https://floating-ui.com/docs/FloatingPortal for why we need a portal */}
			{isOpen && (
				<FloatingPortal id="comparison-modals">
					{/* Overlay, only displayed on smaller screens. */}
					<FloatingOverlay className="mobile-footnote-overlay sm:hidden fixed z-40 inset-0 bg-black opacity-30" />
					{/* Popover for smaller screens. Appears at the bottom of the screen. */}
					<div className="mobile-footnote sm:hidden fixed z-40 bottom-0 inset-x-0">
						<div
							role="note"
							aria-label={`Footnote ${footnote.number}`}
							className="overflow-hidden bg-white p-3 prose prose-sm max-w-none"
							dangerouslySetInnerHTML={{ __html: footnote.html }}
						/>
					</div>
					{/* Popover for larger screens. Appears as a tooltip next to the button. */}
					<div
						ref={refs.setFloating}
						{...getFloatingProps()}
						style={{ ...floatingStyles }}
						className="desktop-footnote hidden sm:block z-10 bg-white rounded-lg shadow-lg ring-1 ring-black"
					>
						<FloatingArrow ref={arrowRef} context={context} />
						<div
							role="note"
							aria-label={`Footnote ${footnote.number}`}
							className="p-3 prose prose-sm max-w-sm"
							dangerouslySetInnerHTML={{ __html: footnote.html }}
						/>
					</div>
				</FloatingPortal>
			)}
		</sup>
	);
}

function resolveFootnote(footnotes: Model.Footnote[], number: number): Model.Footnote {
	const footnote = footnotes.find((f) => f.number === number);
	if (footnote === undefined) {
		throw new Error(`Unknown footnote: ${number}`);
	}
	return footnote;
}
