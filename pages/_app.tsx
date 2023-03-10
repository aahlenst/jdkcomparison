import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {StrictMode} from "react";
import Layout from "@/components/layout";

export default function App({Component, pageProps}: AppProps) {
	return (
		<StrictMode>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</StrictMode>
	);
}
