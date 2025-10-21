import defaultTheme from "tailwindcss/defaultTheme";

import aspectRatio from "@tailwindcss/aspect-ratio";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/** @type {import("tailwindcss").Config} */
export default {
	content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./pages/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--inter-font)", ...defaultTheme.fontFamily.sans],
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						a: {
							color: theme("colors.blue.600"),
							"&:hover": {
								textDecorationLine: "none",
							},
							"&:visited": {
								color: theme("colors.violet.600"),
							},
						},
					},
				},
			}),
		},
	},
	plugins: [aspectRatio, forms, typography],
};
