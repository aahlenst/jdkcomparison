import Head from "next/head";
import styles from "@/styles/Home.module.css";
import {GetStaticProps} from "next";
import React from "react";
import {ProductData} from "@/src/comparisonTypes";
import {ComparisonTable} from "@/components/comparison/comparisonTable";

type ComparisonProps = {
	productData: ProductData[]
}

export default function Comparison({productData}: ComparisonProps) {
	return (
		<>
			<Head>
				<title>JDK Comparison</title>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<main className={styles.main}>
				<ComparisonTable productData={productData}/>
			</main>
		</>
	);
}

export const getStaticProps: GetStaticProps = async (context) => {

	const productData: ProductData[] = [
		{
			id: "coffeecorp-jdk-20",
			jfx: {present: "yes"},
			jfr: {present: "no"},
			paidSupport: {present: "yes"},
			eolDate: {text: "2023-10"}
		},
		{
			id: "dukecorp-jdk-20",
			jfx: {present: "no"},
			jfr: {present: "yes"},
			paidSupport: {present: "no"},
			eolDate: {text: "2023-10"}
		}
	];

	return {
		props: {
			productData: productData
		}
	};
};
