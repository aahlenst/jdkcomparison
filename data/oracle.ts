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
				virtualMachine: {text: "HotSpot"},
				classLibraries: {text: "OpenJDK"},
				javaFX: {present: Present.NO},
				flightRecorder: {present: Present.YES},
				javaWS: {present: Present.NO},
				aqavit: {present: Present.NO},
				tck: {present: Present.YES},
				editions: {text: "none"},
				customisations: {text: "none"},
				notableFeatures: {text: "none"},
				license: {text: "GPL-2.0-WITH-Classpath-exception-2.0"},
				freeInDevelopment: {present: Present.YES},
				freeInProduction: {present: Present.YES},
				paidSupport: {present: Present.NO},
				eolDate: {text: "2023-10"}
			}
		},
		{
			id: "oracle-jdk-8",
			information: {
				name: "Oracle JDK 8",
				version: 8,
				downloadSite: "https://www.oracle.com/java/technologies/downloads/#java8",
			},
			features: {
				virtualMachine: {text: "HotSpot"},
				classLibraries: {text: "OpenJDK"},
				javaFX: {present: Present.PARTIALLY},
				flightRecorder: {present: Present.YES},
				javaWS: {present: Present.YES},
				aqavit: {present: Present.NO},
				tck: {present: Present.YES},
				editions: {text: "JRE"},
				customisations: {text: "many"},
				notableFeatures: {text: "none"},
				license: {text: "Proprietary"},
				freeInDevelopment: {present: Present.YES},
				freeInProduction: {present: Present.NO},
				paidSupport: {present: Present.YES},
				eolDate: {text: "2030-12", footnote: "e51a53a9-3309-4cbe-8bde-39b652246385"}
			}
		},
		{
			id: "oracle-jdk-11",
			information: {
				name: "Oracle JDK 11",
				version: 11,
				downloadSite: "https://www.oracle.com/java/technologies/downloads/#java11",
			},
			features: {
				virtualMachine: {text: "HotSpot"},
				classLibraries: {text: "OpenJDK"},
				javaFX: {present: Present.NO},
				flightRecorder: {present: Present.YES},
				javaWS: {present: Present.NO},
				aqavit: {present: Present.NO},
				tck: {present: Present.YES},
				editions: {text: "none"},
				customisations: {text: "unknown"},
				notableFeatures: {text: "none"},
				license: {text: "Proprietary"},
				freeInDevelopment: {present: Present.YES},
				freeInProduction: {present: Present.NO},
				paidSupport: {present: Present.YES},
				eolDate: {text: "2026-09"}
			}
		},
		{
			id: "oracle-jdk-17",
			information: {
				name: "Oracle JDK 17",
				version: 17,
				downloadSite: "https://www.oracle.com/java/technologies/downloads/#java17",
			},
			features: {
				virtualMachine: {text: "HotSpot"},
				classLibraries: {text: "OpenJDK"},
				javaFX: {present: Present.NO},
				flightRecorder: {present: Present.YES},
				javaWS: {present: Present.NO},
				aqavit: {present: Present.NO},
				tck: {present: Present.YES},
				editions: {text: "none"},
				customisations: {text: "unknown"},
				notableFeatures: {text: "none"},
				license: {text: "Proprietary"},
				freeInDevelopment: {present: Present.YES},
				freeInProduction: {present: Present.YES},
				paidSupport: {present: Present.YES},
				eolDate: {text: "2024-09"}
			}
		},
		{
			id: "oracle-jdk-20",
			information: {
				name: "Oracle JDK 20",
				version: 20,
				downloadSite: "https://www.oracle.com/java/technologies/downloads/#java20",
			},
			features: {
				virtualMachine: {text: "HotSpot"},
				classLibraries: {text: "OpenJDK"},
				javaFX: {present: Present.NO},
				flightRecorder: {present: Present.YES},
				javaWS: {present: Present.NO},
				aqavit: {present: Present.NO},
				tck: {present: Present.YES},
				editions: {text: "none"},
				customisations: {text: "unknown"},
				notableFeatures: {text: "none"},
				license: {text: "Proprietary"},
				freeInDevelopment: {present: Present.YES},
				freeInProduction: {present: Present.YES},
				paidSupport: {present: Present.YES},
				eolDate: {text: "2023-09"}
			}
		},
	],
	footnotes: [
		{
			id: "e51a53a9-3309-4cbe-8bde-39b652246385",
			markdown: "Oracle plans to discontinue support for certain technologies like JavaFX at an earlier date. " +
				"For details, see [Java Client Roadmap " +
				"Update](https://www.oracle.com/technetwork/java/javase/javaclientroadmapupdatev2020may-6548840.pdf)."
		},
	]
};

// noinspection JSUnusedGlobalSymbols because we import dynamically
export default data;
