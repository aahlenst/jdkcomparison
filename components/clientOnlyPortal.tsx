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
