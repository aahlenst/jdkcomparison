import Head from "next/head";
import {GetStaticProps} from "next";
import React from "react";
import {ComparisonTable} from "@/components/comparison/comparisonTable";
import {Vendor} from "@/src/vendorDataTypes";
import {extractComparisonData} from "@/src/comparison";
import {Model} from "@/src/modelTypes";
import {ComparisonProvider} from "@/components/comparison/comparisonContext";
import {Filters} from "@/components/comparison/filters";
import {createFilters} from "@/src/filter";

type ComparisonProps = {
	data: Model.FeatureComparison[],
	footnotes: Model.Footnote[]
}

export default function ComparisonPage({data, footnotes}: ComparisonProps) {
	const filters: Model.Filter[] = createFilters(data);
	return (
		<>
			<Head>
				<title>JDK Comparison</title>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<main>
				<h1 className="text-3xl mb-2 font-bold underline">JDK Comparison</h1>
				<ComparisonProvider filters={filters} data={data} footnotes={footnotes}>
					<Filters/>
					<ComparisonTable/>
				</ComparisonProvider>
			</main>
		</>
	);
}

export const getStaticProps: GetStaticProps = async (context) => {
	// Next.js 13 only supports dynamic imports with string literals. There is currently no way to trick it into
	// accepting any kind of variables. Therefore, dynamic data loading is not possible. For details, see
	// https://nextjs.org/docs/advanced-features/dynamic-import.
	const vendorData: Vendor[] = [
		(await import("@/testdata/coffeecorp")).default,
		(await import("@/testdata/dukecorp")).default,
	];

	const {productsInComparison, footnotes} = extractComparisonData(vendorData);

	return {
		props: {
			data: productsInComparison,
			footnotes: footnotes
		}
	};
};
