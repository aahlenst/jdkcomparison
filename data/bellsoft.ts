/*
 * Copyright 2023 the original author or authors.
 *
 * This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of
 * this license, visit http://creativecommons.org/licenses/by-sa/4.0/ or send a letter to Creative Commons, PO Box 1866,
 * Mountain View, CA 94042, USA.
 */
import { Present, Vendor } from "@/src/vendorDataTypes";

export const data: Vendor = {
	vendor: "BellSoft",
	countryOfOrigin: "USA",
	website: "https://bell-sw.com/libericajdk/",
	jdks: [
		{
			id: "liberica-jdk-8",
			information: {
				name: "Liberica JDK 8",
				version: 8,
				downloadSite: "https://bell-sw.com/pages/downloads/",
			},
			features: {
				virtualMachine: { text: "HotSpot" },
				classLibraries: { text: "OpenJDK" },
				javaFX: {
					present: Present.PARTIALLY,
					footnote: "74d575ab-4ae8-4910-b286-fbe32158aa1c",
				},
				flightRecorder: { present: Present.YES },
				javaWS: {
					present: Present.NO,
					footnote: "db9ec2f8-0b09-4516-86d0-62af336838ab",
				},
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
				mac: {
					x64: { present: Present.YES },
					aarch64: { present: Present.YES },
					installers: { present: Present.YES },
				},
				linux: {
					x32: { present: Present.YES },
					x64: { present: Present.YES },
					x64Musl: { present: Present.YES },
					aarch64: { present: Present.YES },
					aarch64Musl: { present: Present.YES },
					aarch32: { present: Present.NO },
					ppc64: { present: Present.YES },
					riscv64: { present: Present.NO },
					s390x: { present: Present.NO },
					apk: { present: Present.YES },
					deb: { present: Present.YES },
					rpm: { present: Present.YES },
					containerImages: {
						present: Present.PARTIALLY,
						footnote: "f8b6d9fb-a935-4630-96fd-db3422421420",
					},
				},
				windows: {
					x32: { present: Present.YES },
					x64: { present: Present.YES },
					aarch64: { present: Present.NO },
					installers: { present: Present.YES },
					containerImages: { present: Present.NO },
				},
				otherPlatforms: {
					aixPPC: { present: Present.NO },
					solarisSPARC: { present: Present.YES },
					solarisx64: { present: Present.YES },
				},
				aqavit: { present: Present.NO },
				tck: { present: Present.YES },
				editions: { text: "JRE" },
				customisations: {
					text: "few",
					footnote: "7c1300e2-2a3f-4f6c-b929-9fa464d35216",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: {
					present: Present.YES,
					footnote: "c77e51f7-d243-4628-91cd-bd2fb8a92193",
				},
				paidSupport: { present: Present.YES },
				eolDate: {
					text: "2031-03",
					footnote: "e92c2876-d7c0-43f3-a441-b4f95ce940cb",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "0-3 days" },
				updateTypes: { text: "paid/free" },
				remarks: { text: "none" },
			},
		},
		{
			id: "liberica-jdk-11",
			information: {
				name: "Liberica JDK 11",
				version: 11,
				downloadSite: "https://bell-sw.com/pages/downloads/",
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
						footnote: "181deeee-c7ee-489b-8da9-a1976d7760e8",
					},
					z: {
						present: Present.PARTIALLY,
						footnote: "89da95e6-16d8-4729-873f-f635cdd00b97",
					},
					custom: { text: "none" },
				},
				mac: {
					x64: { present: Present.YES },
					aarch64: { present: Present.YES },
					installers: { present: Present.YES },
				},
				linux: {
					x32: { present: Present.YES },
					x64: { present: Present.YES },
					x64Musl: { present: Present.YES },
					aarch64: { present: Present.YES },
					aarch64Musl: { present: Present.YES },
					aarch32: { present: Present.YES },
					ppc64: { present: Present.YES },
					riscv64: { present: Present.NO },
					s390x: { present: Present.NO },
					apk: { present: Present.YES },
					deb: { present: Present.YES },
					rpm: { present: Present.YES },
					containerImages: {
						present: Present.PARTIALLY,
						footnote: "f8b6d9fb-a935-4630-96fd-db3422421420",
					},
				},
				windows: {
					x32: { present: Present.YES },
					x64: { present: Present.YES },
					aarch64: { present: Present.YES },
					installers: { present: Present.YES },
					containerImages: { present: Present.NO },
				},
				otherPlatforms: {
					aixPPC: { present: Present.NO },
					solarisSPARC: { present: Present.YES },
					solarisx64: { present: Present.YES },
				},
				aqavit: { present: Present.NO },
				tck: { present: Present.YES },
				editions: {
					text: "JRE, OpenJFX",
					footnote: "c48248b3-d416-44a3-95a2-6e8f158c6d6a",
				},
				customisations: {
					text: "few",
					footnote: "84d39cc6-e2ef-4a32-9eea-da4ad9c1b274",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: {
					present: Present.YES,
					footnote: "c77e51f7-d243-4628-91cd-bd2fb8a92193",
				},
				paidSupport: { present: Present.YES },
				eolDate: {
					text: "2027-03",
					footnote: "e92c2876-d7c0-43f3-a441-b4f95ce940cb",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "0-3 days" },
				updateTypes: { text: "paid/free" },
				remarks: { text: "none" },
			},
		},
		{
			id: "liberica-jdk-17",
			information: {
				name: "Liberica JDK 17",
				version: 17,
				downloadSite: "https://bell-sw.com/pages/downloads/",
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
						footnote: "181deeee-c7ee-489b-8da9-a1976d7760e8",
					},
					z: {
						present: Present.PARTIALLY,
						footnote: "89da95e6-16d8-4729-873f-f635cdd00b97",
					},
					custom: { text: "none" },
				},
				mac: {
					x64: { present: Present.YES },
					aarch64: { present: Present.YES },
					installers: { present: Present.YES },
				},
				linux: {
					x32: { present: Present.YES },
					x64: { present: Present.YES },
					x64Musl: { present: Present.YES },
					aarch64: { present: Present.YES },
					aarch64Musl: { present: Present.YES },
					aarch32: { present: Present.YES },
					ppc64: { present: Present.YES },
					riscv64: { present: Present.NO },
					s390x: { present: Present.NO },
					apk: { present: Present.YES },
					deb: { present: Present.YES },
					rpm: { present: Present.YES },
					containerImages: {
						present: Present.PARTIALLY,
						footnote: "f8b6d9fb-a935-4630-96fd-db3422421420",
					},
				},
				windows: {
					x32: { present: Present.YES },
					x64: { present: Present.YES },
					aarch64: { present: Present.YES },
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
				editions: {
					text: "JRE, OpenJFX",
					footnote: "c48248b3-d416-44a3-95a2-6e8f158c6d6a",
				},
				customisations: {
					text: "few",
					footnote: "84d39cc6-e2ef-4a32-9eea-da4ad9c1b274",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: {
					present: Present.YES,
					footnote: "c77e51f7-d243-4628-91cd-bd2fb8a92193",
				},
				paidSupport: { present: Present.YES },
				eolDate: {
					text: "2030-03",
					footnote: "e92c2876-d7c0-43f3-a441-b4f95ce940cb",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "0-3 days" },
				updateTypes: { text: "paid/free" },
				remarks: { text: "none" },
			},
		},
		{
			id: "liberica-jdk-21",
			information: {
				name: "Liberica JDK 21",
				version: 21,
				downloadSite: "https://bell-sw.com/pages/downloads/",
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
						footnote: "181deeee-c7ee-489b-8da9-a1976d7760e8",
					},
					z: {
						present: Present.PARTIALLY,
						footnote: "89da95e6-16d8-4729-873f-f635cdd00b97",
					},
					custom: { text: "none" },
				},
				mac: {
					x64: { present: Present.YES },
					aarch64: { present: Present.YES },
					installers: { present: Present.YES },
				},
				linux: {
					x32: { present: Present.YES },
					x64: { present: Present.YES },
					x64Musl: { present: Present.YES },
					aarch64: { present: Present.YES },
					aarch64Musl: { present: Present.YES },
					aarch32: { present: Present.YES },
					ppc64: { present: Present.YES },
					riscv64: { present: Present.NO },
					s390x: { present: Present.NO },
					apk: { present: Present.YES },
					deb: { present: Present.YES },
					rpm: { present: Present.YES },
					containerImages: {
						present: Present.PARTIALLY,
						footnote: "f8b6d9fb-a935-4630-96fd-db3422421420",
					},
				},
				windows: {
					x32: { present: Present.YES },
					x64: { present: Present.YES },
					aarch64: { present: Present.YES },
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
				editions: {
					text: "JRE, OpenJFX",
					footnote: "c48248b3-d416-44a3-95a2-6e8f158c6d6a",
				},
				customisations: {
					text: "few",
					footnote: "84d39cc6-e2ef-4a32-9eea-da4ad9c1b274",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: {
					present: Present.YES,
					footnote: "c77e51f7-d243-4628-91cd-bd2fb8a92193",
				},
				paidSupport: { present: Present.YES },
				eolDate: {
					text: "2032-03",
					footnote: "e92c2876-d7c0-43f3-a441-b4f95ce940cb",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "0-3 days" },
				updateTypes: { text: "paid/free" },
				remarks: { text: "none" },
			},
		},
		{
			id: "liberica-jdk-22",
			information: {
				name: "Liberica JDK 22",
				version: 22,
				downloadSite: "https://bell-sw.com/pages/downloads/",
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
						footnote: "181deeee-c7ee-489b-8da9-a1976d7760e8",
					},
					z: {
						present: Present.PARTIALLY,
						footnote: "89da95e6-16d8-4729-873f-f635cdd00b97",
					},
					custom: { text: "none" },
				},
				mac: {
					x64: { present: Present.YES },
					aarch64: { present: Present.YES },
					installers: { present: Present.YES },
				},
				linux: {
					x32: { present: Present.YES },
					x64: { present: Present.YES },
					x64Musl: { present: Present.YES },
					aarch64: { present: Present.YES },
					aarch64Musl: { present: Present.YES },
					aarch32: { present: Present.YES },
					ppc64: { present: Present.YES },
					riscv64: { present: Present.YES },
					s390x: { present: Present.NO },
					apk: { present: Present.YES },
					deb: { present: Present.YES },
					rpm: { present: Present.YES },
					containerImages: {
						present: Present.PARTIALLY,
						footnote: "f8b6d9fb-a935-4630-96fd-db3422421420",
					},
				},
				windows: {
					x32: { present: Present.YES },
					x64: { present: Present.YES },
					aarch64: { present: Present.YES },
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
				editions: {
					text: "JRE, OpenJFX",
					footnote: "c48248b3-d416-44a3-95a2-6e8f158c6d6a",
				},
				customisations: {
					text: "few",
					footnote: "84d39cc6-e2ef-4a32-9eea-da4ad9c1b274",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: {
					present: Present.YES,
					footnote: "c77e51f7-d243-4628-91cd-bd2fb8a92193",
				},
				paidSupport: { present: Present.YES },
				eolDate: {
					text: "2024-09",
					footnote: "e92c2876-d7c0-43f3-a441-b4f95ce940cb",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "0-3 days" },
				updateTypes: { text: "paid/free" },
				remarks: { text: "none" },
			},
		},
	],
	footnotes: [
		{
			id: "74d575ab-4ae8-4910-b286-fbe32158aa1c",
			markdown:
				"JavaFX is only available on macOS, Linux, and Windows on x86, 32-bit and 64-bit, and macOS, ARM, " +
				"64-bit.",
		},
		{
			id: "db9ec2f8-0b09-4516-86d0-62af336838ab",
			markdown:
				"Customers [purchasing paid support receive access to OpenWebStart](https://bell-sw.com/support/) " +
				"binaries made by BellSoft. [OpenWebStart](https://openwebstart.com/) is an open-source " +
				"reimplementation of Java Web Start.",
		},
		{
			id: "f8b6d9fb-a935-4630-96fd-db3422421420",
			markdown:
				"Container images are only offered for x86, 64-bit, ARM, 64-bit, and ARM, 32-bit. Depending on the " +
				"version and operating system, the selection may be smaller.",
		},
		{
			id: "e92c2876-d7c0-43f3-a441-b4f95ce940cb",
			markdown:
				"See the [BellSoft Support Roadmap](https://bell-sw.com/roadmap/) for details.",
		},
		{
			id: "7c1300e2-2a3f-4f6c-b929-9fa464d35216",
			markdown:
				"There is no public breakdown of differences. Apart from a custom keystore the main difference seems " +
				"to be support for macOS on ARM, 64-bit.",
		},
		{
			id: "84d39cc6-e2ef-4a32-9eea-da4ad9c1b274",
			markdown:
				"There is no public breakdown of differences. Apart from a custom keystore the main difference seems " +
				"to be additional plumbing for the optionally bundled OpenJFX.",
		},
		{
			id: "181deeee-c7ee-489b-8da9-a1976d7760e8",
			markdown:
				"[Shenandoah GC is not available on all " +
				"platforms](https://wiki.openjdk.org/display/shenandoah) that BellSoft Liberica is offered for.",
		},
		{
			id: "89da95e6-16d8-4729-873f-f635cdd00b97",
			markdown:
				"[ZGC is not available on all platforms](https://wiki.openjdk.org/display/zgc) that BellSoft " +
				"Liberica is offered for. Furthermore, it is experimental on some platforms depending on the version.",
		},
		{
			id: "c48248b3-d416-44a3-95a2-6e8f158c6d6a",
			markdown:
				"JRE and JDKs with OpenJFX are not available on all platforms supported by BellSoft Liberica.",
		},
		{
			id: "c77e51f7-d243-4628-91cd-bd2fb8a92193",
			markdown:
				"The SBOM can be downloaded from [Liberica's GitHub " +
				"Releases](https://github.com/bell-sw/Liberica/releases/).",
		},
	],
};

// noinspection JSUnusedGlobalSymbols because we import dynamically
export default data;
