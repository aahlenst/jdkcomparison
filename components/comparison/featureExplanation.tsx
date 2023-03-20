import {PropsWithChildren, useState} from "react";
import {usePopper} from "react-popper";
import {Popover} from "@headlessui/react";
import {InfoIcon} from "../icons";

export function FeatureExplanation({children}: PropsWithChildren) {
	const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);
	const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
	const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null);
	const {styles, attributes} = usePopper(referenceElement, popperElement, {
		modifiers: [{name: "arrow", options: {element: arrowElement}}, {name: "offset", options: {offset: [0, 10]}}],
		placement: "right",
	});

	return (
		<>
			{/* Popover for small screens, appears at the bottom and spans the entire screen width. No Popper.js. */}
			<Popover className="block sm:hidden">
				<Popover.Button className="mobile-feature-explanation-toggle">
					<InfoIcon className="w-3.5 h-3.5 mx-2" role="img" aria-label="Show explanation">
						<title>Show explanation</title>
					</InfoIcon>
				</Popover.Button>
				<Popover.Overlay className="mobile-feature-explanation-overlay fixed inset-0 bg-black opacity-30"/>
				<Popover.Panel
					className="mobile-feature-explanation absolute bottom-0 inset-x-0 "
				>
					<div
						className="overflow-hidden bg-white p-3 prose prose-sm">
						{children}
					</div>
				</Popover.Panel>
			</Popover>
			{/* Popover for larger screens, appears as a tooltip, driven by Popper.js */}
			<Popover className="hidden sm:block">
				<Popover.Button ref={setReferenceElement} className="desktop-feature-explanation-toggle">
					<InfoIcon className="w-3.5 h-3.5 mx-2" role="img" aria-label="Show explanation">
						<title>Show explanation</title>
					</InfoIcon>
				</Popover.Button>
				<Popover.Panel
					ref={setPopperElement}
					style={styles.popper}
					{...attributes.popper}
					className="desktop-feature-explanation absolute left-1/2 z-10 w-screen max-w-sm -translate-x-1/2 transform">
					<div
						className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-20 bg-white p-3 prose prose-sm">
						{children}
					</div>
					{/* The small arrow on the left side of popover that points towards the info button. */}
					<div
						ref={setArrowElement}
						style={styles.arrow}
						{...attributes.arrow}
						className="absolute w-[10px] h-[10px] -z-10 left-[-5px] before:absolute before:w-[10px] before:h-[10px] before:-z-10 before:content-[''] before:rotate-45 before:bg-black before:opacity-20"
					/>
				</Popover.Panel>
			</Popover>
		</>
	);
}
