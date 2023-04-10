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
				aqavit: {present: Present.YES},
				tck: {present: Present.YES},
				editions: {text: "JRE"},
				// No customisations apart from a few extra backports and a custom trust store.
				customisations: {text: "few", footnote: "b85fc239-060a-4008-ade1-cff1f029ebaf"},
				notableFeatures: {text: "none"},
				license: {text: "GPLv2+CPE"},
				freeInDevelopment: {present: Present.YES},
				freeInProduction: {present: Present.YES},
				// Some Eclipse Adoptium members provide support for Temurin. So they are not third parties
				// (rating "no") but also not first parties ("yes"). As a compromise, rate it as "partially".
				paidSupport: {present: Present.PARTIALLY, footnote: "08a6428c-6fba-4617-8f9b-55b3ddb4afeb"},
				eolDate: {text: "2026-11", footnote: "62fd52c0-82d0-468a-a413-38277b35bd30"},
				releaseSchedule: {text: "OpenJDK"},
				releaseDelay: {text: "1-2 weeks"},
			}
		},
		{
			id: "eclipse-temurin-11",
			information: {
				name: "Eclipse Temurin 11",
				version: 11,
				downloadSite: "https://adoptium.net/temurin/releases/?version=11",
			},
			features: {
				virtualMachine: {text: "HotSpot"},
				classLibraries: {text: "OpenJDK"},
				javaFX: {present: Present.NO},
				flightRecorder: {present: Present.YES},
				javaWS: {present: Present.NO},
				aqavit: {present: Present.YES},
				tck: {present: Present.YES},
				editions: {text: "JRE"},
				// No customisations apart from a few extra backports and a custom trust store.
				customisations: {text: "few", footnote: "b85fc239-060a-4008-ade1-cff1f029ebaf"},
				notableFeatures: {text: "none"},
				license: {text: "GPLv2+CPE"},
				freeInDevelopment: {present: Present.YES},
				freeInProduction: {present: Present.YES},
				// Some Eclipse Adoptium members provide support for Temurin. So they are not third parties
				// (rating "no") but also not first parties ("yes"). As a compromise, rate it as "partially".
				paidSupport: {present: Present.PARTIALLY, footnote: "08a6428c-6fba-4617-8f9b-55b3ddb4afeb"},
				eolDate: {text: "2024-10", footnote: "62fd52c0-82d0-468a-a413-38277b35bd30"},
				releaseSchedule: {text: "OpenJDK"},
				releaseDelay: {text: "1-2 weeks"},
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
				aqavit: {present: Present.YES},
				tck: {present: Present.YES},
				editions: {text: "JRE"},
				// No customisations apart from a few extra backports and a custom trust store.
				customisations: {text: "few", footnote: "b85fc239-060a-4008-ade1-cff1f029ebaf"},
				notableFeatures: {text: "none"},
				license: {text: "GPLv2+CPE"},
				freeInDevelopment: {present: Present.YES},
				freeInProduction: {present: Present.YES},
				// Some Eclipse Adoptium members provide support for Temurin. So they are not third parties
				// (rating "no") but also not first parties ("yes"). As a compromise, rate it as "partially".
				paidSupport: {present: Present.PARTIALLY, footnote: "08a6428c-6fba-4617-8f9b-55b3ddb4afeb"},
				eolDate: {text: "2027-10", footnote: "62fd52c0-82d0-468a-a413-38277b35bd30"},
				releaseSchedule: {text: "OpenJDK"},
				releaseDelay: {text: "1-2 weeks"},
			}
		},
		{
			id: "eclipse-temurin-20",
			information: {
				name: "Eclipse Temurin 20",
				version: 20,
				downloadSite: "https://adoptium.net/temurin/releases/?version=20",
			},
			features: {
				virtualMachine: {text: "HotSpot"},
				classLibraries: {text: "OpenJDK"},
				javaFX: {present: Present.NO},
				flightRecorder: {present: Present.YES},
				javaWS: {present: Present.NO},
				aqavit: {present: Present.YES},
				tck: {present: Present.YES},
				editions: {text: "JRE"},
				// No customisations apart from a few extra backports and a custom trust store.
				customisations: {text: "few", footnote: "b85fc239-060a-4008-ade1-cff1f029ebaf"},
				notableFeatures: {text: "none"},
				license: {text: "GPLv2+CPE"},
				freeInDevelopment: {present: Present.YES},
				freeInProduction: {present: Present.YES},
				// Some Eclipse Adoptium members provide support for Temurin. So they are not third parties
				// (rating "no") but also not first parties ("yes"). As a compromise, rate it as "partially".
				paidSupport: {present: Present.PARTIALLY, footnote: "08a6428c-6fba-4617-8f9b-55b3ddb4afeb"},
				eolDate: {text: "2023-09", footnote: "62fd52c0-82d0-468a-a413-38277b35bd30"},
				releaseSchedule: {text: "OpenJDK"},
				releaseDelay: {text: "1-2 weeks"},
			}
		},
	],
	footnotes: [
		{
			id: "b85fc239-060a-4008-ade1-cff1f029ebaf",
			markdown: "To get a full list of changes, compare the respective OpenJDK `master` branch with the " +
				"`release` branch of Eclipse Temurin and ignore all changes by adoptopenjdk-github-bot and " +
				"eclipse-temurin-bot: JDK [8](https://github.com/adoptium/jdk8u/compare/master...release), " +
				"[11](https://github.com/adoptium/jdk11u/compare/master...release), " +
				"[17](https://github.com/adoptium/jdk17u/compare/master...release), and " +
				"[20](https://github.com/adoptium/jdk20/compare/master...release)."
		},
		{
			id: "08a6428c-6fba-4617-8f9b-55b3ddb4afeb",
			markdown: "Paid support is provided by some of the companies backing Eclipse Adoptium, for example, " +
				"[Azul](https://www.azul.com/products/core/) and " +
				"[IBM](https://www.ibm.com/support/pages/ibm-runtimes-business)."
		},
		{
			id: "62fd52c0-82d0-468a-a413-38277b35bd30",
			markdown: "See the [Release Roadmap for Eclipse Temurin](https://adoptium.net/support/) for details."
		}
	]
};

// noinspection JSUnusedGlobalSymbols because we import dynamically
export default data;
