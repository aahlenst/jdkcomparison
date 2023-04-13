import {PropsWithChildren} from "react";
import Head from "next/head";

export type PageMetadata = {
	lead?: string
	title: string
}

export type MDXPageLayoutProps = {
	meta: PageMetadata
}

export function MDXPageLayout({meta, children}: PropsWithChildren<MDXPageLayoutProps>) {
	return (
		<>
			<Head>
				<title>{`${meta.title} – JDK Comparison`}</title>
			</Head>
			<main className="bg-white px-6 py-10 lg:px-8">
				<div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
					{meta.lead && (
						<p className="text-base font-semibold leading-7 text-red-600">{meta.lead}</p>
					)}
					<h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{meta.title}</h1>
					<div className="mt-10 max-w-2xl prose">
						{children}
					</div>
				</div>
			</main>
		</>
	);
}
