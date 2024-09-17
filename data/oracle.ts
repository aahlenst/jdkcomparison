/*
 * Copyright 2023 the original author or authors.
 *
 * This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of
 * this license, visit http://creativecommons.org/licenses/by-sa/4.0/ or send a letter to Creative Commons, PO Box 1866,
 * Mountain View, CA 94042, USA.
 */
import { Present, Vendor } from "@/src/vendorDataTypes";

export const data: Vendor = {
	vendor: "Oracle",
	countryOfOrigin: "USA",
	website: "https://oracle.com/java",
	jdks: [
		{
			id: "graalvm-17",
			information: {
				name: "GraalVM for JDK 17",
				version: 17,
				downloadSite: "https://www.oracle.com/java/technologies/downloads/#graalvmjava17",
			},
			features: {
				virtualMachine: {
					text: "HotSpot",
					footnote: "bb5765d8-59d9-4ce4-9d47-d89b3a66ef82",
				},
				classLibraries: { text: "OpenJDK" },
				javaFX: { present: Present.NO },
				flightRecorder: { present: Present.YES },
				javaWS: { present: Present.NO },
				gc: {
					cms: { present: Present.NO },
					epsilon: { present: Present.NO },
					g1: { present: Present.YES },
					parallel: { present: Present.YES },
					serial: { present: Present.YES },
					shenandoah: { present: Present.NO },
					z: { present: Present.YES },
					custom: { text: "none" },
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
					deb: { present: Present.NO },
					rpm: { present: Present.NO },
					containerImages: {
						present: Present.YES,
						footnote: "691e17bb-4ca9-4716-8ab2-cb2647d6ac942",
					},
				},
				mac: {
					x64: { present: Present.YES },
					aarch64: { present: Present.YES },
					installers: { present: Present.NO },
				},
				windows: {
					x32: { present: Present.NO },
					x64: { present: Present.YES },
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
				tck: {
					present: Present.PARTIALLY,
					footnote: "7de93e18-1715-4337-8f45-35e1786c59ca",
				},
				editions: { text: "none" },
				customisations: { text: "many" },
				notableFeatures: {
					text: "Graal Compiler, Native Image, Truffle",
					footnote: "905a8e5e-8104-4d2b-aaf6-7e56ec4e9072",
				},
				license: { text: "Proprietary" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: {
					present: Present.PARTIALLY,
					footnote: "89192778-e781-40bd-ad67-3ba06f958de3",
				},
				sbom: { present: Present.NO },
				paidSupport: { present: Present.YES },
				eolDate: { text: "2029-09", footnote: "85941abe-619f-41be-8ae2-266abcd05580" },
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "none" },
				updateTypes: { text: "paid/tiered" },
				remarks: { text: "none" },
			},
		},
		{
			id: "graalvm-21",
			information: {
				name: "GraalVM for JDK 21",
				version: 21,
				downloadSite: "https://www.oracle.com/java/technologies/downloads/#graalvmjava21",
			},
			features: {
				virtualMachine: {
					text: "HotSpot",
					footnote: "bb5765d8-59d9-4ce4-9d47-d89b3a66ef82",
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
					shenandoah: { present: Present.NO },
					z: { present: Present.YES },
					custom: { text: "none" },
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
					deb: { present: Present.NO },
					rpm: { present: Present.NO },
					containerImages: {
						present: Present.YES,
						footnote: "691e17bb-4ca9-4716-8ab2-cb2647d6ac942",
					},
				},
				mac: {
					x64: { present: Present.YES },
					aarch64: { present: Present.YES },
					installers: { present: Present.NO },
				},
				windows: {
					x32: { present: Present.NO },
					x64: { present: Present.YES },
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
				tck: {
					present: Present.PARTIALLY,
					footnote: "7de93e18-1715-4337-8f45-35e1786c59ca",
				},
				editions: { text: "none" },
				customisations: { text: "many" },
				notableFeatures: {
					text: "Graal Compiler, Native Image, Truffle",
					footnote: "905a8e5e-8104-4d2b-aaf6-7e56ec4e9072",
				},
				license: { text: "Proprietary" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: {
					present: Present.PARTIALLY,
					footnote: "89192778-e781-40bd-ad67-3ba06f958de3",
				},
				sbom: { present: Present.NO },
				paidSupport: { present: Present.YES },
				eolDate: { text: "2031-09", footnote: "85941abe-619f-41be-8ae2-266abcd05580" },
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "none" },
				updateTypes: { text: "paid/tiered" },
				remarks: { text: "none" },
			},
		},
		{
			id: "graalvm-23",
			information: {
				name: "GraalVM for JDK 23",
				version: 23,
				downloadSite: "https://www.oracle.com/java/technologies/downloads/#graalvmjava23",
			},
			features: {
				virtualMachine: {
					text: "HotSpot",
					footnote: "bb5765d8-59d9-4ce4-9d47-d89b3a66ef82",
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
					shenandoah: { present: Present.NO },
					z: { present: Present.YES },
					custom: { text: "none" },
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
					deb: { present: Present.NO },
					rpm: { present: Present.NO },
					containerImages: {
						present: Present.YES,
						footnote: "691e17bb-4ca9-4716-8ab2-cb2647d6ac942",
					},
				},
				mac: {
					x64: { present: Present.YES },
					aarch64: { present: Present.YES },
					installers: { present: Present.NO },
				},
				windows: {
					x32: { present: Present.NO },
					x64: { present: Present.YES },
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
				tck: {
					present: Present.PARTIALLY,
					footnote: "7de93e18-1715-4337-8f45-35e1786c59ca",
				},
				editions: { text: "none" },
				customisations: { text: "many" },
				notableFeatures: {
					text: "Graal Compiler, Native Image, Truffle",
					footnote: "905a8e5e-8104-4d2b-aaf6-7e56ec4e9072",
				},
				license: { text: "Proprietary" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: {
					present: Present.PARTIALLY,
					footnote: "89192778-e781-40bd-ad67-3ba06f958de3",
				},
				sbom: { present: Present.NO },
				paidSupport: { present: Present.YES },
				eolDate: { text: "2025-03" },
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "none" },
				updateTypes: { text: "paid/tiered" },
				remarks: { text: "none" },
			},
		},
		{
			id: "graalvm-ce-22",
			information: {
				name: "GraalVM CE 22",
				version: 22,
				downloadSite: "https://github.com/graalvm/graalvm-ce-builds/releases/",
			},
			features: {
				virtualMachine: {
					text: "HotSpot",
					footnote: "bb5765d8-59d9-4ce4-9d47-d89b3a66ef82",
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
					shenandoah: { present: Present.NO },
					z: { present: Present.YES },
					custom: { text: "none" },
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
					deb: { present: Present.NO },
					rpm: { present: Present.NO },
					containerImages: {
						present: Present.YES,
						footnote: "b0d2bc5c-970f-4947-97f8-0f012aa6b25a",
					},
				},
				mac: {
					x64: { present: Present.YES },
					aarch64: { present: Present.YES },
					installers: { present: Present.NO },
				},
				windows: {
					x32: { present: Present.NO },
					x64: { present: Present.YES },
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
				tck: {
					present: Present.PARTIALLY,
					footnote: "7de93e18-1715-4337-8f45-35e1786c59ca",
				},
				editions: { text: "none" },
				customisations: { text: "many" },
				notableFeatures: {
					text: "Graal Compiler, Native Image, Truffle",
					footnote: "5dc0ea32-c111-46a3-97ed-ccce4672770f",
				},
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: { present: Present.NO },
				paidSupport: { present: Present.NO },
				eolDate: { text: "2024-09" },
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "none" },
				updateTypes: { text: "no/free" },
				remarks: {
					text: "Lacks features of the enterprise edition",
					footnote: "b03a6480-3303-40ac-bd45-e94c050f7528",
				},
			},
		},
		{
			id: "openjdk-23",
			information: {
				name: "OpenJDK 23",
				version: 23,
				downloadSite: "https://jdk.java.net/23",
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
					shenandoah: { present: Present.NO },
					z: { present: Present.YES },
					custom: { text: "none" },
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
					deb: { present: Present.NO },
					rpm: { present: Present.NO },
					containerImages: {
						present: Present.YES,
						footnote: "40d1ed1a-f40d-41a8-9a79-f8a82aece8f2",
					},
				},
				mac: {
					x64: { present: Present.YES },
					aarch64: { present: Present.YES },
					installers: { present: Present.NO },
				},
				windows: {
					x32: { present: Present.NO },
					x64: { present: Present.YES },
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
				editions: { text: "none" },
				customisations: { text: "none" },
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: { present: Present.NO },
				paidSupport: { present: Present.NO },
				eolDate: { text: "2025-03" },
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "none" },
				updateTypes: { text: "no/free" },
				remarks: { text: "none" },
			},
		},
		{
			id: "oracle-jdk-8",
			information: {
				name: "Oracle JDK 8",
				version: 8,
				downloadSite: "https://www.oracle.com/java/technologies/downloads/#java8",
			},
			features: {
				virtualMachine: { text: "HotSpot" },
				classLibraries: { text: "OpenJDK" },
				javaFX: { present: Present.PARTIALLY },
				flightRecorder: { present: Present.YES },
				javaWS: { present: Present.YES },
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
					x32: { present: Present.YES },
					x64: { present: Present.YES },
					x64Musl: { present: Present.NO },
					aarch64: { present: Present.YES },
					aarch64Musl: { present: Present.NO },
					aarch32: { present: Present.YES },
					ppc64: { present: Present.NO },
					riscv64: { present: Present.NO },
					s390x: { present: Present.NO },
					apk: { present: Present.NO },
					deb: { present: Present.NO },
					// No repository, no RPM for ARM.
					rpm: {
						present: Present.PARTIALLY,
						footnote: "2cef6afe-7ba7-43bb-b282-a9121992742f",
					},
					containerImages: {
						present: Present.YES,
						footnote: "19645a97-1e0e-40ba-a9ae-4e2a8c938402",
					},
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
				customisations: { text: "many" },
				notableFeatures: { text: "none" },
				license: { text: "Proprietary" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.NO },
				sbom: { present: Present.NO },
				paidSupport: { present: Present.YES },
				eolDate: {
					text: "2030-12",
					footnote: "e51a53a9-3309-4cbe-8bde-39b652246385",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "none" },
				updateTypes: { text: "paid/tiered" },
				remarks: { text: "none" },
			},
		},
		{
			id: "oracle-jdk-11",
			information: {
				name: "Oracle JDK 11",
				version: 11,
				downloadSite: "https://www.oracle.com/java/technologies/downloads/#java11",
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
						footnote: "6576d2d3-c547-4bb6-afea-be54dee845ac",
					},
					custom: { text: "none" },
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
					// No repository, no Deb on AArch64.
					deb: {
						present: Present.PARTIALLY,
						footnote: "2cef6afe-7ba7-43bb-b282-a9121992742f",
					},
					// No repository.
					rpm: { present: Present.PARTIALLY },
					containerImages: {
						present: Present.YES,
						footnote: "19645a97-1e0e-40ba-a9ae-4e2a8c938402",
					},
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
					containerImages: { present: Present.NO },
				},
				otherPlatforms: {
					aixPPC: { present: Present.NO },
					solarisSPARC: { present: Present.YES },
					solarisx64: { present: Present.NO },
				},
				aqavit: { present: Present.NO },
				tck: { present: Present.YES },
				editions: { text: "none" },
				customisations: { text: "unknown" },
				notableFeatures: { text: "none" },
				license: { text: "Proprietary" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.NO },
				sbom: { present: Present.NO },
				paidSupport: { present: Present.YES },
				eolDate: { text: "2032-01", footnote: "85941abe-619f-41be-8ae2-266abcd05580" },
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "none" },
				updateTypes: { text: "paid/tiered" },
				remarks: { text: "none" },
			},
		},
		{
			id: "oracle-jdk-17",
			information: {
				name: "Oracle JDK 17",
				version: 17,
				downloadSite: "https://www.oracle.com/java/technologies/downloads/#java17",
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
					shenandoah: { present: Present.NO },
					z: { present: Present.YES },
					custom: { text: "none" },
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
					// No repository, no Deb on AArch64.
					deb: {
						present: Present.PARTIALLY,
						footnote: "2cef6afe-7ba7-43bb-b282-a9121992742f",
					},
					// No repository.
					rpm: {
						present: Present.PARTIALLY,
						footnote: "2cef6afe-7ba7-43bb-b282-a9121992742f",
					},
					containerImages: {
						present: Present.YES,
						footnote: "19645a97-1e0e-40ba-a9ae-4e2a8c938402",
					},
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
					containerImages: { present: Present.NO },
				},
				otherPlatforms: {
					aixPPC: { present: Present.NO },
					solarisSPARC: { present: Present.NO },
					solarisx64: { present: Present.NO },
				},
				aqavit: { present: Present.NO },
				tck: { present: Present.YES },
				editions: { text: "none" },
				customisations: { text: "unknown" },
				notableFeatures: { text: "none" },
				license: { text: "Proprietary" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: {
					present: Present.PARTIALLY,
					footnote: "3fcf888c-5cde-4f1f-a433-2b4d42720030",
				},
				sbom: { present: Present.NO },
				paidSupport: { present: Present.YES },
				eolDate: { text: "2029-09", footnote: "85941abe-619f-41be-8ae2-266abcd05580" },
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "none" },
				updateTypes: { text: "paid/tiered" },
				remarks: { text: "none" },
			},
		},
		{
			id: "oracle-jdk-21",
			information: {
				name: "Oracle JDK 21",
				version: 21,
				downloadSite: "https://www.oracle.com/java/technologies/downloads/#java21",
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
					shenandoah: { present: Present.NO },
					z: { present: Present.YES },
					custom: { text: "none" },
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
					// No repository, no Deb on AArch64.
					deb: {
						present: Present.PARTIALLY,
						footnote: "2cef6afe-7ba7-43bb-b282-a9121992742f",
					},
					// No repository.
					rpm: {
						present: Present.PARTIALLY,
						footnote: "2cef6afe-7ba7-43bb-b282-a9121992742f",
					},
					containerImages: {
						present: Present.YES,
						footnote: "19645a97-1e0e-40ba-a9ae-4e2a8c938402",
					},
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
					containerImages: { present: Present.NO },
				},
				otherPlatforms: {
					aixPPC: { present: Present.NO },
					solarisSPARC: { present: Present.NO },
					solarisx64: { present: Present.NO },
				},
				aqavit: { present: Present.NO },
				tck: { present: Present.YES },
				editions: { text: "none" },
				customisations: { text: "unknown" },
				notableFeatures: { text: "none" },
				license: { text: "Proprietary" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: {
					present: Present.PARTIALLY,
					footnote: "3fcf888c-5cde-4f1f-a433-2b4d42720030",
				},
				sbom: { present: Present.NO },
				paidSupport: { present: Present.YES },
				eolDate: { text: "2031-09", footnote: "85941abe-619f-41be-8ae2-266abcd05580" },
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "none" },
				updateTypes: { text: "paid/tiered" },
				remarks: { text: "none" },
			},
		},
		{
			id: "oracle-jdk-23",
			information: {
				name: "Oracle JDK 23",
				version: 23,
				downloadSite: "https://www.oracle.com/java/technologies/downloads/#java23",
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
					shenandoah: { present: Present.NO },
					z: { present: Present.YES },
					custom: { text: "none" },
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
					// No repository, no Deb on AArch64.
					deb: {
						present: Present.PARTIALLY,
						footnote: "2cef6afe-7ba7-43bb-b282-a9121992742f",
					},
					// No repository.
					rpm: {
						present: Present.PARTIALLY,
						footnote: "2cef6afe-7ba7-43bb-b282-a9121992742f",
					},
					containerImages: {
						present: Present.YES,
						footnote: "19645a97-1e0e-40ba-a9ae-4e2a8c938402",
					},
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
					containerImages: { present: Present.NO },
				},
				otherPlatforms: {
					aixPPC: { present: Present.NO },
					solarisSPARC: { present: Present.NO },
					solarisx64: { present: Present.NO },
				},
				aqavit: { present: Present.NO },
				tck: { present: Present.YES },
				editions: { text: "none" },
				customisations: { text: "unknown" },
				notableFeatures: { text: "none" },
				license: { text: "Proprietary" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: {
					present: Present.PARTIALLY,
					footnote: "3fcf888c-5cde-4f1f-a433-2b4d42720030",
				},
				sbom: { present: Present.NO },
				paidSupport: { present: Present.YES },
				eolDate: { text: "2025-03" },
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "none" },
				updateTypes: { text: "paid/tiered" },
				remarks: { text: "none" },
			},
		},
	],
	footnotes: [
		{
			id: "bb5765d8-59d9-4ce4-9d47-d89b3a66ef82",
			markdown:
				"GraalVM runs applications normally on the HotSpot VM, in Native Image, or on Truffle. " +
				"See the [GraalVM Architecture Overview](https://docs.oracle.com/en/graalvm/enterprise/21/docs/overview/architecture/) for more information.",
		},
		{
			id: "691e17bb-4ca9-4716-8ab2-cb2647d6ac942",
			markdown:
				"[OCI images with GraalVM](https://container-registry.oracle.com/ords/ocr/ba/graalvm) are hosted on the Oracle Container Registry.",
		},
		{
			id: "905a8e5e-8104-4d2b-aaf6-7e56ec4e9072",
			markdown:
				"[Graal Compiler](https://docs.oracle.com/en/graalvm/enterprise/21/docs/reference-manual/java/compiler/) is an advanced JIT for HotSpot. " +
				"[Native Image](https://docs.oracle.com/en/graalvm/enterprise/21/docs/reference-manual/native-image/) compiles Java applications down to native executables for faster start-up (only Serial GC plus G1 GC on Linux). " +
				"[Truffle](https://docs.oracle.com/en/graalvm/jdk/21/docs/reference-manual/java-on-truffle/) is a separate VM that allows direct interoperability with other languages, such as Python.",
		},
		{
			id: "89192778-e781-40bd-ad67-3ba06f958de3",
			markdown:
				"Production use is governed under the [GraalVM Free Terms and and Conditions](https://www.oracle.com/downloads/licenses/graal-free-license.html) that impose some limitations. " +
				'For example, they restrict the free usage to "internal business operations".' +
				"Furthermore, the version that can be used free of charge only receives updates for three years after the initial release.",
		},
		{
			id: "b0d2bc5c-970f-4947-97f8-0f012aa6b25a",
			markdown:
				"[OCI images with GraalVM CE](https://github.com/graalvm/container/pkgs/container/graalvm-community) are hosted on the GitHub Container Registry.",
		},
		{
			id: "5dc0ea32-c111-46a3-97ed-ccce4672770f",
			markdown:
				"[Graal Compiler](https://www.graalvm.org/latest/reference-manual/java/compiler/) is an advanced JIT for HotSpot. " +
				"[Native Image](https://www.graalvm.org/latest/reference-manual/native-image/) compiles Java applications down to native executables for faster start-up (only Serial GC, no PGO). " +
				"[Truffle](https://www.graalvm.org/latest/reference-manual/java-on-truffle/) is a separate VM that allows direct interoperability with other languages, such as Python.",
		},
		{
			id: "b03a6480-3303-40ac-bd45-e94c050f7528",
			markdown:
				"See the [Feature and Benefit Comparison](https://www.oracle.com/a/ocom/docs/graalvm_enterprise_community_comparison_2021.pdf) provided by Oracle for details.",
		},
		{
			id: "40d1ed1a-f40d-41a8-9a79-f8a82aece8f2",
			markdown:
				"[OCI images with OpenJDK](https://container-registry.oracle.com/ords/ocr/ba/java/openjdk) are hosted on the Oracle Container Registry.",
		},
		{
			id: "19645a97-1e0e-40ba-a9ae-4e2a8c938402",
			markdown:
				"[OCI images with Oracle JDK](https://container-registry.oracle.com/ords/ocr/ba/java/jdk) are hosted on the Oracle Container Registry.",
		},
		{
			id: "e51a53a9-3309-4cbe-8bde-39b652246385",
			markdown:
				"Oracle plans to discontinue support for certain technologies like JavaFX at an earlier date. " +
				"For details, see [Java Client Roadmap " +
				"Update](https://www.oracle.com/technetwork/java/javase/javaclientroadmapupdatev2020may-6548840.pdf). " +
				"Also, consult the [Java SE support " +
				"roadmap](https://www.oracle.com/java/technologies/java-se-support-roadmap.html) for details on " +
				"Oracle's tiered support.",
		},
		{
			id: "6576d2d3-c547-4bb6-afea-be54dee845ac",
			markdown:
				"[ZGC is not available on all platforms](https://wiki.openjdk.org/display/zgc) that Oracle JDK " +
				"is offered for and experimental.",
		},
		{
			id: "2cef6afe-7ba7-43bb-b282-a9121992742f",
			markdown:
				"Oracle only offers individual Linux packages to download, but does not have a central " +
				"package repository. Furthermore, Linux packages for less common platforms are sometimes missing.",
		},
		{
			id: "3fcf888c-5cde-4f1f-a433-2b4d42720030",
			markdown:
				"Production use is governed under the [Oracle No-Fee Terms and " +
				"Conditions](https://www.oracle.com/downloads/licenses/no-fee-license.html) that impose some " +
				'limitations. For example, they restrict the free usage to "internal business operations". ' +
				"Furthermore, the version that can be used free of charge only receives updates for three years " +
				"after the initial release.",
		},
		{
			id: "85941abe-619f-41be-8ae2-266abcd05580",
			markdown:
				"Oracle JDK and GraalVM have a tiered [support " +
				"lifecycle](https://www.oracle.com/java/technologies/java-se-support-roadmap.html). While free " +
				"updates are usually offered for only three years after the initial release, paying customers can " +
				"receive updates for much longer. The comparison lists the end-of-life date for the paid " +
				"extended support.",
		},
		{
			id: "7de93e18-1715-4337-8f45-35e1786c59ca",
			markdown:
				"While GraalVM is a fully conformant implementation of the Java Platform, Native Image is not.",
		},
	],
};

// noinspection JSUnusedGlobalSymbols because we import dynamically
export default data;
