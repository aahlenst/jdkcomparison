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
import {Footnotes} from "@/components/comparison/footnotes";

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
				<ComparisonProvider filters={filters} data={data} footnotes={footnotes}>
					<Filters/>
					<ComparisonTable/>
					<Footnotes footnotes={footnotes}/>
				</ComparisonProvider>
			</main>
		</>
	);
}

export const getStaticProps: GetStaticProps = async (context) => {
	// Next.js 13 only supports dynamic imports with string literals. There is currently no way to trick it into
	// accepting any kind of variables. Therefore, dynamic data loading is not possible. For details, see
	// https://nextjs.org/docs/advanced-features/dynamic-import.
	const testData: Vendor[] = [
		(await import("@/testdata/coffeecorp")).default,
		(await import("@/testdata/dukecorp")).default,
	];
	const productionData: Vendor[] = [
		(await import("@/data/eclipse")).default,
		(await import("@/data/oracle")).default,
	];

	let data: Vendor[];
	if (process.env.DATA_SOURCE === "data") {
		data = productionData;
	} else if (process.env.DATA_SOURCE === "testdata") {
		data = testData;
	} else {
		throw new Error(`Unknown process.env.DATA_SOURCE: ${process.env.DATA_SOURCE}`);
	}

	const {productsInComparison, footnotes} = extractComparisonData(data);

	return {
		props: {
			data: productsInComparison,
			footnotes: footnotes
		}
	};
};
