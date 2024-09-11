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
import { slug } from "github-slugger";
import { LinkIcon } from "@/components/icons";
import { createElement, PropsWithChildren } from "react";

export function Heading(level: number, props: PropsWithChildren) {
	const generatedSlug = slug(props.children as string);
	const innerElements = (
		<>
			<a
				className="absolute -ml-8 flex items-center opacity-0 border-0 group-hover:opacity-100"
				href={`#${generatedSlug}`}
			>
				<div className="w-6 h-6 text-red-600 ring-1 ring-red-900/5 rounded-md shadow-sm flex items-center justify-center hover:ring-red-900/10 hover:shadow hover:text-red-700">
					<LinkIcon className="w-4 h-4" fill="currentColor" aria-hidden="true" />
				</div>
			</a>
			<span>{props.children}</span>
		</>
	);
	return createElement(
		`h${level}`,
		{ id: generatedSlug, className: "group flex whitespace-pre-wrap items-center -ml-4 pl-4" },
		innerElements,
	);
}
