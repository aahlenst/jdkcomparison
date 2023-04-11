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
				gc: {
					cms: {present: Present.YES},
					epsilon: {present: Present.NO},
					g1: {present: Present.YES},
					parallel: {present: Present.YES},
					serial: {present: Present.YES},
					shenandoah: {present: Present.NO},
					z: {present: Present.NO},
					custom: {text: "none"},
				},
				mac: {
					x64: {present: Present.YES},
					aarch64: {present: Present.NO},
					installers: {present: Present.YES},
				},
				windows: {
					x32: {present: Present.YES},
					x64: {present: Present.YES},
					aarch64: {present: Present.NO},
					installers: {present: Present.YES},
					containerImages: {present: Present.PARTIALLY, footnote: "f1849822-ba83-43eb-b541-f952d1ac7a48"},
				},
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
				gc: {
					cms: {present: Present.YES},
					epsilon: {present: Present.YES},
					g1: {present: Present.YES},
					parallel: {present: Present.YES},
					serial: {present: Present.YES},
					shenandoah: {present: Present.PARTIALLY, footnote: "7bdc2d88-3cb4-4879-830e-da51c7a662db"},
					z: {present: Present.PARTIALLY, footnote: "21ef23f8-3cc2-45e9-b6b3-5e278a43c51f"},
					custom: {text: "none"},
				},
				mac: {
					x64: {present: Present.YES},
					aarch64: {present: Present.YES},
					installers: {present: Present.YES},
				},
				windows: {
					x32: {present: Present.YES},
					x64: {present: Present.YES},
					aarch64: {present: Present.NO},
					installers: {present: Present.YES},
					containerImages: {present: Present.PARTIALLY, footnote: "f1849822-ba83-43eb-b541-f952d1ac7a48"},
				},
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
				gc: {
					cms: {present: Present.NO},
					epsilon: {present: Present.YES},
					g1: {present: Present.YES},
					parallel: {present: Present.YES},
					serial: {present: Present.YES},
					shenandoah: {present: Present.PARTIALLY, footnote: "7bdc2d88-3cb4-4879-830e-da51c7a662db"},
					z: {present: Present.PARTIALLY, footnote: "21ef23f8-3cc2-45e9-b6b3-5e278a43c51f"},
					custom: {text: "none"},
				},
				mac: {
					x64: {present: Present.YES},
					aarch64: {present: Present.YES},
					installers: {present: Present.YES},
				},
				windows: {
					x32: {present: Present.YES},
					x64: {present: Present.YES},
					aarch64: {present: Present.NO},
					installers: {present: Present.YES},
					containerImages: {present: Present.PARTIALLY, footnote: "f1849822-ba83-43eb-b541-f952d1ac7a48"},
				},
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
				gc: {
					cms: {present: Present.NO},
					epsilon: {present: Present.YES},
					g1: {present: Present.YES},
					parallel: {present: Present.YES},
					serial: {present: Present.YES},
					shenandoah: {present: Present.YES},
					z: {present: Present.YES},
					custom: {text: "none"},
				},
				mac: {
					x64: {present: Present.YES},
					aarch64: {present: Present.YES},
					installers: {present: Present.YES},
				},
				windows: {
					x32: {present: Present.NO},
					x64: {present: Present.YES},
					aarch64: {present: Present.NO},
					installers: {present: Present.YES},
					containerImages: {present: Present.YES},
				},
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
		},
		{
			id: "7bdc2d88-3cb4-4879-830e-da51c7a662db",
			markdown: "[Shenandoah GC is not available on all " +
				"platforms](https://wiki.openjdk.org/display/shenandoah) that Eclipse Temurin is offered for."
		},
		{
			id: "21ef23f8-3cc2-45e9-b6b3-5e278a43c51f",
			markdown: "[ZGC is not available on all platforms](https://wiki.openjdk.org/display/zgc) that Eclipse " +
				"Temurin is offered for. Furthermore, it is experimental on some platforms depending on the version."
		},
		{
			id: "f1849822-ba83-43eb-b541-f952d1ac7a48",
			markdown: "For a list of container images with Eclipse Temurin, see the [list of tags published on Docker" +
				"Hub](https://github.com/docker-library/docs/blob/master/eclipse-temurin/README.md#supported-tags-and-respective-dockerfile-links)."
		}
	]
};

// noinspection JSUnusedGlobalSymbols because we import dynamically
export default data;
