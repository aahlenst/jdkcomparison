/*
 * Copyright 2023 the original author or authors.
 *
 * This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of
 * this license, visit http://creativecommons.org/licenses/by-sa/4.0/ or send a letter to Creative Commons, PO Box 1866,
 * Mountain View, CA 94042, USA.
 */
import { Present, Vendor } from "@/src/vendorDataTypes";

export const data: Vendor = {
	vendor: "IBM",
	countryOfOrigin: "USA",
	website: "https://developer.ibm.com/languages/java/semeru-runtimes/",
	jdks: [
		{
			id: "semeru-runtime-ce-11",
			information: {
				name: "Semeru CE 11",
				version: 11,
				downloadSite: "https://developer.ibm.com/languages/java/semeru-runtimes/downloads/",
			},
			features: {
				virtualMachine: { text: "OpenJ9" },
				classLibraries: { text: "OpenJDK" },
				javaFX: { present: Present.NO },
				flightRecorder: { present: Present.NO },
				javaWS: { present: Present.NO },
				gc: {
					cms: { present: Present.NO },
					epsilon: { present: Present.NO },
					g1: { present: Present.NO },
					parallel: { present: Present.NO },
					serial: { present: Present.NO },
					shenandoah: { present: Present.NO },
					z: { present: Present.NO },
					custom: {
						text: "OpenJ9 GC",
						footnote: "0b653527-60bc-4612-9835-f12a89651f96",
					},
				},
				mac: {
					x64: { present: Present.NO },
					aarch64: { present: Present.NO },
					installers: { present: Present.NO },
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
					s390x: { present: Present.YES },
					apk: { present: Present.NO },
					deb: { present: Present.NO },
					rpm: {
						present: Present.PARTIALLY,
						footnote: "e1a3240d-12c4-4460-a80f-bad756fbb3ef",
					},
					// Only available with Semeru Open Edition.
					containerImages: { present: Present.NO },
				},
				windows: {
					x32: { present: Present.NO },
					x64: { present: Present.NO },
					aarch64: { present: Present.NO },
					installers: { present: Present.NO },
					containerImages: { present: Present.NO },
				},
				otherPlatforms: {
					aixPPC: { present: Present.YES },
					solarisSPARC: { present: Present.NO },
					solarisx64: { present: Present.NO },
				},
				aqavit: { present: Present.YES },
				tck: { present: Present.YES },
				editions: { text: "JRE" },
				customisations: { text: "many", footnote: "5d8042eb-3fab-495b-b3ef-a3beeacb78e5" },
				notableFeatures: {
					text: "JITServer",
					footnote: "3f9a7d34-9fca-465a-8502-406ca490ffe8",
				},
				license: { text: "Proprietary" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: {
					present: Present.PARTIALLY,
					footnote: "13759074-6286-4240-84f8-45171f2ec036",
				},
				sbom: { present: Present.NO },
				paidSupport: { present: Present.YES },
				eolDate: { text: "2027-10", footnote: "0caa519b-a44e-449b-8d5b-879c640ebac7" },
				releaseSchedule: {
					text: "Custom",
					footnote: "c8c5c06c-4077-4e8e-9dce-f649eab66b45",
				},
				releaseDelay: { text: "n/a" },
				updateTypes: { text: "no/free" },
				remarks: { text: "none" },
			},
		},
		{
			id: "semeru-runtime-ce-17",
			information: {
				name: "Semeru CE 17",
				version: 17,
				downloadSite: "https://developer.ibm.com/languages/java/semeru-runtimes/downloads/",
			},
			features: {
				virtualMachine: { text: "OpenJ9" },
				classLibraries: { text: "OpenJDK" },
				javaFX: { present: Present.NO },
				flightRecorder: { present: Present.NO },
				javaWS: { present: Present.NO },
				gc: {
					cms: { present: Present.NO },
					epsilon: { present: Present.NO },
					g1: { present: Present.NO },
					parallel: { present: Present.NO },
					serial: { present: Present.NO },
					shenandoah: { present: Present.NO },
					z: { present: Present.NO },
					custom: {
						text: "OpenJ9 GC",
						footnote: "0b653527-60bc-4612-9835-f12a89651f96",
					},
				},
				mac: {
					x64: { present: Present.NO },
					aarch64: { present: Present.NO },
					installers: { present: Present.NO },
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
					s390x: { present: Present.YES },
					apk: { present: Present.NO },
					deb: { present: Present.NO },
					rpm: {
						present: Present.PARTIALLY,
						footnote: "e1a3240d-12c4-4460-a80f-bad756fbb3ef",
					},
					// Only available with Semeru Open Edition.
					containerImages: { present: Present.NO },
				},
				windows: {
					x32: { present: Present.NO },
					x64: { present: Present.NO },
					aarch64: { present: Present.NO },
					installers: { present: Present.NO },
					containerImages: { present: Present.NO },
				},
				otherPlatforms: {
					aixPPC: { present: Present.YES },
					solarisSPARC: { present: Present.NO },
					solarisx64: { present: Present.NO },
				},
				aqavit: { present: Present.YES },
				tck: { present: Present.YES },
				editions: { text: "JRE" },
				customisations: { text: "many", footnote: "5d8042eb-3fab-495b-b3ef-a3beeacb78e5" },
				notableFeatures: {
					text: "JITServer",
					footnote: "3f9a7d34-9fca-465a-8502-406ca490ffe8",
				},
				license: { text: "Proprietary" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: {
					present: Present.PARTIALLY,
					footnote: "a75e6237-3ddc-4c86-a475-78e16ac8e7d4",
				},
				sbom: { present: Present.NO },
				paidSupport: { present: Present.YES },
				eolDate: {
					text: "2027-10",
					footnote: "0caa519b-a44e-449b-8d5b-879c640ebac7",
				},
				releaseSchedule: {
					text: "Custom",
					footnote: "c8c5c06c-4077-4e8e-9dce-f649eab66b45",
				},
				releaseDelay: { text: "n/a" },
				updateTypes: { text: "no/free" },
				remarks: { text: "none" },
			},
		},
		{
			id: "semeru-runtime-ce-21",
			information: {
				name: "Semeru CE 21",
				version: 21,
				downloadSite: "https://developer.ibm.com/languages/java/semeru-runtimes/downloads/",
			},
			features: {
				virtualMachine: { text: "OpenJ9" },
				classLibraries: { text: "OpenJDK" },
				javaFX: { present: Present.NO },
				flightRecorder: { present: Present.NO },
				javaWS: { present: Present.NO },
				gc: {
					cms: { present: Present.NO },
					epsilon: { present: Present.NO },
					g1: { present: Present.NO },
					parallel: { present: Present.NO },
					serial: { present: Present.NO },
					shenandoah: { present: Present.NO },
					z: { present: Present.NO },
					custom: {
						text: "OpenJ9 GC",
						footnote: "0b653527-60bc-4612-9835-f12a89651f96",
					},
				},
				mac: {
					x64: { present: Present.NO },
					aarch64: { present: Present.NO },
					installers: { present: Present.NO },
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
					s390x: { present: Present.YES },
					apk: { present: Present.NO },
					deb: { present: Present.NO },
					rpm: {
						present: Present.PARTIALLY,
						footnote: "e1a3240d-12c4-4460-a80f-bad756fbb3ef",
					},
					// Only available with Semeru Open Edition.
					containerImages: { present: Present.NO },
				},
				windows: {
					x32: { present: Present.NO },
					x64: { present: Present.NO },
					aarch64: { present: Present.NO },
					installers: { present: Present.NO },
					containerImages: { present: Present.NO },
				},
				otherPlatforms: {
					aixPPC: { present: Present.YES },
					solarisSPARC: { present: Present.NO },
					solarisx64: { present: Present.NO },
				},
				aqavit: { present: Present.YES },
				tck: { present: Present.YES },
				editions: { text: "JRE" },
				customisations: { text: "many", footnote: "5d8042eb-3fab-495b-b3ef-a3beeacb78e5" },
				notableFeatures: {
					text: "JITServer",
					footnote: "3f9a7d34-9fca-465a-8502-406ca490ffe8",
				},
				license: { text: "Proprietary" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: {
					present: Present.PARTIALLY,
					footnote: "a75e6237-3ddc-4c86-a475-78e16ac8e7d4",
				},
				sbom: { present: Present.NO },
				paidSupport: { present: Present.YES },
				eolDate: {
					text: "2029-12",
					footnote: "0caa519b-a44e-449b-8d5b-879c640ebac7",
				},
				releaseSchedule: {
					text: "Custom",
					footnote: "c8c5c06c-4077-4e8e-9dce-f649eab66b45",
				},
				releaseDelay: { text: "n/a" },
				updateTypes: { text: "no/free" },
				remarks: { text: "none" },
			},
		},
		{
			id: "semeru-runtime-ce-25",
			information: {
				name: "Semeru CE 25",
				version: 25,
				downloadSite: "https://developer.ibm.com/languages/java/semeru-runtimes/downloads/",
			},
			features: {
				virtualMachine: { text: "OpenJ9" },
				classLibraries: { text: "OpenJDK" },
				javaFX: { present: Present.NO },
				flightRecorder: { present: Present.NO },
				javaWS: { present: Present.NO },
				gc: {
					cms: { present: Present.NO },
					epsilon: { present: Present.NO },
					g1: { present: Present.NO },
					parallel: { present: Present.NO },
					serial: { present: Present.NO },
					shenandoah: { present: Present.NO },
					z: { present: Present.NO },
					custom: {
						text: "OpenJ9 GC",
						footnote: "0b653527-60bc-4612-9835-f12a89651f96",
					},
				},
				mac: {
					x64: { present: Present.NO },
					aarch64: { present: Present.NO },
					installers: { present: Present.NO },
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
					s390x: { present: Present.YES },
					apk: { present: Present.NO },
					deb: { present: Present.NO },
					rpm: {
						present: Present.PARTIALLY,
						footnote: "e1a3240d-12c4-4460-a80f-bad756fbb3ef",
					},
					// Only available with Semeru Open Edition.
					containerImages: { present: Present.NO },
				},
				windows: {
					x32: { present: Present.NO },
					x64: { present: Present.NO },
					aarch64: { present: Present.NO },
					installers: { present: Present.NO },
					containerImages: { present: Present.NO },
				},
				otherPlatforms: {
					aixPPC: { present: Present.YES },
					solarisSPARC: { present: Present.NO },
					solarisx64: { present: Present.NO },
				},
				aqavit: { present: Present.YES },
				tck: { present: Present.YES },
				editions: { text: "JRE" },
				customisations: { text: "many", footnote: "5d8042eb-3fab-495b-b3ef-a3beeacb78e5" },
				notableFeatures: {
					text: "JITServer",
					footnote: "3f9a7d34-9fca-465a-8502-406ca490ffe8",
				},
				license: { text: "Proprietary" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: {
					present: Present.PARTIALLY,
					footnote: "a75e6237-3ddc-4c86-a475-78e16ac8e7d4",
				},
				sbom: { present: Present.NO },
				paidSupport: { present: Present.YES },
				eolDate: {
					text: "n/a",
					footnote: "0caa519b-a44e-449b-8d5b-879c640ebac7",
				},
				releaseSchedule: {
					text: "Custom",
					footnote: "c8c5c06c-4077-4e8e-9dce-f649eab66b45",
				},
				releaseDelay: { text: "n/a" },
				updateTypes: { text: "no/free" },
				remarks: { text: "none" },
			},
		},
	],
	footnotes: [
		{
			id: "0b653527-60bc-4612-9835-f12a89651f96",
			markdown:
				"[OpenJ9 features a generational mark-sweep collector](https://www.eclipse.org/openj9/docs/gc/). " +
				"Policies allow to configure the number of generations, compaction, and pause times.",
		},
		{
			id: "e1a3240d-12c4-4460-a80f-bad756fbb3ef",
			markdown: "IBM neither provides a RPM compatible with SUSE nor a RPM repository.",
		},
		{
			id: "3f9a7d34-9fca-465a-8502-406ca490ffe8",
			markdown:
				"[JITServer](https://www.eclipse.org/openj9/docs/jitserver/) decouples the JIT compiler and allows " +
				"it to run remotely in its own process.",
		},
		{
			id: "13759074-6286-4240-84f8-45171f2ec036",
			markdown:
				"The [license terms imposed by IBM](https://www.ibm.com/terms/?id=L-JPLW-CGKLX3) limit the use " +
				'of Semeru Runtime CE 11. For example, providing "commercial IT services to any third party" is ' +
				"not allowed.",
		},
		{
			id: "a75e6237-3ddc-4c86-a475-78e16ac8e7d4",
			markdown:
				"The [license terms imposed by IBM](http://www.ibm.com/terms/?id=L-PARM-C9S7PL) limit the use " +
				'of Semeru Runtime CE 17. For example, usage on a "Pervasive Device" is not allowed.',
		},
		{
			id: "c8c5c06c-4077-4e8e-9dce-f649eab66b45",
			markdown:
				"IBM loosely follows the OpenJDK schedule. Looking at the releases published in 2022, updates " +
				"incorporating the latest changes from OpenJDK take at least a month to appear.",
		},
		{
			id: "5d8042eb-3fab-495b-b3ef-a3beeacb78e5",
			markdown:
				"The OpenJ9 documentation gives a [high-level overview of the differences between OpenJ9 and " +
				"OpenJDK's HotSpot virtual machine](https://www.eclipse.org/openj9/docs/openj9_newuser/). IBM does " +
				"not publish the source code of the Certified Edition, but is supposed to be identical to OpenJ9 " +
				"apart from the licenses. The OpenJ9 code can be found on GitHub: " +
				"[11](https://github.com/ibmruntimes/openj9-openjdk-jdk11), " +
				"[17](https://github.com/ibmruntimes/openj9-openjdk-jdk17), " +
				"[21](https://github.com/ibmruntimes/openj9-openjdk-jdk21), " +
				"[25](https://github.com/ibmruntimes/openj9-openjdk-jdk25).",
		},
		{
			id: "0caa519b-a44e-449b-8d5b-879c640ebac7",
			markdown:
				"For details on the life cycle of IBM Semeru Runtimes, see IBM's " +
				"[Semeru Runtimes Support](https://www.ibm.com/support/pages/semeru-runtimes-support/) document.",
		},
	],
};

// noinspection JSUnusedGlobalSymbols because we import dynamically
export default data;
