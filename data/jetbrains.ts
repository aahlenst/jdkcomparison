/*
 * Copyright 2023 the original author or authors.
 *
 * This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of
 * this license, visit http://creativecommons.org/licenses/by-sa/4.0/ or send a letter to Creative Commons, PO Box 1866,
 * Mountain View, CA 94042, USA.
 */
import { Present, Vendor } from "@/src/vendorDataTypes";

export const data: Vendor = {
	vendor: "JetBrains",
	countryOfOrigin: "Czech Republic",
	website: "https://github.com/JetBrains/JetBrainsRuntime",
	jdks: [
		{
			id: "jbr-21",
			information: {
				name: "Runtime 21",
				version: 21,
				downloadSite: "https://github.com/JetBrains/JetBrainsRuntime",
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
						footnote: "f243d578-c782-415e-8927-5e316ac91fd7",
					},
					custom: { text: "none" },
				},
				mac: {
					x64: { present: Present.YES },
					aarch64: { present: Present.YES },
					installers: { present: Present.NO },
				},
				linux: {
					x32: { present: Present.YES },
					x64: { present: Present.YES },
					x64Musl: { present: Present.YES },
					aarch64: { present: Present.YES },
					aarch64Musl: { present: Present.YES },
					aarch32: { present: Present.NO },
					ppc64: { present: Present.NO },
					riscv64: { present: Present.NO },
					s390x: { present: Present.NO },
					apk: { present: Present.NO },
					deb: { present: Present.NO },
					rpm: { present: Present.NO },
					containerImages: { present: Present.NO },
				},
				windows: {
					x32: { present: Present.YES },
					x64: { present: Present.YES },
					aarch64: { present: Present.YES },
					installers: { present: Present.NO },
					containerImages: { present: Present.NO },
				},
				otherPlatforms: {
					aixPPC: { present: Present.NO },
					solarisSPARC: { present: Present.NO },
					solarisx64: { present: Present.NO },
				},
				aqavit: { present: Present.NO },
				tck: { present: Present.NO },
				editions: {
					text: "JCEF",
					footnote: "bbd3d1a7-68dc-4173-9e3d-8e83945985da",
				},
				customisations: {
					text: "many",
					footnote: "cf966144-2b34-437a-b089-1bf7577fdd79",
				},
				notableFeatures: {
					text: "DCE VM, JCEF, significant GUI enhancements",
					footnote: "f49d428a-3c6b-4f5d-8c47-feff2dd628a3",
				},
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: { present: Present.NO },
				paidSupport: { present: Present.NO },
				eolDate: {
					text: "n/a",
					footnote: "0e655eff-f6ab-4ee4-b6c4-ac26faabce6d",
				},
				releaseSchedule: {
					text: "Custom",
					footnote: "c3aca06e-3569-4609-a434-16db7501aa2b",
				},
				releaseDelay: { text: "n/a" },
				updateTypes: { text: "no/free" },
				remarks: { text: "For products based on JetBrains IntelliJ" },
			},
		},
	],
	footnotes: [
		{
			id: "f243d578-c782-415e-8927-5e316ac91fd7",
			markdown:
				"[ZGC is not available on all platforms](https://wiki.openjdk.org/display/zgc) that JetBrains Runtime is offered for.",
		},
		{
			id: "bbd3d1a7-68dc-4173-9e3d-8e83945985da",
			markdown:
				"[JCEF](https://github.com/JetBrains/jcef) makes it possible to embed Chromium-based web browsers in Java applications. JCEF is not offered for all platforms that JetBrains Runtime is available for.",
		},
		{
			id: "cf966144-2b34-437a-b089-1bf7577fdd79",
			markdown:
				"To see the changes applied to a version, compare the release tag of JetBrains Runtime with the corresponding OpenJDK tag: [Example for OpenJDK 21.0.7+6 and JBR 21.0.7b1038.54](https://github.com/JetBrains/JetBrainsRuntime/compare/jdk-21.0.7+6...jbr-release-21.0.7b1038.54).",
		},
		{
			id: "f49d428a-3c6b-4f5d-8c47-feff2dd628a3",
			markdown:
				"[DCE VM](https://ssw.jku.at/dcevm/) allows unlimited class redefinition at runtime. [JCEF](https://github.com/JetBrains/jcef) makes it possible to embed Chromium-based web browsers in Java applications. The GUI enhancements include HiDPI and Wayland support. See the [website of JetBrains Runtime](https://github.com/JetBrains/JetBrainsRuntime) for details.",
		},
		{
			id: "0e655eff-f6ab-4ee4-b6c4-ac26faabce6d",
			markdown:
				"JetBrains maintains a single version of JetBrains Runtime that is based on the latest OpenJDK version that is maintained long-term by the [OpenJDK Updates Project](https://openjdk.org/projects/jdk-updates/). It usually takes JetBrains a couple of months to switch over to a new OpenJDK version that is maintained long-term.",
		},
		{
			id: "c3aca06e-3569-4609-a434-16db7501aa2b",
			markdown:
				"There is no fixed release schedule. Usually, new versions appear a couple of weeks after OpenJDK. Furthermore, JetBrains frequently releases interim updates.",
		},
	],
};

// noinspection JSUnusedGlobalSymbols because we import dynamically
export default data;
