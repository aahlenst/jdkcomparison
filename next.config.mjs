import nextMDX from "@next/mdx";

/** @type {import("next").NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
	reactStrictMode: true,
};

export default nextMDX({
	extension: /\.mdx?$/,
	options: {
		providerImportSource: "@mdx-js/react",
		remarkPlugins: [],
		rehypePlugins: [],
	},
})(nextConfig);
