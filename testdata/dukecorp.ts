import {Present, Vendor} from "@/src/vendorDataTypes";

export const data: Vendor = {
	vendor: "Dukecorp",
	countryOfOrigin: "United States of Duke",
	website: "https://dukecorp.com/",
	jdks: [
		{
			id: "dukecorp-jdk-17",
			information: {
				name: "Dukecorp JDK 17",
				version: 17,
				downloadSite: "https://dukecorp.com/jdk17",
			},
			features: {
				javaFX: {present: Present.NO},
				flightRecorder: {present: Present.YES},
				javaWS: {present: Present.NO},
				paidSupport: {present: Present.NO, footnote: "f4b31750-2c0d-4332-bfe7-6d30daa959a1"},
				eolDate: {text: "2027-10"}
			}
		}
	],
	footnotes: [
		{
			id: "f4b31750-2c0d-4332-bfe7-6d30daa959a1",
			markdown: "Some *remark* regarding paid support."
		}
	]
};

export default data;
