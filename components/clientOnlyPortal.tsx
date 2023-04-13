import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type ClientOnlyPortalProps = {
	selector: string;
};

/**
 * Renders wrapped components into a different part of the DOM using a React Portal.
 *
 * @param selector identifying the DOM node where the wrapped component should be rendered into.
 * @param children anything that can be rendered with React
 * @see https://github.com/vercel/next.js/tree/canary/examples/with-portals
 */
export function ClientOnlyPortal({
	selector,
	children,
}: PropsWithChildren<ClientOnlyPortalProps>) {
	const ref = useRef<Element | DocumentFragment | null | undefined>();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		ref.current = document.querySelector(selector);
		setMounted(true);
	}, [selector]);

	return mounted && ref.current ? createPortal(children, ref.current) : null;
}
