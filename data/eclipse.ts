import {Present, Vendor} from "@/src/vendorDataTypes";

export const data: Vendor = {
	vendor: "Eclipse Foundation",
	countryOfOrigin: "Belgium",
	website: "https://adoptium.net/",
	jdks: [
		{
			id: "eclipse-temurin-8",
			information: {
				name: "Eclipse Temurin 8",
				version: 8,
				downloadSite: "https://adoptium.net/temurin/releases/?version=8",
			},
			features: {
				virtualMachine: {text: "HotSpot"},
				classLibraries: {text: "OpenJDK"},
				javaFX: {present: Present.NO},
				flightRecorder: {present: Present.YES},
				javaWS: {present: Present.NO},
				license: {text: "GPL-2.0-WITH-Classpath-exception-2.0"},
				freeInDevelopment: {present: Present.YES},
				freeInProduction: {present: Present.YES},
				// Some Eclipse Adoptium members provide support for Temurin. So they are not third parties
				// (rating "no") but also not first parties ("yes"). As a compromise, rate it as "partially".
				paidSupport: {present: Present.PARTIALLY, footnote: "08a6428c-6fba-4617-8f9b-55b3ddb4afeb"},
				eolDate: {text: "2026-11", footnote: "62fd52c0-82d0-468a-a413-38277b35bd30"}
			}
		},
		{
			id: "eclipse-temurin-17",
			information: {
				name: "Eclipse Temurin 17",
				version: 17,
				downloadSite: "https://adoptium.net/temurin/releases/?version=17",
			},
			features: {
				virtualMachine: {text: "HotSpot"},
				classLibraries: {text: "OpenJDK"},
				javaFX: {present: Present.NO},
				flightRecorder: {present: Present.YES},
				javaWS: {present: Present.NO},
				license: {text: "GPL-2.0-WITH-Classpath-exception-2.0"},
				freeInDevelopment: {present: Present.YES},
				freeInProduction: {present: Present.YES},
				// Some Eclipse Adoptium members provide support for Temurin. So they are not third parties
				// (rating "no") but also not first parties ("yes"). As a compromise, rate it as "partially".
				paidSupport: {present: Present.PARTIALLY, footnote: "08a6428c-6fba-4617-8f9b-55b3ddb4afeb"},
				eolDate: {text: "2027-10", footnote: "62fd52c0-82d0-468a-a413-38277b35bd30"}
			}
		}
	],
	footnotes: [
		{
			id: "08a6428c-6fba-4617-8f9b-55b3ddb4afeb",
			markdown: `Paid support is provided by some of the companies backing Eclipse Adoptium, for example,
[Azul](https://www.azul.com/products/core/) and [IBM](https://www.ibm.com/support/pages/ibm-runtimes-business)`
		},
		{
			id: "62fd52c0-82d0-468a-a413-38277b35bd30",
			markdown: "See the [Release Roadmap for Eclipse Temurin](https://adoptium.net/support/) for details."
		}
	]
};

// noinspection JSUnusedGlobalSymbols because we import dynamically
export default data;
