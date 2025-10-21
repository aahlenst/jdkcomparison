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
import Head from "next/head";
import { GetStaticProps } from "next";
import React from "react";
import { ComparisonTable } from "@/components/comparison/comparisonTable";
import { Vendor } from "@/src/vendorDataTypes";
import { extractComparisonData } from "@/src/comparison";
import { Model } from "@/src/modelTypes";
import { ComparisonProvider } from "@/components/comparison/comparisonContext";
import { Filters } from "@/components/comparison/filters";
import { createFilters } from "@/src/filter";

type ComparisonProps = {
	data: Model.FeatureComparison[];
	footnotes: Model.Footnote[];
};

export default function ComparisonPage({ data, footnotes }: ComparisonProps) {
	const filters: Model.Filter[] = createFilters(data);
	return (
		<>
			<Head>
				<title>JDK Comparison</title>
				<meta
					name="description"
					content="JDK Comparison allows you to compare JDKs of the most important vendors side-by-side. Filter and sort them by the features that interest you most, like garbage collectors or support."
				/>
			</Head>
			<main>
				<ComparisonProvider filters={filters} data={data} footnotes={footnotes}>
					<Filters />
					<ComparisonTable />
				</ComparisonProvider>
			</main>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	// Next.js 13 only supports dynamic imports with string literals. There is currently no way to trick it into
	// accepting any kind of variables. Therefore, dynamic data loading is not possible. For details, see
	// https://nextjs.org/docs/advanced-features/dynamic-import.
	const testData: Vendor[] = [
		(await import("@/testdata/coffeecorp")).default,
		(await import("@/testdata/dukecorp")).default,
	];
	const productionData: Vendor[] = [
		(await import("@/data/alibaba")).default,
		(await import("@/data/amazon")).default,
		(await import("@/data/azul")).default,
		(await import("@/data/bellsoft")).default,
		(await import("@/data/canonical")).default,
		(await import("@/data/eclipse")).default,
		(await import("@/data/ibm")).default,
		(await import("@/data/jetbrains")).default,
		(await import("@/data/microsoft")).default,
		(await import("@/data/oracle")).default,
		(await import("@/data/redhat")).default,
		(await import("@/data/sap")).default,
	];

	let data: Vendor[];
	if (process.env.DATA_SOURCE === "data") {
		data = productionData;
	} else if (process.env.DATA_SOURCE === "testdata") {
		data = testData;
	} else {
		throw new Error(`Unknown process.env.DATA_SOURCE: ${process.env.DATA_SOURCE}`);
	}

	const { productsInComparison, footnotes } = extractComparisonData(data);

	return {
		props: {
			data: productsInComparison,
			footnotes: footnotes,
		},
	};
};
