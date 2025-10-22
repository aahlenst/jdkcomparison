/*
 * Copyright 2023 the original author or authors.
 *
 * This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of
 * this license, visit http://creativecommons.org/licenses/by-sa/4.0/ or send a letter to Creative Commons, PO Box 1866,
 * Mountain View, CA 94042, USA.
 */
import { Present, Vendor } from "@/src/vendorDataTypes";

export const data: Vendor = {
	vendor: "Alibaba",
	countryOfOrigin: "PRC",
	website: "https://dragonwell-jdk.io/",
	jdks: [
		{
			id: "dragonwell-8-se",
			information: {
				name: "Dragonwell 8 SE",
				version: 8,
				downloadSite: "https://dragonwell-jdk.io/",
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
					deb: { present: Present.NO },
					rpm: {
						present: Present.PARTIALLY,
						footnote: "30c5b423-f759-49ad-bc4c-2f6cdf9cb8fe",
					},
					containerImages: { present: Present.YES },
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
				aqavit: { present: Present.YES },
				tck: { present: Present.YES },
				editions: { text: "none" },
				customisations: {
					text: "few",
					footnote: "657156b2-7798-458b-b93a-d7b1b207e317",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: {
					present: Present.YES,
					footnote: "3c3737e8-faa9-4954-9fa7-62e130a15332",
				},
				paidSupport: { present: Present.NO },
				eolDate: {
					text: "2026-06",
					footnote: "5377b31e-ff3a-4a7b-a03b-890aebb0f971",
				},
				releaseSchedule: {
					text: "Custom",
					footnote: "a57fac2d-6fbd-4e2d-a5cf-4352b455ec2e",
				},
				releaseDelay: { text: "n/a" },
				updateTypes: { text: "no/free" },
				remarks: { text: "none" },
			},
		},
		{
			id: "dragonwell-8-ee",
			information: {
				name: "Dragonwell 8 EE",
				version: 8,
				downloadSite: "https://dragonwell-jdk.io/",
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
					deb: { present: Present.NO },
					rpm: { present: Present.NO },
					containerImages: { present: Present.YES },
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
				aqavit: { present: Present.YES },
				tck: { present: Present.NO },
				editions: { text: "none" },
				customisations: {
					text: "many",
					footnote: "370c0aa7-27c9-445a-b4f7-8a530d3d335f",
				},
				notableFeatures: {
					text: "ElasticHeap, JWarmup, Wisp",
					footnote: "8f22b6d3-9af1-426e-9fb5-5846c8e91791",
				},
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: {
					present: Present.YES,
					footnote: "3c3737e8-faa9-4954-9fa7-62e130a15332",
				},
				paidSupport: { present: Present.NO },
				eolDate: {
					text: "2026-06",
					footnote: "5377b31e-ff3a-4a7b-a03b-890aebb0f971",
				},
				releaseSchedule: {
					text: "Custom",
					footnote: "a57fac2d-6fbd-4e2d-a5cf-4352b455ec2e",
				},
				releaseDelay: { text: "n/a" },
				updateTypes: { text: "no/free" },
				remarks: { text: "none" },
			},
		},
		{
			id: "dragonwell-11-se",
			information: {
				name: "Dragonwell 11 SE",
				version: 11,
				downloadSite: "https://dragonwell-jdk.io/",
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
					shenandoah: { present: Present.YES },
					z: {
						present: Present.PARTIALLY,
						footnote: "89a28b64-724b-45ad-ae65-80c7eb8f917d",
					},
					custom: { text: "none" },
				},
				mac: {
					x64: { present: Present.NO },
					aarch64: { present: Present.NO },
					installers: { present: Present.NO },
				},
				linux: {
					x32: { present: Present.NO },
					x64: { present: Present.YES },
					x64Musl: { present: Present.YES },
					aarch64: { present: Present.YES },
					aarch64Musl: { present: Present.NO },
					aarch32: { present: Present.NO },
					ppc64: { present: Present.NO },
					riscv64: { present: Present.NO },
					s390x: { present: Present.NO },
					apk: { present: Present.NO },
					deb: { present: Present.NO },
					rpm: { present: Present.NO },
					containerImages: { present: Present.YES },
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
				aqavit: { present: Present.YES },
				tck: { present: Present.NO },
				editions: { text: "none" },
				customisations: {
					text: "few",
					footnote: "657156b2-7798-458b-b93a-d7b1b207e317",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: {
					present: Present.YES,
					footnote: "3c3737e8-faa9-4954-9fa7-62e130a15332",
				},
				paidSupport: { present: Present.NO },
				eolDate: {
					text: "2027-09",
					footnote: "5377b31e-ff3a-4a7b-a03b-890aebb0f971",
				},
				releaseSchedule: {
					text: "Custom",
					footnote: "a57fac2d-6fbd-4e2d-a5cf-4352b455ec2e",
				},
				releaseDelay: { text: "n/a" },
				updateTypes: { text: "no/free" },
				remarks: { text: "none" },
			},
		},
		{
			id: "dragonwell-11-ee",
			information: {
				name: "Dragonwell 11 EE",
				version: 11,
				downloadSite: "https://dragonwell-jdk.io/",
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
					// Only on x86, 64-bit, not musl or ARM, 64-bit
					shenandoah: {
						present: Present.PARTIALLY,
						footnote: "26237bd8-c6cd-4d14-b72b-dbf6987f614f",
					},
					z: { present: Present.YES },
					custom: { text: "none" },
				},
				mac: {
					x64: { present: Present.NO },
					aarch64: { present: Present.NO },
					installers: { present: Present.NO },
				},
				linux: {
					x32: { present: Present.NO },
					x64: { present: Present.YES },
					x64Musl: { present: Present.YES },
					aarch64: { present: Present.YES },
					aarch64Musl: { present: Present.NO },
					aarch32: { present: Present.NO },
					ppc64: { present: Present.NO },
					riscv64: { present: Present.YES },
					s390x: { present: Present.NO },
					apk: { present: Present.NO },
					deb: { present: Present.NO },
					rpm: { present: Present.NO },
					// No RISC-V, 64-bit
					containerImages: { present: Present.PARTIALLY },
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
				aqavit: { present: Present.YES },
				tck: { present: Present.NO },
				editions: { text: "none" },
				customisations: {
					text: "many",
					footnote: "370c0aa7-27c9-445a-b4f7-8a530d3d335f",
				},
				notableFeatures: {
					text: "ElasticHeap, JWarmup, Wisp",
					footnote: "8f22b6d3-9af1-426e-9fb5-5846c8e91791",
				},
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: {
					present: Present.YES,
					footnote: "3c3737e8-faa9-4954-9fa7-62e130a15332",
				},
				paidSupport: { present: Present.NO },
				eolDate: {
					text: "2027-09",
					footnote: "5377b31e-ff3a-4a7b-a03b-890aebb0f971",
				},
				releaseSchedule: {
					text: "Custom",
					footnote: "a57fac2d-6fbd-4e2d-a5cf-4352b455ec2e",
				},
				releaseDelay: { text: "n/a" },
				updateTypes: { text: "no/free" },
				remarks: { text: "none" },
			},
		},
		{
			id: "dragonwell-17-se",
			information: {
				name: "Dragonwell 17 SE",
				version: 17,
				downloadSite: "https://dragonwell-jdk.io/",
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
					x64: { present: Present.NO },
					aarch64: { present: Present.NO },
					installers: { present: Present.NO },
				},
				linux: {
					x32: { present: Present.NO },
					x64: { present: Present.YES },
					x64Musl: { present: Present.YES },
					aarch64: { present: Present.YES },
					aarch64Musl: { present: Present.NO },
					aarch32: { present: Present.NO },
					ppc64: { present: Present.NO },
					riscv64: { present: Present.NO },
					s390x: { present: Present.NO },
					apk: { present: Present.NO },
					deb: { present: Present.NO },
					rpm: { present: Present.NO },
					containerImages: { present: Present.YES },
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
				aqavit: { present: Present.YES },
				tck: { present: Present.NO },
				editions: { text: "none" },
				customisations: {
					text: "few",
					footnote: "657156b2-7798-458b-b93a-d7b1b207e317",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: {
					present: Present.YES,
					footnote: "3c3737e8-faa9-4954-9fa7-62e130a15332",
				},
				paidSupport: { present: Present.NO },
				eolDate: {
					text: "2029-09",
					footnote: "5377b31e-ff3a-4a7b-a03b-890aebb0f971",
				},
				releaseSchedule: {
					text: "Custom",
					footnote: "a57fac2d-6fbd-4e2d-a5cf-4352b455ec2e",
				},
				releaseDelay: { text: "n/a" },
				updateTypes: { text: "no/free" },
				remarks: { text: "none" },
			},
		},
		{
			id: "dragonwell-21-se",
			information: {
				name: "Dragonwell 21 SE",
				version: 21,
				downloadSite: "https://dragonwell-jdk.io/",
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
					x64: { present: Present.NO },
					aarch64: { present: Present.NO },
					installers: { present: Present.NO },
				},
				linux: {
					x32: { present: Present.NO },
					x64: { present: Present.YES },
					x64Musl: { present: Present.YES },
					aarch64: { present: Present.YES },
					aarch64Musl: { present: Present.NO },
					aarch32: { present: Present.NO },
					ppc64: { present: Present.NO },
					riscv64: { present: Present.NO },
					s390x: { present: Present.NO },
					apk: { present: Present.NO },
					deb: { present: Present.NO },
					rpm: { present: Present.NO },
					containerImages: { present: Present.YES },
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
				aqavit: { present: Present.YES },
				tck: { present: Present.NO },
				editions: { text: "none" },
				customisations: {
					text: "few",
					footnote: "657156b2-7798-458b-b93a-d7b1b207e317",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: {
					present: Present.YES,
					footnote: "3c3737e8-faa9-4954-9fa7-62e130a15332",
				},
				paidSupport: { present: Present.NO },
				eolDate: {
					text: "2029-11",
					footnote: "5377b31e-ff3a-4a7b-a03b-890aebb0f971",
				},
				releaseSchedule: {
					text: "Custom",
					footnote: "a57fac2d-6fbd-4e2d-a5cf-4352b455ec2e",
				},
				releaseDelay: { text: "n/a" },
				updateTypes: { text: "no/free" },
				remarks: { text: "none" },
			},
		},
		{
			id: "dragonwell-21-ee",
			information: {
				name: "Dragonwell 21 EE",
				version: 21,
				downloadSite: "https://dragonwell-jdk.io/",
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
					x64: { present: Present.NO },
					aarch64: { present: Present.NO },
					installers: { present: Present.NO },
				},
				linux: {
					x32: { present: Present.NO },
					x64: { present: Present.YES },
					x64Musl: { present: Present.YES },
					aarch64: { present: Present.YES },
					aarch64Musl: { present: Present.NO },
					aarch32: { present: Present.NO },
					ppc64: { present: Present.NO },
					riscv64: { present: Present.NO },
					s390x: { present: Present.NO },
					apk: { present: Present.NO },
					deb: { present: Present.NO },
					rpm: { present: Present.NO },
					containerImages: { present: Present.YES },
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
				aqavit: { present: Present.YES },
				tck: { present: Present.NO },
				editions: { text: "none" },
				customisations: {
					text: "medium",
					footnote: "370c0aa7-27c9-445a-b4f7-8a530d3d335f",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: {
					present: Present.YES,
					footnote: "3c3737e8-faa9-4954-9fa7-62e130a15332",
				},
				paidSupport: { present: Present.NO },
				eolDate: {
					text: "2029-11",
					footnote: "5377b31e-ff3a-4a7b-a03b-890aebb0f971",
				},
				releaseSchedule: {
					text: "Custom",
					footnote: "a57fac2d-6fbd-4e2d-a5cf-4352b455ec2e",
				},
				releaseDelay: { text: "n/a" },
				updateTypes: { text: "no/free" },
				remarks: { text: "none" },
			},
		},
	],
	footnotes: [
		{
			id: "30c5b423-f759-49ad-bc4c-2f6cdf9cb8fe",
			markdown:
				"RPMs of Alibaba Dragonwell are [only available for Red-Hat-compatible Linux " +
				"distributions](https://github.com/dragonwell-project/dragonwell8/wiki/Alibaba-Dragonwell8-User-Guide#using-alibaba-dragonwell).",
		},
		{
			id: "657156b2-7798-458b-b93a-d7b1b207e317",
			markdown:
				"Patches applied on top of OpenJDK are listed in the release notes of the each Dragonwell version: " +
				"[8](https://github.com/dragonwell-project/dragonwell8/wiki/Alibaba-Dragonwell8-Standard-Edition-Release-Notes), " +
				"[11](https://github.com/dragonwell-project/dragonwell11/wiki/Alibaba-Dragonwell-11-Standard-Edition-Release-Notes), " +
				"[17](https://github.com/dragonwell-project/dragonwell17/wiki/Alibaba-Dragonwell-17-Standard-Edition-Release-Notes), " +
				"[21](https://github.com/dragonwell-project/dragonwell21/wiki/Alibaba-Dragonwell-21-Standard-Edition-Release-Notes).",
		},
		{
			id: "370c0aa7-27c9-445a-b4f7-8a530d3d335f",
			markdown:
				"Patches applied on top of OpenJDK are listed in the release notes of the each Dragonwell version: " +
				"[8](https://github.com/dragonwell-project/dragonwell8/wiki/Alibaba-Dragonwell8-Extended-Edition-Release-Notes), " +
				"[11](https://github.com/dragonwell-project/dragonwell11/wiki/Alibaba-Dragonwell-11-Extended-Edition-Release-Notes), " +
				"[21](https://github.com/dragonwell-project/dragonwell21/wiki/Alibaba-Dragonwell-21-Extended-Edition-Release-Notes).",
		},
		{
			id: "5377b31e-ff3a-4a7b-a03b-890aebb0f971",
			markdown:
				"For details, see the Release Roadmap for Alibaba Dragonwell " +
				"[8](https://github.com/dragonwell-project/dragonwell8/wiki/Alibaba-Dragonwell-Support#release-roadmap), " +
				"[11](https://github.com/dragonwell-project/dragonwell11/wiki/Alibaba-Dragonwell-Support#release-roadmap), " +
				"[17](https://github.com/dragonwell-project/dragonwell17/wiki/Alibaba-Dragonwell-Support#release-roadmap), " +
				"[21](https://github.com/dragonwell-project/dragonwell21/wiki/Alibaba-Dragonwell-Support#release-roadmap).",
		},
		{
			id: "a57fac2d-6fbd-4e2d-a5cf-4352b455ec2e",
			markdown:
				"Alibaba Dragonwell is released roughly a month after the respective OpenJDK release.",
		},
		{
			id: "89a28b64-724b-45ad-ae65-80c7eb8f917d",
			markdown:
				"[ZGC is not available on all platforms](https://wiki.openjdk.org/display/zgc) that Alibaba " +
				"Dragonwell is offered for. Furthermore, it is experimental on some platforms depending on the " +
				"version.",
		},
		{
			id: "3c3737e8-faa9-4954-9fa7-62e130a15332",
			markdown:
				"SBOMs can be found on the GitHub Releases page of the respective Dragonwell version: " +
				"[8](https://github.com/dragonwell-project/dragonwell8/releases), " +
				"[11](https://github.com/dragonwell-project/dragonwell11/releases), " +
				"[17](https://github.com/dragonwell-project/dragonwell17/releases), " +
				"[21](https://github.com/dragonwell-project/dragonwell21/releases).",
		},
		{
			id: "8f22b6d3-9af1-426e-9fb5-5846c8e91791",
			markdown:
				"Information about custom features in Alibaba Dragonwell can be found in its [User " +
				"Guide](https://github.com/dragonwell-project/dragonwell8/wiki/Alibaba-Dragonwell8-User-Guide).",
		},
		{
			id: "26237bd8-c6cd-4d14-b72b-dbf6987f614f",
			markdown: "Shenandoah is only available on x86, 64-bit.",
		},
	],
};

// noinspection JSUnusedGlobalSymbols because we import dynamically
export default data;
