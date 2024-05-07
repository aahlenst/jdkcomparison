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
import { PropsWithChildren, useRef, useState } from "react";
import {
	arrow,
	autoPlacement,
	FloatingArrow,
	FloatingOverlay,
	FloatingPortal,
	useClick,
	useDismiss,
	useFloating,
	useInteractions,
} from "@floating-ui/react";
import { InfoIcon } from "../icons";

export function FeatureExplanation({ children }: PropsWithChildren) {
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
		],
	});
	const click = useClick(context);
	const dismiss = useDismiss(context);
	const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss]);

	return (
		<div className="relative">
			<div
				ref={refs.setReference}
				{...getReferenceProps()}
				className="feature-explanation-toggle"
			>
				<InfoIcon className="w-3.5 h-3.5 mx-2" role="img" aria-label="Show explanation">
					<title>Show explanation</title>
				</InfoIcon>
			</div>
			{/* See https://floating-ui.com/docs/FloatingPortal for why we need a portal */}
			{isOpen && (
				<FloatingPortal id="comparison-modals">
					{/* Overlay that dims the background. Only used on smaller screens. */}
					<FloatingOverlay className="mobile-feature-explanation-overlay sm:hidden fixed z-40 inset-0 bg-black opacity-30" />
					{/* Popover for smaller screens. Appears at the bottom of the screen. */}
					<div className="mobile-feature-explanation sm:hidden fixed z-40 bottom-0 inset-x-0">
						<div className="overflow-hidden bg-white p-3 prose prose-sm max-w-none">
							{children}
						</div>
					</div>
					{/* Tooltip for larger screens. Appears as a tooltip next to the button. */}
					<div
						ref={refs.setFloating}
						{...getFloatingProps()}
						style={{ ...floatingStyles }}
						className="desktop-feature-explanation hidden sm:block z-10 bg-white rounded-lg shadow-lg ring-1 ring-black"
					>
						<FloatingArrow ref={arrowRef} context={context} />
						<div className="p-3 prose prose-sm max-w-sm">{children}</div>
					</div>
				</FloatingPortal>
			)}
		</div>
	);
}
