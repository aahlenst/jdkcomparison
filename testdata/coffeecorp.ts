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
				downloadSite: "https://coffeecorp.com/jdk8",
			},
			features: {
				virtualMachine: {text: "CoffeeVM"},
				classLibraries: {text: "OpenJDK"},
				javaFX: {present: Present.YES, footnote: "6a296137-f4e4-4d34-b64e-3c95375f3db0"},
				flightRecorder: {present: Present.NO},
				javaWS: {present: Present.NO},
				aqavit: {present: Present.YES},
				tck: {present: Present.YES},
				editions: {text: "JRE"},
				customisations: {text: "medium"},
				notableFeatures: {text: "none"},
				license: {text: "GPLv2+CPE"},
				freeInDevelopment: {present: Present.YES},
				freeInProduction: {present: Present.YES},
				paidSupport: {present: Present.NO},
				eolDate: {text: "2026-10"}
			}
		},
		{
			id: "coffeecorp-jdk-17",
			information: {
				name: "Coffeecorp JDK 17",
				version: 17,
				downloadSite: "https://coffeecorp.com/jdk17",
			},
			features: {
				virtualMachine: {text: "CoffeeVM"},
				classLibraries: {text: "OpenJDK"},
				javaFX: {present: Present.NO, footnote: "6a296137-f4e4-4d34-b64e-3c95375f3db0"},
				flightRecorder: {present: Present.YES},
				javaWS: {present: Present.NO},
				aqavit: {present: Present.YES},
				tck: {present: Present.YES},
				editions: {text: "JRE"},
				customisations: {text: "few"},
				notableFeatures: {text: "none"},
				license: {text: "GPLv2+CPE"},
				freeInDevelopment: {present: Present.YES},
				freeInProduction: {present: Present.YES},
				paidSupport: {present: Present.NO},
				eolDate: {text: "2027-10"}
			}
		}
	],
	footnotes: [
		{
			id: "6a296137-f4e4-4d34-b64e-3c95375f3db0",
			markdown: "Some **clarifications** regarding JavaFX that include a really long text because we hope to trigger a linebreak when this footnote is being displayed."
		}
	]
};

export default data;
