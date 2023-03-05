import Head from "next/head";
import styles from "@/styles/Home.module.css";
import {GetStaticProps} from "next";
import React from "react";
import {ComparisonTable} from "@/components/comparison/comparisonTable";
import {Vendor} from "@/src/vendorDataTypes";
import {deriveFilters, extractComparisonData} from "@/src/comparison";
import {Model} from "@/src/modelTypes";
import {ComparisonProvider} from "@/components/comparison/comparisonContext";

type ComparisonProps = {
	filters: Model.Filter[],
	data: Model.FeatureComparison[],
	footnotes: Model.Footnote[]
}

export default function ComparisonPage({filters, data, footnotes}: ComparisonProps) {
	return (
		<>
			<Head>
				<title>JDK Comparison</title>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<main className={styles.main}>
				<ComparisonProvider filters={filters} data={data} footnotes={footnotes}>
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
	const filters: Model.Filter[] = deriveFilters(vendorData);

	return {
		props: {
			filters: filters,
			data: productsInComparison,
			footnotes: footnotes
		}
	};
};
