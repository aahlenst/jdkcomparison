import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {StrictMode} from "react";
import Layout from "@/components/layout";

// Next.js downloads the fonts and saves them locally. No requests are sent to Google by the browser.
// https://nextjs.org/docs/basic-features/font-optimization
import {Inter} from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	preload: true
});

export default function App({Component, pageProps}: AppProps) {
	return (
		<StrictMode>
			<Layout>
				{/*
					Found no better way to do connect next/font with Tailwind as of Next.js 13.0. See explanation on
					https://levelup.gitconnected.com/how-to-make-next-js-13s-optimized-fonts-work-with-tailwind-css-c3c5e57d38aa.
				*/}
				<style jsx global>
					{`
						:root {
							--inter-font: ${inter.style.fontFamily};
						}
					`}
				</style>
				<Component {...pageProps} />
			</Layout>
		</StrictMode>
	);
}
