/*
 * Copyright 2023 the original author or authors.
 *
 * This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of
 * this license, visit http://creativecommons.org/licenses/by-sa/4.0/ or send a letter to Creative Commons, PO Box 1866,
 * Mountain View, CA 94042, USA.
 */
import { Present, Vendor } from "@/src/vendorDataTypes";

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
				virtualMachine: { text: "HotSpot" },
				classLibraries: { text: "OpenJDK" },
				javaFX: { present: Present.NO },
				flightRecorder: { present: Present.YES },
				javaWS: { present: Present.NO },
				gc: {
					cms: { present: Present.YES },
					epsilon: { present: Present.NO },
					g1: { present: Present.YES },
					parallel: { present: Present.YES },
					serial: { present: Present.YES },
					shenandoah: { present: Present.NO },
					z: { present: Present.NO },
					custom: { text: "none" },
				},
				linux: {
					x32: { present: Present.NO },
					x64: { present: Present.YES },
					x64Musl: { present: Present.YES },
					aarch64: { present: Present.YES },
					aarch64Musl: { present: Present.NO },
					aarch32: { present: Present.YES },
					ppc64: { present: Present.YES },
					riscv64: { present: Present.NO },
					s390x: { present: Present.NO },
					apk: { present: Present.YES },
					deb: { present: Present.YES },
					rpm: { present: Present.YES },
					containerImages: { present: Present.YES },
				},
				mac: {
					x64: { present: Present.YES },
					aarch64: { present: Present.NO },
					installers: { present: Present.YES },
				},
				windows: {
					x32: { present: Present.YES },
					x64: { present: Present.YES },
					aarch64: { present: Present.NO },
					installers: { present: Present.YES },
					containerImages: {
						present: Present.PARTIALLY,
						footnote: "f1849822-ba83-43eb-b541-f952d1ac7a48",
					},
				},
				otherPlatforms: {
					aixPPC: { present: Present.YES },
					solarisSPARC: { present: Present.YES },
					solarisx64: { present: Present.YES },
				},
				aqavit: { present: Present.YES },
				tck: { present: Present.YES },
				editions: { text: "JRE" },
				// No customisations apart from a few extra backports and a custom trust store.
				customisations: {
					text: "few",
					footnote: "b85fc239-060a-4008-ade1-cff1f029ebaf",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: {
					present: Present.YES,
					footnote: "d2ecefd1-6d2a-4621-a5a7-f425acae6973",
				},
				// Some Eclipse Adoptium members provide support for Temurin. So they are not third parties
				// (rating "no") but also not first parties ("yes"). As a compromise, rate it as "partially".
				paidSupport: {
					present: Present.PARTIALLY,
					footnote: "08a6428c-6fba-4617-8f9b-55b3ddb4afeb",
				},
				eolDate: {
					text: "2026-11",
					footnote: "62fd52c0-82d0-468a-a413-38277b35bd30",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "1-2 weeks" },
				updateTypes: { text: "no/free" },
				remarks: { text: "none" },
			},
		},
		{
			id: "eclipse-temurin-11",
			information: {
				name: "Eclipse Temurin 11",
				version: 11,
				downloadSite: "https://adoptium.net/temurin/releases/?version=11",
			},
			features: {
				virtualMachine: { text: "HotSpot" },
				classLibraries: { text: "OpenJDK" },
				javaFX: { present: Present.NO },
				flightRecorder: { present: Present.YES },
				javaWS: { present: Present.NO },
				gc: {
					cms: { present: Present.YES },
					epsilon: { present: Present.YES },
					g1: { present: Present.YES },
					parallel: { present: Present.YES },
					serial: { present: Present.YES },
					shenandoah: {
						present: Present.PARTIALLY,
						footnote: "7bdc2d88-3cb4-4879-830e-da51c7a662db",
					},
					z: {
						present: Present.PARTIALLY,
						footnote: "21ef23f8-3cc2-45e9-b6b3-5e278a43c51f",
					},
					custom: { text: "none" },
				},
				linux: {
					x32: { present: Present.NO },
					x64: { present: Present.YES },
					x64Musl: { present: Present.YES },
					aarch64: { present: Present.YES },
					aarch64Musl: { present: Present.NO },
					aarch32: { present: Present.YES },
					ppc64: { present: Present.YES },
					riscv64: { present: Present.NO },
					s390x: { present: Present.YES },
					apk: { present: Present.YES },
					deb: { present: Present.YES },
					rpm: { present: Present.YES },
					containerImages: { present: Present.YES },
				},
				mac: {
					x64: { present: Present.YES },
					aarch64: { present: Present.YES },
					installers: { present: Present.YES },
				},
				windows: {
					x32: { present: Present.YES },
					x64: { present: Present.YES },
					aarch64: { present: Present.NO },
					installers: { present: Present.YES },
					containerImages: {
						present: Present.PARTIALLY,
						footnote: "f1849822-ba83-43eb-b541-f952d1ac7a48",
					},
				},
				otherPlatforms: {
					aixPPC: { present: Present.YES },
					solarisSPARC: { present: Present.YES },
					solarisx64: { present: Present.YES },
				},
				aqavit: { present: Present.YES },
				tck: { present: Present.YES },
				editions: { text: "JRE" },
				// No customisations apart from a few extra backports and a custom trust store.
				customisations: {
					text: "few",
					footnote: "b85fc239-060a-4008-ade1-cff1f029ebaf",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: {
					present: Present.YES,
					footnote: "d2ecefd1-6d2a-4621-a5a7-f425acae6973",
				},
				// Some Eclipse Adoptium members provide support for Temurin. So they are not third parties
				// (rating "no") but also not first parties ("yes"). As a compromise, rate it as "partially".
				paidSupport: {
					present: Present.PARTIALLY,
					footnote: "08a6428c-6fba-4617-8f9b-55b3ddb4afeb",
				},
				eolDate: {
					text: "2027-10",
					footnote: "62fd52c0-82d0-468a-a413-38277b35bd30",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "1-2 weeks" },
				updateTypes: { text: "no/free" },
				remarks: { text: "none" },
			},
		},
		{
			id: "eclipse-temurin-17",
			information: {
				name: "Eclipse Temurin 17",
				version: 17,
				downloadSite: "https://adoptium.net/temurin/releases/?version=17",
			},
			features: {
				virtualMachine: { text: "HotSpot" },
				classLibraries: { text: "OpenJDK" },
				javaFX: { present: Present.NO },
				flightRecorder: { present: Present.YES },
				javaWS: { present: Present.NO },
				gc: {
					cms: { present: Present.NO },
					epsilon: { present: Present.YES },
					g1: { present: Present.YES },
					parallel: { present: Present.YES },
					serial: { present: Present.YES },
					shenandoah: {
						present: Present.PARTIALLY,
						footnote: "7bdc2d88-3cb4-4879-830e-da51c7a662db",
					},
					z: {
						present: Present.PARTIALLY,
						footnote: "21ef23f8-3cc2-45e9-b6b3-5e278a43c51f",
					},
					custom: { text: "none" },
				},
				linux: {
					x32: { present: Present.NO },
					x64: { present: Present.YES },
					x64Musl: { present: Present.YES },
					aarch64: { present: Present.YES },
					aarch64Musl: { present: Present.NO },
					aarch32: { present: Present.YES },
					ppc64: { present: Present.YES },
					riscv64: { present: Present.NO },
					s390x: { present: Present.YES },
					apk: { present: Present.YES },
					deb: { present: Present.YES },
					rpm: { present: Present.YES },
					containerImages: { present: Present.YES },
				},
				mac: {
					x64: { present: Present.YES },
					aarch64: { present: Present.YES },
					installers: { present: Present.YES },
				},
				windows: {
					x32: { present: Present.YES },
					x64: { present: Present.YES },
					aarch64: { present: Present.NO },
					installers: { present: Present.YES },
					containerImages: {
						present: Present.PARTIALLY,
						footnote: "f1849822-ba83-43eb-b541-f952d1ac7a48",
					},
				},
				otherPlatforms: {
					aixPPC: { present: Present.YES },
					solarisSPARC: { present: Present.NO },
					solarisx64: { present: Present.NO },
				},
				aqavit: { present: Present.YES },
				tck: { present: Present.YES },
				editions: { text: "JRE" },
				// No customisations apart from a few extra backports and a custom trust store.
				customisations: {
					text: "few",
					footnote: "b85fc239-060a-4008-ade1-cff1f029ebaf",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: {
					present: Present.YES,
					footnote: "d2ecefd1-6d2a-4621-a5a7-f425acae6973",
				},
				// Some Eclipse Adoptium members provide support for Temurin. So they are not third parties
				// (rating "no") but also not first parties ("yes"). As a compromise, rate it as "partially".
				paidSupport: {
					present: Present.PARTIALLY,
					footnote: "08a6428c-6fba-4617-8f9b-55b3ddb4afeb",
				},
				eolDate: {
					text: "2027-10",
					footnote: "62fd52c0-82d0-468a-a413-38277b35bd30",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "1-2 weeks" },
				updateTypes: { text: "no/free" },
				remarks: { text: "none" },
			},
		},
		{
			id: "eclipse-temurin-21",
			information: {
				name: "Eclipse Temurin 21",
				version: 21,
				downloadSite: "https://adoptium.net/temurin/releases/?version=21",
			},
			features: {
				virtualMachine: { text: "HotSpot" },
				classLibraries: { text: "OpenJDK" },
				javaFX: { present: Present.NO },
				flightRecorder: { present: Present.YES },
				javaWS: { present: Present.NO },
				gc: {
					cms: { present: Present.NO },
					epsilon: { present: Present.YES },
					g1: { present: Present.YES },
					parallel: { present: Present.YES },
					serial: { present: Present.YES },
					shenandoah: {
						present: Present.PARTIALLY,
						footnote: "7bdc2d88-3cb4-4879-830e-da51c7a662db",
					},
					z: {
						present: Present.PARTIALLY,
						footnote: "21ef23f8-3cc2-45e9-b6b3-5e278a43c51f",
					},
					custom: { text: "none" },
				},
				linux: {
					x32: { present: Present.NO },
					x64: { present: Present.YES },
					x64Musl: { present: Present.YES },
					aarch64: { present: Present.YES },
					aarch64Musl: { present: Present.YES },
					aarch32: { present: Present.NO },
					ppc64: { present: Present.YES },
					riscv64: { present: Present.NO },
					s390x: { present: Present.YES },
					apk: { present: Present.YES },
					deb: { present: Present.YES },
					rpm: { present: Present.YES },
					containerImages: { present: Present.YES },
				},
				mac: {
					x64: { present: Present.YES },
					aarch64: { present: Present.YES },
					installers: { present: Present.YES },
				},
				windows: {
					x32: { present: Present.NO },
					x64: { present: Present.YES },
					aarch64: { present: Present.NO },
					installers: { present: Present.YES },
					containerImages: { present: Present.YES },
				},
				otherPlatforms: {
					aixPPC: { present: Present.YES },
					solarisSPARC: { present: Present.NO },
					solarisx64: { present: Present.NO },
				},
				aqavit: { present: Present.YES },
				tck: { present: Present.YES },
				editions: { text: "JRE" },
				// No customisations apart from a few extra backports and a custom trust store.
				customisations: {
					text: "few",
					footnote: "b85fc239-060a-4008-ade1-cff1f029ebaf",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: {
					present: Present.YES,
					footnote: "d2ecefd1-6d2a-4621-a5a7-f425acae6973",
				},
				// Some Eclipse Adoptium members provide support for Temurin. So they are not third parties
				// (rating "no") but also not first parties ("yes"). As a compromise, rate it as "partially".
				paidSupport: {
					present: Present.PARTIALLY,
					footnote: "08a6428c-6fba-4617-8f9b-55b3ddb4afeb",
				},
				eolDate: {
					text: "2029-12",
					footnote: "62fd52c0-82d0-468a-a413-38277b35bd30",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "1-2 weeks" },
				updateTypes: { text: "no/free" },
				remarks: { text: "none" },
			},
		},
		{
			id: "eclipse-temurin-22",
			information: {
				name: "Eclipse Temurin 22",
				version: 22,
				downloadSite: "https://adoptium.net/temurin/releases/?version=22",
			},
			features: {
				virtualMachine: { text: "HotSpot" },
				classLibraries: { text: "OpenJDK" },
				javaFX: { present: Present.NO },
				flightRecorder: { present: Present.YES },
				javaWS: { present: Present.NO },
				gc: {
					cms: { present: Present.NO },
					epsilon: { present: Present.YES },
					g1: { present: Present.YES },
					parallel: { present: Present.YES },
					serial: { present: Present.YES },
					shenandoah: {
						present: Present.PARTIALLY,
						footnote: "7bdc2d88-3cb4-4879-830e-da51c7a662db",
					},
					z: {
						present: Present.PARTIALLY,
						footnote: "21ef23f8-3cc2-45e9-b6b3-5e278a43c51f",
					},
					custom: { text: "none" },
				},
				linux: {
					x32: { present: Present.NO },
					x64: { present: Present.YES },
					x64Musl: { present: Present.YES },
					aarch64: { present: Present.YES },
					aarch64Musl: { present: Present.YES },
					aarch32: { present: Present.NO },
					ppc64: { present: Present.YES },
					riscv64: { present: Present.YES },
					s390x: { present: Present.YES },
					apk: { present: Present.YES },
					deb: { present: Present.YES },
					rpm: { present: Present.YES },
					containerImages: { present: Present.YES },
				},
				mac: {
					x64: { present: Present.YES },
					aarch64: { present: Present.YES },
					installers: { present: Present.YES },
				},
				windows: {
					x32: { present: Present.NO },
					x64: { present: Present.YES },
					aarch64: { present: Present.NO },
					installers: { present: Present.YES },
					containerImages: { present: Present.YES },
				},
				otherPlatforms: {
					aixPPC: {
						present: Present.NO,
						footnote: "ff69868d-d4d2-4d05-80f9-3c4b944534ec",
					},
					solarisSPARC: { present: Present.NO },
					solarisx64: { present: Present.NO },
				},
				aqavit: { present: Present.YES },
				tck: { present: Present.YES },
				editions: { text: "JRE" },
				// No customisations apart from a few extra backports and a custom trust store.
				customisations: {
					text: "few",
					footnote: "b85fc239-060a-4008-ade1-cff1f029ebaf",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: {
					present: Present.YES,
					footnote: "d2ecefd1-6d2a-4621-a5a7-f425acae6973",
				},
				// Some Eclipse Adoptium members provide support for Temurin. So they are not third parties
				// (rating "no") but also not first parties ("yes"). As a compromise, rate it as "partially".
				paidSupport: {
					present: Present.PARTIALLY,
					footnote: "08a6428c-6fba-4617-8f9b-55b3ddb4afeb",
				},
				eolDate: {
					text: "2024-09",
					footnote: "62fd52c0-82d0-468a-a413-38277b35bd30",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "1-2 weeks" },
				updateTypes: { text: "no/free" },
				remarks: { text: "none" },
			},
		},
	],
	footnotes: [
		{
			id: "b85fc239-060a-4008-ade1-cff1f029ebaf",
			markdown:
				"To get a full list of changes, compare the respective OpenJDK `master` branch with the " +
				"`release` branch of Eclipse Temurin and ignore all changes by adoptopenjdk-github-bot and " +
				"eclipse-temurin-bot: JDK [8](https://github.com/adoptium/jdk8u/compare/master...release), " +
				"[11](https://github.com/adoptium/jdk11u/compare/master...release), " +
				"[17](https://github.com/adoptium/jdk17u/compare/master...release), " +
				"[21](https://github.com/adoptium/jdk21u/compare/master...release), and " +
				"[22](https://github.com/adoptium/jdk22/compare/master...release).",
		},
		{
			id: "08a6428c-6fba-4617-8f9b-55b3ddb4afeb",
			markdown:
				"[Paid support for Eclipse Temurin](https://adoptium.net/temurin/commercial-support/) is provided by " +
				"some of the companies backing Eclipse Adoptium.",
		},
		{
			id: "62fd52c0-82d0-468a-a413-38277b35bd30",
			markdown:
				"See the [Release Roadmap for Eclipse Temurin](https://adoptium.net/support/) for details.",
		},
		{
			id: "7bdc2d88-3cb4-4879-830e-da51c7a662db",
			markdown:
				"[Shenandoah GC is not available on all " +
				"platforms](https://wiki.openjdk.org/display/shenandoah) that Eclipse Temurin is offered for.",
		},
		{
			id: "21ef23f8-3cc2-45e9-b6b3-5e278a43c51f",
			markdown:
				"[ZGC is not available on all platforms](https://wiki.openjdk.org/display/zgc) that Eclipse " +
				"Temurin is offered for. Furthermore, it is experimental on some platforms depending on the version.",
		},
		{
			id: "f1849822-ba83-43eb-b541-f952d1ac7a48",
			markdown:
				"For a list of container images with Eclipse Temurin, see the [list of tags published on Docker" +
				"Hub](https://github.com/docker-library/docs/blob/master/eclipse-temurin/README.md#supported-tags-and-respective-dockerfile-links).",
		},
		{
			id: "d2ecefd1-6d2a-4621-a5a7-f425acae6973",
			markdown:
				"SBOMs are published in the [CycloneDX](https://cyclonedx.org/) format. They can be found on Eclipse " +
				"Temurin's GitHub Releases: [8](https://github.com/adoptium/temurin8-binaries/releases/), " +
				"[11](https://github.com/adoptium/temurin11-binaries/releases/), " +
				"[17](https://github.com/adoptium/temurin17-binaries/releases/), " +
				"[21](https://github.com/adoptium/temurin21-binaries/releases/), " +
				"[22](https://github.com/adoptium/temurin22-binaries/releases/).",
		},
		{
			id: "ff69868d-d4d2-4d05-80f9-3c4b944534ec",
			markdown:
				"[There are plans](https://adoptium.net/blog/2024/03/march-2024-jdk22-release/) to make Temurin 22 " +
				"available on AIX on PPC at a later date.",
		},
	],
};

// noinspection JSUnusedGlobalSymbols because we import dynamically
export default data;
