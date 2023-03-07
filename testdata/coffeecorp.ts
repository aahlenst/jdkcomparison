import {Present, Vendor} from "@/src/vendorDataTypes";

export const data: Vendor = {
	vendor: "Coffeecorp",
	countryOfOrigin: "Coffeeland",
	website: "https://coffeecorp.com/",
	jdks: [
		{
			id: "coffeecorp-jdk-8",
			information: {
				name: "Coffeecorp JDK 8",
				version: 8,
				downloadSite: "https://coffeecorp.com/",
			},
			features: {
				javaFX: {present: Present.YES, footnote: "6a296137-f4e4-4d34-b64e-3c95375f3db0"},
				flightRecorder: {present: Present.YES},
				paidSupport: {present: Present.NO},
				eolDate: {text: "2026-10"}
			}
		},
		{
			id: "coffeecorp-jdk-17",
			information: {
				name: "Coffeecorp JDK 17",
				version: 17,
				downloadSite: "https://coffeecorp.com/",
			},
			features: {
				javaFX: {present: Present.NO, footnote: "6a296137-f4e4-4d34-b64e-3c95375f3db0"},
				flightRecorder: {present: Present.YES},
				paidSupport: {present: Present.NO},
				eolDate: {text: "2027-10"}
			}
		}
	],
	footnotes: [
		{
			id: "6a296137-f4e4-4d34-b64e-3c95375f3db0",
			markdown: "Some *clarifications* regarding JavaFX."
		}
	]
};

export default data;
