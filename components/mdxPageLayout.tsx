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
import { PropsWithChildren } from "react";
import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";
import { Heading } from "@/components/heading";

export type PageMetadata = {
	lead?: string;
	title: string;
};

export type MDXPageLayoutProps = {
	meta: PageMetadata;
};

const components = {
	h1: (props: PropsWithChildren) => Heading(1, props),
	h2: (props: PropsWithChildren) => Heading(2, props),
	h3: (props: PropsWithChildren) => Heading(3, props),
	h4: (props: PropsWithChildren) => Heading(4, props),
	h5: (props: PropsWithChildren) => Heading(5, props),
	h6: (props: PropsWithChildren) => Heading(6, props),
};

export function MDXPageLayout({ meta, children }: PropsWithChildren<MDXPageLayoutProps>) {
	return (
		<>
			<Head>
				<title>{`${meta.title} – JDK Comparison`}</title>
			</Head>
			<main className="bg-white px-6 py-10 lg:px-8">
				<div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
					{meta.lead && (
						<p className="text-base font-semibold leading-7 text-red-600">
							{meta.lead}
						</p>
					)}
					<h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						{meta.title}
					</h1>
					<div className="mt-10 max-w-2xl prose">
						<MDXProvider components={components}>{children}</MDXProvider>
					</div>
				</div>
			</main>
		</>
	);
}
