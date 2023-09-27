/*
 * Copyright 2023 the original author or authors.
 *
 * This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of
 * this license, visit http://creativecommons.org/licenses/by-sa/4.0/ or send a letter to Creative Commons, PO Box 1866,
 * Mountain View, CA 94042, USA.
 */
import { Present, Vendor } from "@/src/vendorDataTypes";

export const data: Vendor = {
	vendor: "Microsoft",
	countryOfOrigin: "USA",
	website: "https://microsoft.com/openjdk/",
	jdks: [
		{
			id: "ms-build-of-openjdk-11",
			information: {
				name: "Build of OpenJDK 11",
				version: 11,
				downloadSite: "https://microsoft.com/openjdk/",
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
						footnote: "738b4cb2-45b1-4d5b-863a-7a0dfa675ea2",
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
					aarch64Musl: { present: Present.NO },
					aarch32: { present: Present.NO },
					ppc64: { present: Present.NO },
					riscv64: { present: Present.NO },
					s390x: { present: Present.NO },
					apk: { present: Present.NO },
					deb: { present: Present.YES },
					rpm: {
						present: Present.PARTIALLY,
						footnote: "edcc7c9a-671d-4547-a5a7-8f1271fd8c4a",
					},
					containerImages: {
						present: Present.PARTIALLY,
						footnote: "8fb6356a-0057-43ea-9372-443fb576145b",
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
				aqavit: { present: Present.YES },
				tck: { present: Present.YES },
				editions: { text: "none" },
				customisations: {
					text: "few",
					footnote: "b6ae3d23-382f-40e7-832b-c7068b380e06",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: { present: Present.NO },
				paidSupport: {
					present: Present.PARTIALLY,
					footnote: "da0cf3bb-e1dd-46e7-9e53-13a3fa74aa0d",
				},
				eolDate: {
					text: "2024-09",
					footnote: "16f40a6c-3a23-4e94-bc72-d1286f835529",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "0-3 days" },
				remarks: { text: "none" },
			},
		},
		{
			id: "ms-build-of-openjdk-17",
			information: {
				name: "Build of OpenJDK 17",
				version: 17,
				downloadSite: "https://microsoft.com/openjdk/",
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
					installers: { present: Present.YES },
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
					deb: { present: Present.YES },
					rpm: {
						present: Present.PARTIALLY,
						footnote: "edcc7c9a-671d-4547-a5a7-8f1271fd8c4a",
					},
					containerImages: {
						present: Present.PARTIALLY,
						footnote: "8fb6356a-0057-43ea-9372-443fb576145b",
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
				aqavit: { present: Present.YES },
				tck: { present: Present.YES },
				editions: { text: "none" },
				customisations: {
					text: "few",
					footnote: "b6ae3d23-382f-40e7-832b-c7068b380e06",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: { present: Present.NO },
				paidSupport: {
					present: Present.PARTIALLY,
					footnote: "da0cf3bb-e1dd-46e7-9e53-13a3fa74aa0d",
				},
				eolDate: {
					text: "2027-09",
					footnote: "16f40a6c-3a23-4e94-bc72-d1286f835529",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "0-3 days" },
				remarks: { text: "none" },
			},
		},
		{
			id: "ms-build-of-openjdk-21",
			information: {
				name: "Build of OpenJDK 21",
				version: 21,
				downloadSite: "https://microsoft.com/openjdk/",
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
					installers: { present: Present.YES },
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
					rpm: {
						present: Present.PARTIALLY,
						footnote: "edcc7c9a-671d-4547-a5a7-8f1271fd8c4a",
					},
					containerImages: { present: Present.YES },
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
				aqavit: { present: Present.YES },
				tck: { present: Present.YES },
				editions: { text: "none" },
				customisations: {
					text: "few",
					footnote: "b6ae3d23-382f-40e7-832b-c7068b380e06",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: { present: Present.NO },
				paidSupport: {
					present: Present.PARTIALLY,
					footnote: "da0cf3bb-e1dd-46e7-9e53-13a3fa74aa0d",
				},
				eolDate: {
					text: "n/a",
					footnote: "16f40a6c-3a23-4e94-bc72-d1286f835529",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "0-3 days" },
				remarks: { text: "none" },
			},
		},
	],
	footnotes: [
		{
			id: "738b4cb2-45b1-4d5b-863a-7a0dfa675ea2",
			markdown:
				"[ZGC is not available on all platforms](https://wiki.openjdk.org/display/zgc) that Microsoft Build " +
				"of OpenJDK is offered for. Furthermore, it is experimental on some platforms depending on the " +
				"version.",
		},
		{
			id: "8fb6356a-0057-43ea-9372-443fb576145b",
			markdown:
				"Microsoft does not produce container images with Alpine Linux. See [Container images for the " +
				"Microsoft Build of OpenJDK](https://learn.microsoft.com/java/openjdk/containers) for a complete " +
				"list of available container images.",
		},
		{
			id: "b6ae3d23-382f-40e7-832b-c7068b380e06",
			markdown:
				"The [release notes](https://learn.microsoft.com/en-us/java/openjdk/release-notes) for " +
				"Microsoft Build of OpenJDK list additional changes made by Microsoft.",
		},
		{
			id: "da0cf3bb-e1dd-46e7-9e53-13a3fa74aa0d",
			markdown:
				"According to the Microsoft's [Support](https://learn.microsoft.com/en-us/java/openjdk/support) " +
				'document, support is only available for customers with "active Azure Support Plans and only covers ' +
				'Java workloads deployed to Azure."',
		},
		{
			id: "16f40a6c-3a23-4e94-bc72-d1286f835529",
			markdown:
				"See Microsoft's [Support](https://learn.microsoft.com/en-us/java/openjdk/support) document for " +
				"detailed information regarding the update schedule and end of life dates for Microsoft Build of " +
				"OpenJDK.",
		},
		{
			id: "edcc7c9a-671d-4547-a5a7-8f1271fd8c4a",
			markdown:
				"The RPMs published by Microsoft are [not compatible with " +
				"SUSE](https://github.com/microsoft/openjdk/issues/389).",
		},
	],
};

// noinspection JSUnusedGlobalSymbols because we import dynamically
export default data;
