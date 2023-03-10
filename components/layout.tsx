import {PropsWithChildren} from "react";

// Next.js downloads the fonts and saves them locally. No requests are sent to Google by the browser.
// https://nextjs.org/docs/basic-features/font-optimization
import {Inter} from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export default function Layout({children}: PropsWithChildren) {
	return (
		<main className={`${inter.variable} font-sans`}>
			{children}
		</main>
	);
}
