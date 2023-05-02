/*
 * Copyright 2023 the original author or authors.
 *
 * This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of
 * this license, visit http://creativecommons.org/licenses/by-sa/4.0/ or send a letter to Creative Commons, PO Box 1866,
 * Mountain View, CA 94042, USA.
 */
import { Present, Vendor } from "@/src/vendorDataTypes";

export const data: Vendor = {
	vendor: "SAP",
	countryOfOrigin: "Germany",
	website: "https://sap.github.io/SapMachine/",
	jdks: [
		{
			id: "sapmachine-11",
			information: {
				name: "SapMachine 11",
				version: 11,
				downloadSite: "https://sap.github.io/SapMachine/",
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
					shenandoah: { present: Present.NO },
					z: {
						present: Present.PARTIALLY,
						footnote: "7449bc96-4cef-4e0a-bc49-d2ce256683bf",
					},
					custom: { text: "none" },
				},
				mac: {
					x64: { present: Present.YES },
					aarch64: { present: Present.YES },
					installers: {
						present: Present.NO,
						footnote: "2f3ac1c8-77cc-46a1-830f-18f9a19e991c",
					},
				},
				linux: {
					x32: { present: Present.NO },
					x64: { present: Present.YES },
					x64Musl: { present: Present.NO },
					aarch64: { present: Present.YES },
					aarch64Musl: { present: Present.NO },
					aarch32: { present: Present.NO },
					ppc64: { present: Present.YES },
					riscv64: { present: Present.NO },
					s390x: { present: Present.NO },
					apk: { present: Present.NO },
					// Official docs do not list all platforms. But the packages are used for the container images.
					deb: { present: Present.YES },
					rpm: {
						// Only x86, 64-bit
						present: Present.PARTIALLY,
						footnote: "2c2cc179-3ff9-4c15-a974-240cbf339c99",
					},
					containerImages: { present: Present.YES },
				},
				windows: {
					x32: { present: Present.NO },
					x64: { present: Present.YES },
					aarch64: { present: Present.NO },
					installers: { present: Present.YES },
					containerImages: { present: Present.NO },
				},
				otherPlatforms: {
					aixPPC: { present: Present.NO },
					solarisSPARC: { present: Present.NO },
					solarisx64: { present: Present.NO },
				},
				aqavit: { present: Present.NO },
				tck: { present: Present.YES },
				editions: { text: "JRE" },
				customisations: {
					text: "few",
					footnote: "69b47908-13e0-497c-b995-c0cf573f3f0f",
				},
				notableFeatures: {
					text: "High Memory Reports, MallocTracer, Vitals",
					footnote: "18e1d490-3582-46be-9340-271140e3ada5",
				},
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: { present: Present.NO },
				paidSupport: {
					present: Present.PARTIALLY,
					footnote: "0484cb17-6266-4d75-9e44-8021b75b7bb4",
				},
				eolDate: {
					text: "2024-12",
					footnote: "13ade37e-7160-4316-84f9-4dbdd5efa8df",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "0-3 days" },
				remarks: { text: "none" },
			},
		},
		{
			id: "sapmachine-17",
			information: {
				name: "SapMachine 17",
				version: 17,
				downloadSite: "https://sap.github.io/SapMachine/",
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
					shenandoah: { present: Present.YES },
					z: {
						present: Present.PARTIALLY,
						footnote: "7449bc96-4cef-4e0a-bc49-d2ce256683bf",
					},
					custom: { text: "none" },
				},
				mac: {
					x64: { present: Present.YES },
					aarch64: { present: Present.YES },
					installers: {
						present: Present.NO,
						footnote: "2f3ac1c8-77cc-46a1-830f-18f9a19e991c",
					},
				},
				linux: {
					x32: { present: Present.NO },
					x64: { present: Present.YES },
					x64Musl: { present: Present.YES },
					aarch64: { present: Present.YES },
					aarch64Musl: { present: Present.NO },
					aarch32: { present: Present.NO },
					ppc64: { present: Present.YES },
					riscv64: { present: Present.NO },
					s390x: { present: Present.NO },
					apk: { present: Present.NO },
					// Official docs do not list all platforms. But the packages are used for the container images.
					deb: { present: Present.YES },
					rpm: {
						// Only x86, 64-bit
						present: Present.PARTIALLY,
						footnote: "2c2cc179-3ff9-4c15-a974-240cbf339c99",
					},
					containerImages: {
						present: Present.PARTIALLY,
						footnote: "06887138-6947-4068-87d3-eb7d708afe86",
					},
				},
				windows: {
					x32: { present: Present.NO },
					x64: { present: Present.YES },
					aarch64: { present: Present.NO },
					installers: { present: Present.YES },
					containerImages: { present: Present.NO },
				},
				otherPlatforms: {
					aixPPC: { present: Present.NO },
					solarisSPARC: { present: Present.NO },
					solarisx64: { present: Present.NO },
				},
				aqavit: { present: Present.NO },
				tck: { present: Present.YES },
				editions: { text: "JRE" },
				customisations: {
					text: "few",
					footnote: "69b47908-13e0-497c-b995-c0cf573f3f0f",
				},
				notableFeatures: {
					text: "High Memory Reports, MallocTracer, Vitals",
					footnote: "18e1d490-3582-46be-9340-271140e3ada5",
				},
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: { present: Present.NO },
				paidSupport: {
					present: Present.PARTIALLY,
					footnote: "0484cb17-6266-4d75-9e44-8021b75b7bb4",
				},
				eolDate: {
					text: "2026-09",
					footnote: "13ade37e-7160-4316-84f9-4dbdd5efa8df",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "0-3 days" },
				remarks: { text: "none" },
			},
		},
		{
			id: "sapmachine-20",
			information: {
				name: "SapMachine 20",
				version: 20,
				downloadSite: "https://sap.github.io/SapMachine/",
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
					shenandoah: { present: Present.YES },
					z: { present: Present.YES },
					custom: { text: "none" },
				},
				mac: {
					x64: { present: Present.YES },
					aarch64: { present: Present.YES },
					installers: {
						present: Present.NO,
						footnote: "2f3ac1c8-77cc-46a1-830f-18f9a19e991c",
					},
				},
				linux: {
					x32: { present: Present.NO },
					x64: { present: Present.YES },
					x64Musl: { present: Present.YES },
					aarch64: { present: Present.YES },
					aarch64Musl: { present: Present.NO },
					aarch32: { present: Present.NO },
					ppc64: { present: Present.YES },
					riscv64: { present: Present.NO },
					s390x: { present: Present.NO },
					apk: { present: Present.NO },
					// Official docs do not list all platforms. But the packages are used for the container images.
					deb: { present: Present.YES },
					rpm: {
						// Only x86, 64-bit
						present: Present.PARTIALLY,
						footnote: "2c2cc179-3ff9-4c15-a974-240cbf339c99",
					},
					containerImages: {
						present: Present.PARTIALLY,
						footnote: "06887138-6947-4068-87d3-eb7d708afe86",
					},
				},
				windows: {
					x32: { present: Present.NO },
					x64: { present: Present.YES },
					aarch64: { present: Present.NO },
					installers: { present: Present.YES },
					containerImages: { present: Present.NO },
				},
				otherPlatforms: {
					aixPPC: { present: Present.NO },
					solarisSPARC: { present: Present.NO },
					solarisx64: { present: Present.NO },
				},
				aqavit: { present: Present.NO },
				tck: {
					present: Present.PARTIALLY,
					footnote: "822b32bd-e95a-4fb8-98e8-67bdd1e1b3f6",
				},
				editions: { text: "JRE" },
				customisations: {
					text: "few",
					footnote: "69b47908-13e0-497c-b995-c0cf573f3f0f",
				},
				notableFeatures: {
					text: "High Memory Reports, MallocTracer, Vitals",
					footnote: "18e1d490-3582-46be-9340-271140e3ada5",
				},
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: { present: Present.NO },
				paidSupport: {
					present: Present.PARTIALLY,
					footnote: "0484cb17-6266-4d75-9e44-8021b75b7bb4",
				},
				eolDate: {
					text: "2023-09",
					footnote: "13ade37e-7160-4316-84f9-4dbdd5efa8df",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "0-3 days" },
				remarks: { text: "none" },
			},
		},
	],
	footnotes: [
		{
			id: "69b47908-13e0-497c-b995-c0cf573f3f0f",
			markdown:
				"See [Differences between SapMachine and " +
				"OpenJDK](https://github.com/SAP/SapMachine/wiki/Differences-between-SapMachine-and-OpenJDK) for " +
				"details.",
		},
		{
			id: "0484cb17-6266-4d75-9e44-8021b75b7bb4",
			markdown:
				"According to [Security Updates, Maintenance and " +
				"Support](https://github.com/SAP/SapMachine/wiki/Security-Updates,-Maintenance-and-Support) on the" +
				'SapMachine Wiki, SAP only "offers professional support to all SAP customers who use SapMachine in ' +
				'the context of SAP supported products".',
		},
		{
			id: "13ade37e-7160-4316-84f9-4dbdd5efa8df",
			markdown:
				"See [Security Updates, Maintenance and " +
				"Support](https://github.com/SAP/SapMachine/wiki/Security-Updates,-Maintenance-and-Support) for the " +
				"complete release and support calendar.",
		},
		{
			id: "7449bc96-4cef-4e0a-bc49-d2ce256683bf",
			markdown:
				"[ZGC is not available on all platforms](https://wiki.openjdk.org/display/zgc) that SapMachine is " +
				"offered for. Furthermore, it is experimental on some platforms depending on the version.",
		},
		{
			id: "2f3ac1c8-77cc-46a1-830f-18f9a19e991c",
			markdown: "SapMachine only offers disk images (DMG), but no installers (PKG).",
		},
		{
			id: "2c2cc179-3ff9-4c15-a974-240cbf339c99",
			markdown:
				"RPM packages are only available for Linux on x86, 64-bit. They can be obtained on [SapMachine's " +
				"GitHub Releases](https://github.com/SAP/SapMachine/releases).",
		},
		{
			id: "06887138-6947-4068-87d3-eb7d708afe86",
			markdown:
				"[Container images featuring SapMachine](https://hub.docker.com/_/sapmachine) are only offered with " +
				"Ubuntu, but not Alpine Linux",
		},
		{
			id: "822b32bd-e95a-4fb8-98e8-67bdd1e1b3f6",
			markdown:
				"According to [SapMachine's " +
				"FAQ](https://github.com/SAP/SapMachine/wiki/Frequently-Asked-Questions#Are-SapMachine-builds-verified-by-the-Java-Compatibility-Kit-JCK), " +
				"TCK certification of short-term releases is only performed on some platforms.",
		},
		{
			id: "18e1d490-3582-46be-9340-271140e3ada5",
			markdown:
				"To learn more, see " +
				"[High Memory Reports](https://github.com/SAP/SapMachine/wiki/SapMachine-High-Memory-Reports), " +
				"[MallocTracer](https://github.com/SAP/SapMachine/wiki/SapMachine-MallocTracer), " +
				"[Vitals](https://github.com/SAP/SapMachine/wiki/SapMachine-Vitals). " +
				"Please note that not all features are available on all platforms.",
		},
	],
};

// noinspection JSUnusedGlobalSymbols because we import dynamically
export default data;
