import nextMDX from "@next/mdx";

/** @type {import("next").NextConfig} */
const nextConfig = {
	output: "export",
	pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
	reactStrictMode: true,
	images: {
		unoptimized: true,
	},
};

export default nextMDX({
	extension: /\.mdx?$/,
	options: {
		providerImportSource: "@mdx-js/react",
		remarkPlugins: [],
		rehypePlugins: [],
	},
})(nextConfig);
