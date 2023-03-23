import {Present, Vendor} from "@/src/vendorDataTypes";

export const data: Vendor = {
	vendor: "Oracle",
	countryOfOrigin: "USA",
	website: "https://oracle.com/java",
	jdks: [
		{
			id: "openjdk-20",
			information: {
				name: "OpenJDK 20",
				version: 20,
				downloadSite: "https://jdk.java.net/20",
			},
			features: {
				javaFX: {present: Present.NO},
				flightRecorder: {present: Present.YES},
				javaWS: {present: Present.NO},
				paidSupport: {present: Present.NO},
				eolDate: {text: "2023-10"}
			}
		},
	],
	footnotes: []
};

// noinspection JSUnusedGlobalSymbols because we import dynamically
export default data;
