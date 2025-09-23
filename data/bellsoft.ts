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
				downloadSite: "https://bell-sw.com/pages/downloads/#jdk-8-lts",
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
				editions: {
					text: "JRE, Lite, Performance",
					footnote: "9f0b07df-a5cb-479b-8aa5-161dcf30d7c8",
				},
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
				downloadSite: "https://bell-sw.com/pages/downloads/#jdk-11-lts",
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
					text: "JRE, Lite, OpenJFX, Performance",
					footnote: "9f0b07df-a5cb-479b-8aa5-161dcf30d7c8",
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
			id: "liberica-jdk-17",
			information: {
				name: "Liberica JDK 17",
				version: 17,
				downloadSite: "https://bell-sw.com/pages/downloads/#jdk-17-lts",
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
					text: "CRaC, JRE, OpenJFX",
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
				downloadSite: "https://bell-sw.com/pages/downloads/#jdk-21-lts",
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
					text: "CRaC, JRE, Lite, OpenJFX",
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
			id: "liberica-jdk-25",
			information: {
				name: "Liberica JDK 25",
				version: 25,
				downloadSite: "https://bell-sw.com/pages/downloads/#jdk-25-lts",
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
					x32: { present: Present.NO },
					x64: { present: Present.YES },
					x64Musl: { present: Present.YES },
					aarch64: { present: Present.YES },
					aarch64Musl: { present: Present.YES },
					aarch32: { present: Present.NO },
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
					x32: { present: Present.NO },
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
					text: "CRaC, JRE, Lite, OpenJFX",
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
					text: "2034-03",
					footnote: "e92c2876-d7c0-43f3-a441-b4f95ce940cb",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "0-3 days" },
				updateTypes: { text: "paid/free" },
				remarks: { text: "none" },
			},
		},
		{
			id: "liberica-nik-24",
			information: {
				name: "Liberica NIK 24",
				version: 24,
				downloadSite:
					"https://bell-sw.com/pages/downloads/native-image-kit/#nik-24-(jdk-24)",
			},
			features: {
				virtualMachine: {
					text: "HotSpot",
					footnote: "cb33ec69-32c3-49ef-b5ab-75977199700c",
				},
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
					installers: { present: Present.YES },
				},
				linux: {
					x32: { present: Present.NO },
					x64: { present: Present.YES },
					x64Musl: { present: Present.YES },
					aarch64: { present: Present.YES },
					aarch64Musl: { present: Present.YES },
					aarch32: { present: Present.NO },
					ppc64: { present: Present.NO },
					riscv64: { present: Present.NO },
					s390x: { present: Present.NO },
					apk: { present: Present.YES },
					deb: {
						present: Present.PARTIALLY,
						footnote: "677d6419-e21d-44ff-9d95-f63b33f33ae9",
					},
					rpm: {
						present: Present.PARTIALLY,
						footnote: "677d6419-e21d-44ff-9d95-f63b33f33ae9",
					},
					containerImages: {
						present: Present.YES,
						footnote: "ae5dc2f4-d8d9-4f37-be2f-f4bf343c273c",
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
					footnote: "4ae7e59d-1edd-4c52-93f4-6779bc77ee44",
				},
				editions: {
					text: "OpenJFX, Core",
					footnote: "f00b7e86-e9bc-4ab1-b652-60fc719c0d1a",
				},
				customisations: {
					text: "many",
					footnote: "b6949ccb-4a08-4252-b8ca-6bed454d9059",
				},
				notableFeatures: {
					text: "Graal Compiler, Native Image, Truffle",
					footnote: "ee9076da-7f75-44dd-a8d2-1aa519d034e6",
				},
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: { present: Present.NO },
				paidSupport: { present: Present.YES },
				eolDate: {
					text: "2026-06",
					footnote: "160fbf87-fa1c-4c36-adec-2e989c143cda",
				},
				releaseSchedule: {
					text: "Custom",
					footnote: "920f585f-29c3-4b88-9708-006a087571ad",
				},
				releaseDelay: { text: "n/a" },
				updateTypes: { text: "no/free" },
				remarks: { text: "GraalVM CE with additional patches" },
			},
		},
		{
			id: "liberica-nik-25",
			information: {
				name: "Liberica NIK 25",
				version: 25,
				downloadSite:
					"https://bell-sw.com/pages/downloads/native-image-kit/#nik-25-(jdk-25)",
			},
			features: {
				virtualMachine: {
					text: "HotSpot",
					footnote: "cb33ec69-32c3-49ef-b5ab-75977199700c",
				},
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
					installers: { present: Present.YES },
				},
				linux: {
					x32: { present: Present.NO },
					x64: { present: Present.YES },
					x64Musl: { present: Present.YES },
					aarch64: { present: Present.YES },
					aarch64Musl: { present: Present.YES },
					aarch32: { present: Present.NO },
					ppc64: { present: Present.NO },
					riscv64: { present: Present.NO },
					s390x: { present: Present.NO },
					apk: { present: Present.YES },
					deb: {
						present: Present.PARTIALLY,
						footnote: "677d6419-e21d-44ff-9d95-f63b33f33ae9",
					},
					rpm: {
						present: Present.PARTIALLY,
						footnote: "677d6419-e21d-44ff-9d95-f63b33f33ae9",
					},
					containerImages: {
						present: Present.YES,
						footnote: "ae5dc2f4-d8d9-4f37-be2f-f4bf343c273c",
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
					footnote: "4ae7e59d-1edd-4c52-93f4-6779bc77ee44",
				},
				editions: {
					text: "OpenJFX, Core",
					footnote: "f00b7e86-e9bc-4ab1-b652-60fc719c0d1a",
				},
				customisations: {
					text: "many",
					footnote: "b6949ccb-4a08-4252-b8ca-6bed454d9059",
				},
				notableFeatures: {
					text: "Graal Compiler, Native Image, Truffle",
					footnote: "ee9076da-7f75-44dd-a8d2-1aa519d034e6",
				},
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: { present: Present.NO },
				paidSupport: { present: Present.YES },
				eolDate: {
					text: "2027-09",
					footnote: "160fbf87-fa1c-4c36-adec-2e989c143cda",
				},
				releaseSchedule: {
					text: "Custom",
					footnote: "920f585f-29c3-4b88-9708-006a087571ad",
				},
				releaseDelay: { text: "n/a" },
				updateTypes: { text: "no/free" },
				remarks: { text: "GraalVM CE with additional patches" },
			},
		},
	],
	footnotes: [
		{
			id: "74d575ab-4ae8-4910-b286-fbe32158aa1c",
			markdown:
				"JavaFX is only available on macOS, Linux, and Windows on x86, 32-bit and 64-bit, and macOS, ARM, 64-bit.",
		},
		{
			id: "db9ec2f8-0b09-4516-86d0-62af336838ab",
			markdown:
				"Customers [purchasing paid support receive access to OpenWebStart](https://bell-sw.com/support/) binaries made by BellSoft. [OpenWebStart](https://openwebstart.com/) is an open-source reimplementation of Java Web Start.",
		},
		{
			id: "f8b6d9fb-a935-4630-96fd-db3422421420",
			markdown:
				"Container images are only offered for x86, 64-bit, ARM, 64-bit, and ARM, 32-bit. Depending on the version and operating system, the selection may be smaller.",
		},
		{
			id: "e92c2876-d7c0-43f3-a441-b4f95ce940cb",
			markdown:
				"See the [BellSoft Support Roadmap](https://bell-sw.com/roadmap/) for details.",
		},
		{
			id: "7c1300e2-2a3f-4f6c-b929-9fa464d35216",
			markdown:
				"There is no public breakdown of differences. Apart from a custom keystore the main difference seems to be support for macOS on ARM, 64-bit.",
		},
		{
			id: "84d39cc6-e2ef-4a32-9eea-da4ad9c1b274",
			markdown:
				"There is no public breakdown of differences. Apart from a custom keystore the main difference seems to be additional plumbing for the optionally bundled OpenJFX.",
		},
		{
			id: "181deeee-c7ee-489b-8da9-a1976d7760e8",
			markdown:
				"[Shenandoah GC is not available on all platforms](https://wiki.openjdk.org/display/shenandoah) that BellSoft Liberica is offered for.",
		},
		{
			id: "89da95e6-16d8-4729-873f-f635cdd00b97",
			markdown:
				"[ZGC is not available on all platforms](https://wiki.openjdk.org/display/zgc) that BellSoft Liberica is offered for. Furthermore, it is experimental on some platforms depending on the version.",
		},
		{
			id: "c48248b3-d416-44a3-95a2-6e8f158c6d6a",
			markdown:
				"[Coordinated Restore at Checkpoint](https://bell-sw.com/libericajdk-with-crac/) (CRaC) is a potential future OpenJDK feature that drastically reduces start-up and warm-up time. [Lite](https://docs.bell-sw.com/liberica-jdk/latest/how-to/choosing-flavor/#liberica-jdk-lite) is a version with a reduced footprint. The CRaC and OpenJFX editions are not available on all platforms otherwise supported by Liberica JDK.",
		},
		{
			id: "c77e51f7-d243-4628-91cd-bd2fb8a92193",
			markdown:
				"The SBOM can be downloaded from [Liberica's GitHub Releases](https://github.com/bell-sw/Liberica/releases/).",
		},
		{
			id: "9f0b07df-a5cb-479b-8aa5-161dcf30d7c8",
			markdown:
				"[Lite](https://docs.bell-sw.com/liberica-jdk/latest/how-to/choosing-flavor/#liberica-jdk-lite) is a version with a reduced footprint. [Performance](https://bell-sw.com/libericajdk-performance-edition/) combines the class libraries of JDK 8 and 11, respectively, with the JVM from OpenJDK 21, offering higher performance for legacy applications. Performance and OpenJFK editions are not available on all platforms otherwise supported by Liberica JDK.",
		},
		{
			id: "cb33ec69-32c3-49ef-b5ab-75977199700c",
			markdown:
				"GraalVM runs applications normally on the HotSpot VM, in Native Image, or on Truffle. See the [GraalVM Architecture Overview](https://docs.oracle.com/en/graalvm/enterprise/21/docs/overview/architecture/) for more information.",
		},
		{
			id: "677d6419-e21d-44ff-9d95-f63b33f33ae9",
			markdown:
				"Only individual packages can be downloaded. No package repository is available.",
		},
		{
			id: "ae5dc2f4-d8d9-4f37-be2f-f4bf343c273c",
			markdown:
				"Container images with Alpaquita Linux are available on [Docker Hub](https://hub.docker.com/r/bellsoft/liberica-native-image-kit-container).",
		},
		{
			id: "4ae7e59d-1edd-4c52-93f4-6779bc77ee44",
			markdown:
				"Like GraalVM, that it is based on, NIK is a fully conformant implementation of the Java Platform. Native images produced with NIK are not.",
		},
		{
			id: "f00b7e86-e9bc-4ab1-b652-60fc719c0d1a",
			markdown:
				"See [Supported System Configurations](https://bell-sw.com/pages/nik-supported-configurations/) for a break down of supported technologies and languages by platform.",
		},
		{
			id: "b6949ccb-4a08-4252-b8ca-6bed454d9059",
			markdown:
				"[Native Image Kit](https://bell-sw.com/liberica-native-image-kit/) is BellSoft's distribution of Oracle GraalVM CE with additional customizations. The source code is available on BellSoft's download page.",
		},
		{
			id: "ee9076da-7f75-44dd-a8d2-1aa519d034e6",
			markdown:
				"[Graal Compiler](https://docs.oracle.com/en/graalvm/enterprise/21/docs/reference-manual/java/compiler/) is an advanced JIT for HotSpot. [Native Image](https://docs.oracle.com/en/graalvm/enterprise/21/docs/reference-manual/native-image/) compiles Java applications down to native executables for faster start-up (only Serial GC plus G1 GC on Linux). [Truffle](https://docs.oracle.com/en/graalvm/jdk/21/docs/reference-manual/java-on-truffle/) is a separate VM that allows direct interoperability with other languages, such as Python.",
		},
		{
			id: "160fbf87-fa1c-4c36-adec-2e989c143cda",
			markdown:
				"See the [Support Roadmap for Liberica NIK](https://bell-sw.com/nik-support/).",
		},
		{
			id: "920f585f-29c3-4b88-9708-006a087571ad",
			markdown:
				"Liberica NIK follows the release schedule of GraalVM Community Edition. Binary builds are usually available within a week after the corresponding GraalVM CE release.",
		},
	],
};

// noinspection JSUnusedGlobalSymbols because we import dynamically
export default data;
