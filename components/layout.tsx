import React, { PropsWithChildren } from "react";
import { Navigation } from "@/components/navigation";
import Head from "next/head";

export default function Layout({ children }: PropsWithChildren) {
	return (
		<>
			<Head>
				<title>JDK Comparison</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navigation />
			<div className="relative top-16">{children}</div>
		</>
	);
}
