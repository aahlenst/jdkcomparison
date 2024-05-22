/*
 * Copyright 2023 the original author or authors.
 *
 * This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of
 * this license, visit http://creativecommons.org/licenses/by-sa/4.0/ or send a letter to Creative Commons, PO Box 1866,
 * Mountain View, CA 94042, USA.
 */
import { Present, Vendor } from "@/src/vendorDataTypes";

export const data: Vendor = {
	vendor: "Azul",
	countryOfOrigin: "USA",
	website: "https://azul.com/",
	jdks: [
		{
			id: "zing-8",
			information: {
				name: "Zing 8",
				version: 8,
				downloadSite: "https://www.azul.com/downloads/?version=java-8-lts#prime",
			},
			features: {
				virtualMachine: { text: "Zing" },
				classLibraries: { text: "OpenJDK" },
				javaFX: { present: Present.NO },
				flightRecorder: { present: Present.YES },
				javaWS: { present: Present.NO },
				// To check GC availability, run `java -XX:+UseSerialGC -Xnativevmflags:warn -version` (example with Serial GC)
				gc: {
					cms: { present: Present.NO },
					epsilon: { present: Present.YES },
					g1: { present: Present.NO },
					parallel: { present: Present.NO },
					serial: { present: Present.NO },
					shenandoah: { present: Present.NO },
					z: { present: Present.NO },
					custom: { text: "C4", footnote: "ee106e4d-0f10-4944-8547-4d896386f61d" },
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
					ppc64: { present: Present.NO },
					riscv64: { present: Present.NO },
					s390x: { present: Present.NO },
					apk: { present: Present.NO },
					deb: { present: Present.YES },
					rpm: { present: Present.YES },
					containerImages: { present: Present.YES },
				},
				windows: {
					x32: { present: Present.NO },
					x64: { present: Present.NO },
					aarch64: { present: Present.NO },
					installers: { present: Present.NO },
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
					text: "JRE",
					footnote: "3a460237-d12b-4ba4-b98e-8a6f081bcd9e",
				},
				customisations: {
					text: "many",
					footnote: "ace95bf5-c597-4ce2-b50e-94354610301a",
				},
				notableFeatures: {
					text: "Cloud Native Compiler, Falcon JIT, ReadyNow",
					footnote: "180b008e-82e9-47a8-8c4d-81f419b834da",
				},
				license: { text: "Proprietary" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.NO },
				sbom: { present: Present.NO },
				paidSupport: {
					present: Present.YES,
				},
				eolDate: {
					text: "2030-12",
					footnote: "0bb09fec-66c9-4e10-b9a6-c981d9d6861b",
				},
				releaseSchedule: {
					text: "Custom",
					footnote: "4bcf6deb-b4e0-4a38-bf27-121938b2768f",
				},
				releaseDelay: { text: "n/a" },
				updateTypes: { text: "paid/paid" },
				remarks: { text: "none" },
			},
		},
		{
			id: "zing-11",
			information: {
				name: "Zing 11",
				version: 11,
				downloadSite: "https://www.azul.com/downloads/?version=java-11-lts#prime",
			},
			features: {
				virtualMachine: { text: "Zing" },
				classLibraries: { text: "OpenJDK" },
				javaFX: { present: Present.NO },
				flightRecorder: { present: Present.YES },
				javaWS: { present: Present.NO },
				// To check GC availability, run `java -XX:+UseSerialGC -Xnativevmflags:warn -version` (example with Serial GC)
				gc: {
					cms: { present: Present.NO },
					epsilon: { present: Present.YES },
					g1: { present: Present.NO },
					parallel: { present: Present.NO },
					serial: { present: Present.NO },
					shenandoah: { present: Present.NO },
					z: { present: Present.NO },
					custom: { text: "C4", footnote: "ee106e4d-0f10-4944-8547-4d896386f61d" },
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
					ppc64: { present: Present.NO },
					riscv64: { present: Present.NO },
					s390x: { present: Present.NO },
					apk: { present: Present.NO },
					deb: { present: Present.YES },
					rpm: { present: Present.YES },
					containerImages: { present: Present.YES },
				},
				windows: {
					x32: { present: Present.NO },
					x64: { present: Present.NO },
					aarch64: { present: Present.NO },
					installers: { present: Present.NO },
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
					text: "JRE",
					footnote: "3a460237-d12b-4ba4-b98e-8a6f081bcd9e",
				},
				customisations: {
					text: "many",
					footnote: "ace95bf5-c597-4ce2-b50e-94354610301a",
				},
				notableFeatures: {
					text: "Cloud Native Compiler, Falcon JIT, ReadyNow",
					footnote: "180b008e-82e9-47a8-8c4d-81f419b834da",
				},
				license: { text: "Proprietary" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.NO },
				sbom: { present: Present.NO },
				paidSupport: {
					present: Present.YES,
				},
				eolDate: {
					text: "2032-01",
					footnote: "0bb09fec-66c9-4e10-b9a6-c981d9d6861b",
				},
				releaseSchedule: {
					text: "Custom",
					footnote: "4bcf6deb-b4e0-4a38-bf27-121938b2768f",
				},
				releaseDelay: { text: "n/a" },
				updateTypes: { text: "paid/paid" },
				remarks: { text: "none" },
			},
		},
		{
			id: "zing-17",
			information: {
				name: "Zing 17",
				version: 17,
				downloadSite: "https://www.azul.com/downloads/?version=java-17-lts#prime",
			},
			features: {
				virtualMachine: { text: "Zing" },
				classLibraries: { text: "OpenJDK" },
				javaFX: { present: Present.NO },
				flightRecorder: { present: Present.YES },
				javaWS: { present: Present.NO },
				// To check GC availability, run `java -XX:+UseSerialGC -Xnativevmflags:warn -version` (example with Serial GC)
				gc: {
					cms: { present: Present.NO },
					epsilon: { present: Present.YES },
					g1: { present: Present.NO },
					parallel: { present: Present.NO },
					serial: { present: Present.NO },
					shenandoah: { present: Present.NO },
					z: { present: Present.NO },
					custom: { text: "C4", footnote: "ee106e4d-0f10-4944-8547-4d896386f61d" },
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
					ppc64: { present: Present.NO },
					riscv64: { present: Present.NO },
					s390x: { present: Present.NO },
					apk: { present: Present.NO },
					deb: { present: Present.YES },
					rpm: { present: Present.YES },
					containerImages: { present: Present.YES },
				},
				windows: {
					x32: { present: Present.NO },
					x64: { present: Present.NO },
					aarch64: { present: Present.NO },
					installers: { present: Present.NO },
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
					text: "JRE",
					footnote: "3a460237-d12b-4ba4-b98e-8a6f081bcd9e",
				},
				customisations: {
					text: "many",
					footnote: "ace95bf5-c597-4ce2-b50e-94354610301a",
				},
				notableFeatures: {
					text: "Cloud Native Compiler, Falcon JIT, ReadyNow",
					footnote: "180b008e-82e9-47a8-8c4d-81f419b834da",
				},
				license: { text: "Proprietary" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.NO },
				sbom: { present: Present.NO },
				paidSupport: {
					present: Present.YES,
				},
				eolDate: {
					text: "2029-09",
					footnote: "0bb09fec-66c9-4e10-b9a6-c981d9d6861b",
				},
				releaseSchedule: {
					text: "Custom",
					footnote: "4bcf6deb-b4e0-4a38-bf27-121938b2768f",
				},
				releaseDelay: { text: "n/a" },
				updateTypes: { text: "paid/paid" },
				remarks: { text: "none" },
			},
		},
		{
			id: "zing-21",
			information: {
				name: "Zing 21",
				version: 21,
				downloadSite: "https://www.azul.com/downloads/?version=java-21-lts#prime",
			},
			features: {
				virtualMachine: { text: "Zing" },
				classLibraries: { text: "OpenJDK" },
				javaFX: { present: Present.NO },
				flightRecorder: { present: Present.YES },
				javaWS: { present: Present.NO },
				// To check GC availability, run `java -XX:+UseSerialGC -Xnativevmflags:warn -version` (example with Serial GC)
				gc: {
					cms: { present: Present.NO },
					epsilon: { present: Present.YES },
					g1: { present: Present.NO },
					parallel: { present: Present.NO },
					serial: { present: Present.NO },
					shenandoah: { present: Present.NO },
					z: { present: Present.NO },
					custom: { text: "C4", footnote: "ee106e4d-0f10-4944-8547-4d896386f61d" },
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
					ppc64: { present: Present.NO },
					riscv64: { present: Present.NO },
					s390x: { present: Present.NO },
					apk: { present: Present.NO },
					deb: { present: Present.YES },
					rpm: { present: Present.YES },
					containerImages: { present: Present.YES },
				},
				windows: {
					x32: { present: Present.NO },
					x64: { present: Present.NO },
					aarch64: { present: Present.NO },
					installers: { present: Present.NO },
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
					text: "JRE",
					footnote: "3a460237-d12b-4ba4-b98e-8a6f081bcd9e",
				},
				customisations: {
					text: "many",
					footnote: "ace95bf5-c597-4ce2-b50e-94354610301a",
				},
				notableFeatures: {
					text: "Cloud Native Compiler, Falcon JIT, ReadyNow",
					footnote: "180b008e-82e9-47a8-8c4d-81f419b834da",
				},
				license: { text: "Proprietary" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.NO },
				sbom: { present: Present.NO },
				paidSupport: {
					present: Present.YES,
				},
				eolDate: {
					text: "2031-09",
					footnote: "0bb09fec-66c9-4e10-b9a6-c981d9d6861b",
				},
				releaseSchedule: {
					text: "Custom",
					footnote: "4bcf6deb-b4e0-4a38-bf27-121938b2768f",
				},
				releaseDelay: { text: "n/a" },
				updateTypes: { text: "paid/paid" },
				remarks: { text: "none" },
			},
		},
		{
			id: "zulu-8",
			information: {
				name: "Zulu 8",
				version: 8,
				downloadSite: "https://www.azul.com/downloads/?version=java-8-lts#zulu",
			},
			features: {
				virtualMachine: { text: "HotSpot" },
				classLibraries: { text: "OpenJDK" },
				javaFX: {
					present: Present.PARTIALLY,
					footnote: "0d62b486-9052-4a0c-b2b0-0b318c461be5",
				},
				flightRecorder: { present: Present.YES },
				javaWS: {
					present: Present.NO,
					footnote: "da467d88-e856-4d41-bf9b-d8a678b05262",
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
				// Azul support matrix: https://docs.azul.com/core/zulu-openjdk/supported-platforms
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
					apk: { present: Present.NO },
					deb: {
						// Only x86, 64-bit and ARM, 64-bit
						present: Present.PARTIALLY,
						footnote: "b8e647d8-44e4-4241-9064-23d35315e5ac",
					},
					rpm: {
						// Only x86, 64-bit and ARM, 64-bit
						present: Present.PARTIALLY,
						footnote: "b8e647d8-44e4-4241-9064-23d35315e5ac",
					},
					containerImages: {
						// Only x86, 64-bit and ARM, 64-bit
						present: Present.PARTIALLY,
						footnote: "fdc63639-fa45-489e-9264-6419a212f398",
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
				aqavit: { present: Present.YES },
				tck: { present: Present.YES },
				editions: {
					text: "JRE",
					footnote: "96bee46b-fcbb-4929-ad24-c0e94d2d2bed",
				},
				customisations: {
					text: "few",
					footnote: "c8237922-a8c7-46f8-b913-ccf318ea3f96",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: { present: Present.NO },
				paidSupport: {
					present: Present.YES,
				},
				eolDate: {
					text: "2030-12",
					footnote: "0bb09fec-66c9-4e10-b9a6-c981d9d6861b",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "0-3 days" },
				updateTypes: { text: "paid/free" },
				remarks: { text: "none" },
			},
		},
		{
			id: "zulu-11",
			information: {
				name: "Zulu 11",
				version: 11,
				downloadSite: "https://www.azul.com/downloads/?version=java-11-lts#zulu",
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
						footnote: "9f045370-85d4-4923-9c84-f6257d2cf882",
					},
					z: {
						present: Present.PARTIALLY,
						footnote: "21ef23f8-3cc2-45e9-b6b3-5e278a43c51f",
					},
					custom: { text: "none" },
				},
				// Azul support matrix: https://docs.azul.com/core/zulu-openjdk/supported-platforms
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
					ppc64: { present: Present.NO },
					riscv64: { present: Present.NO },
					s390x: { present: Present.NO },
					apk: { present: Present.NO },
					deb: {
						// Only x86, 64-bit and ARM, 64-bit
						present: Present.PARTIALLY,
						footnote: "b8e647d8-44e4-4241-9064-23d35315e5ac",
					},
					rpm: {
						// Only x86, 64-bit and ARM, 64-bit
						present: Present.PARTIALLY,
						footnote: "b8e647d8-44e4-4241-9064-23d35315e5ac",
					},
					containerImages: {
						// Only x86, 64-bit and ARM, 64-bit
						present: Present.PARTIALLY,
						footnote: "fdc63639-fa45-489e-9264-6419a212f398",
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
				aqavit: { present: Present.YES },
				tck: { present: Present.YES },
				editions: {
					text: "JRE, OpenJFX",
					footnote: "96bee46b-fcbb-4929-ad24-c0e94d2d2bed",
				},
				customisations: {
					text: "few",
					footnote: "c8237922-a8c7-46f8-b913-ccf318ea3f96",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: { present: Present.NO },
				paidSupport: {
					present: Present.YES,
				},
				eolDate: {
					text: "2032-01",
					footnote: "0bb09fec-66c9-4e10-b9a6-c981d9d6861b",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "0-3 days" },
				updateTypes: { text: "paid/free" },
				remarks: { text: "none" },
			},
		},
		{
			id: "zulu-17",
			information: {
				name: "Zulu 17",
				version: 17,
				downloadSite: "https://www.azul.com/downloads/?version=java-17-lts#zulu",
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
						footnote: "9f045370-85d4-4923-9c84-f6257d2cf882",
					},
					z: {
						present: Present.PARTIALLY,
						footnote: "21ef23f8-3cc2-45e9-b6b3-5e278a43c51f",
					},
					custom: { text: "none" },
				},
				// Azul support matrix: https://docs.azul.com/core/zulu-openjdk/supported-platforms
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
					ppc64: { present: Present.NO },
					riscv64: { present: Present.NO },
					s390x: { present: Present.NO },
					apk: { present: Present.NO },
					deb: {
						// Only x86, 64-bit and ARM, 64-bit
						present: Present.PARTIALLY,
						footnote: "b8e647d8-44e4-4241-9064-23d35315e5ac",
					},
					rpm: {
						// Only x86, 64-bit and ARM, 64-bit
						present: Present.PARTIALLY,
						footnote: "b8e647d8-44e4-4241-9064-23d35315e5ac",
					},
					containerImages: {
						// Only x86, 64-bit and ARM, 64-bit
						present: Present.PARTIALLY,
						footnote: "fdc63639-fa45-489e-9264-6419a212f398",
					},
				},
				windows: {
					x32: { present: Present.YES },
					x64: { present: Present.YES },
					aarch64: { present: Present.YES },
					installers: {
						present: Present.PARTIALLY,
						footnote: "5e73b813-c473-4a41-bcdb-001e6e2b97a1",
					},
					containerImages: { present: Present.NO },
				},
				otherPlatforms: {
					aixPPC: { present: Present.NO },
					solarisSPARC: { present: Present.NO },
					solarisx64: { present: Present.NO },
				},
				aqavit: { present: Present.YES },
				tck: { present: Present.YES },
				editions: {
					text: "CRaC, JRE, OpenJFX",
					footnote: "96bee46b-fcbb-4929-ad24-c0e94d2d2bed",
				},
				customisations: {
					text: "few",
					footnote: "c8237922-a8c7-46f8-b913-ccf318ea3f96",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: { present: Present.NO },
				paidSupport: {
					present: Present.YES,
				},
				eolDate: {
					text: "2029-09",
					footnote: "0bb09fec-66c9-4e10-b9a6-c981d9d6861b",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "0-3 days" },
				updateTypes: { text: "paid/free" },
				remarks: { text: "none" },
			},
		},
		{
			id: "zulu-21",
			information: {
				name: "Zulu 21",
				version: 21,
				downloadSite: "https://www.azul.com/downloads/?version=java-21-lts#zulu",
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
						present: Present.YES,
					},
					z: {
						present: Present.YES,
					},
					custom: { text: "none" },
				},
				// Azul support matrix: https://docs.azul.com/core/zulu-openjdk/supported-platforms
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
					apk: { present: Present.NO },
					deb: { present: Present.YES },
					rpm: { present: Present.YES },
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
				aqavit: { present: Present.YES },
				tck: { present: Present.YES },
				editions: {
					text: "CRaC, JRE, OpenJFX",
					footnote: "96bee46b-fcbb-4929-ad24-c0e94d2d2bed",
				},
				customisations: {
					text: "few",
					footnote: "c8237922-a8c7-46f8-b913-ccf318ea3f96",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: { present: Present.NO },
				paidSupport: {
					present: Present.YES,
				},
				eolDate: {
					text: "2031-09",
					footnote: "0bb09fec-66c9-4e10-b9a6-c981d9d6861b",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "0-3 days" },
				updateTypes: { text: "paid/free" },
				remarks: { text: "none" },
			},
		},
		{
			id: "zulu-22",
			information: {
				name: "Zulu 22",
				version: 22,
				downloadSite: "https://www.azul.com/downloads/?version=java-22#zulu",
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
				// Azul support matrix: https://docs.azul.com/core/zulu-openjdk/supported-platforms
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
					apk: { present: Present.NO },
					deb: { present: Present.YES },
					rpm: { present: Present.YES },
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
				aqavit: { present: Present.UNKNOWN },
				tck: { present: Present.YES },
				editions: {
					text: "CRaC, JRE, OpenJFX",
					footnote: "96bee46b-fcbb-4929-ad24-c0e94d2d2bed",
				},
				customisations: {
					text: "few",
					footnote: "c8237922-a8c7-46f8-b913-ccf318ea3f96",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: { present: Present.NO },
				paidSupport: {
					present: Present.YES,
				},
				eolDate: {
					text: "2024-09",
					footnote: "0bb09fec-66c9-4e10-b9a6-c981d9d6861b",
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
			id: "ee106e4d-0f10-4944-8547-4d896386f61d",
			markdown:
				"[C4](https://docs.azul.com/prime/what-to-expect#garbage-collection) is a proprietary, concurrent, " +
				"low latency garbage collector.",
		},
		{
			id: "3a460237-d12b-4ba4-b98e-8a6f081bcd9e",
			markdown: "The JRE is only available on x86, 64-bit.",
		},
		{
			id: "ace95bf5-c597-4ce2-b50e-94354610301a",
			markdown:
				"The Azul Zing documentation gives a [high-level overview of the differences between OpenJDK and " +
				"Azul Zing](https://docs.azul.com/prime/what-to-expect).",
		},
		{
			id: "180b008e-82e9-47a8-8c4d-81f419b834da",
			markdown:
				"To learn more, see Azul's documentation about [Cloud Native " +
				"Compiler](https://docs.azul.com/optimizer-hub/about/cloud-native-compiler.html)," +
				"[Falcon JIT](https://docs.azul.com/prime/Falcon-Compiler), and " +
				"[ReadyNow](https://docs.azul.com/prime/Use-ReadyNow.html).",
		},
		{
			id: "4bcf6deb-b4e0-4a38-bf27-121938b2768f",
			markdown:
				"Azul Zing comes as monthly stream builds for development and trial purposes as well as stable builds. See " +
				"the [Azul Zing Release Notes](https://docs.azul.com/prime/release-notes) for details.",
		},
		{
			id: "0d62b486-9052-4a0c-b2b0-0b318c461be5",
			markdown:
				"JavaFX is only available on macOS, Linux, and Windows on x86, 32-bit and 64-bit, and macOS, ARM, " +
				"64-bit.",
		},
		{
			id: "b8e647d8-44e4-4241-9064-23d35315e5ac",
			markdown:
				"Deb and RPM are only published for a subset of platforms. Those include x86, 64-bit and ARM, 64-bit.",
		},
		{
			id: "fdc63639-fa45-489e-9264-6419a212f398",
			markdown:
				"Container images are only published for a subset of platforms: x86, 64-bit and ARM, 64-bit. For " +
				"details, see [Azul's Docker Hub page](https://hub.docker.com/r/azul/zulu-openjdk).",
		},
		{
			id: "96bee46b-fcbb-4929-ad24-c0e94d2d2bed",
			markdown:
				"Editions are only available for a subset of platforms. [Coordinated Restore at " +
				"Checkpoint](https://www.azul.com/products/components/crac/) (CRaC) is a future " +
				"OpenJDK feature that drastically reduces start-up and warm-up time.",
		},
		{
			id: "c8237922-a8c7-46f8-b913-ccf318ea3f96",
			markdown:
				"The list of customisations is included in the release notes of each Azul Zulu release, for example, " +
				"[the January 2024 release notes](https://docs.azul.com/core/release/january-2024/release-notes.html).",
		},
		{
			id: "0bb09fec-66c9-4e10-b9a6-c981d9d6861b",
			markdown:
				"For details, see Azul's site [Support lifecycle for existing and planned JDK " +
				"releases](https://www.azul.com/products/azul-support-roadmap/).",
		},
		{
			id: "da467d88-e856-4d41-bf9b-d8a678b05262",
			markdown:
				"Azul provides [builds](https://www.azul.com/products/components/icedtea-web/) of " +
				"[IcedTea-Web](https://github.com/AdoptOpenJDK/IcedTea-Web), an open source implementation of Web " +
				"Start. Those can be used with Azul Zulu.",
		},
		{
			id: "9f045370-85d4-4923-9c84-f6257d2cf882",
			markdown:
				"[Shenandoah GC is not available on all " +
				"platforms](https://wiki.openjdk.org/display/shenandoah) that Azul Zulu is offered for.",
		},
		{
			id: "21ef23f8-3cc2-45e9-b6b3-5e278a43c51f",
			markdown:
				"[ZGC is not available on all platforms](https://wiki.openjdk.org/display/zgc) that Azul Zulu is " +
				"offered for. Furthermore, it is experimental on some platforms depending on the version.",
		},
		{
			id: "5e73b813-c473-4a41-bcdb-001e6e2b97a1",
			markdown: "No installer available for Windows on ARM, 64-bit.",
		},
	],
};

// noinspection JSUnusedGlobalSymbols because we import dynamically
export default data;
