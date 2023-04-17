/*
 * Copyright 2023 the original author or authors.
 *
 * This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of
 * this license, visit http://creativecommons.org/licenses/by-sa/4.0/ or send a letter to Creative Commons, PO Box 1866,
 * Mountain View, CA 94042, USA.
 */
import { Present, Vendor } from "@/src/vendorDataTypes";

export const data: Vendor = {
	vendor: "Amazon",
	countryOfOrigin: "USA",
	website: "https://aws.amazon.com/corretto",
	jdks: [
		{
			id: "corretto-8",
			information: {
				name: "Corretto 8",
				version: 8,
				downloadSite:
					"https://docs.aws.amazon.com/corretto/latest/corretto-8-ug/downloads-list.html",
			},
			features: {
				virtualMachine: { text: "HotSpot" },
				classLibraries: { text: "OpenJDK" },
				javaFX: {
					present: Present.PARTIALLY,
					footnote: "9960d648-de3a-42ab-85c7-462cc82a7932",
				},
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
					deb: { present: Present.YES },
					rpm: { present: Present.YES },
					containerImages: {
						present: Present.PARTIALLY,
						footnote: "124b5cae-4563-4df5-aa71-020d2af224ff",
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
					solarisSPARC: { present: Present.NO },
					solarisx64: { present: Present.NO },
				},
				aqavit: { present: Present.NO },
				tck: { present: Present.YES },
				editions: {
					text: "JRE",
					footnote: "6eb275d4-578e-454c-aba3-a5c5e4b03295",
				},
				customisations: {
					text: "few",
					footnote: "07cba2f3-0251-48ea-a5da-f76b1bdfff1d",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CPE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: { present: Present.NO },
				paidSupport: {
					present: Present.PARTIALLY,
					footnote: "b1a00daa-5bea-4f3d-a0c9-72f800b5a9fb",
				},
				eolDate: {
					text: "2026-06",
					footnote: "a8bdffe4-8de9-4d31-9a7e-726a5b5157e5",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "0-3 days" },
			},
		},
		{
			id: "corretto-11",
			information: {
				name: "Corretto 11",
				version: 11,
				downloadSite:
					"https://docs.aws.amazon.com/corretto/latest/corretto-11-ug/downloads-list.html",
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
						footnote: "50c699b2-feca-4f9a-abda-55d79ba5c472",
					},
					z: {
						present: Present.PARTIALLY,
						footnote: "fb2b4784-25df-44e6-9ae7-da3adf7dd000",
					},
					custom: { text: "none" },
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
					apk: {
						present: Present.PARTIALLY,
						footnote: "124b5cae-4563-4df5-aa71-020d2af224ff",
					},
					deb: {
						present: Present.PARTIALLY,
						footnote: "124b5cae-4563-4df5-aa71-020d2af224ff",
					},
					rpm: {
						present: Present.PARTIALLY,
						footnote: "124b5cae-4563-4df5-aa71-020d2af224ff",
					},
					containerImages: {
						present: Present.PARTIALLY,
						footnote: "124b5cae-4563-4df5-aa71-020d2af224ff",
					},
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
					footnote: "7c5df998-f73e-426f-8955-d6a6df6ab856",
				},
				customisations: {
					text: "few",
					footnote: "07cba2f3-0251-48ea-a5da-f76b1bdfff1d",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CPE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: { present: Present.NO },
				paidSupport: {
					present: Present.PARTIALLY,
					footnote: "b1a00daa-5bea-4f3d-a0c9-72f800b5a9fb",
				},
				eolDate: {
					text: "2027-09",
					footnote: "a8bdffe4-8de9-4d31-9a7e-726a5b5157e5",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "0-3 days" },
			},
		},
		{
			id: "corretto-17",
			information: {
				name: "Corretto 17",
				version: 17,
				downloadSite:
					"https://docs.aws.amazon.com/corretto/latest/corretto-17-ug/downloads-list.html",
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
					deb: { present: Present.YES },
					rpm: { present: Present.YES },
					// No container images with Alpine Linux on aarch64.
					containerImages: {
						present: Present.PARTIALLY,
						footnote: "124b5cae-4563-4df5-aa71-020d2af224ff",
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
				editions: {
					text: "JRE",
					footnote: "7c5df998-f73e-426f-8955-d6a6df6ab856",
				},
				customisations: {
					text: "few",
					footnote: "07cba2f3-0251-48ea-a5da-f76b1bdfff1d",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CPE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: { present: Present.NO },
				paidSupport: {
					present: Present.PARTIALLY,
					footnote: "b1a00daa-5bea-4f3d-a0c9-72f800b5a9fb",
				},
				eolDate: {
					text: "2029-10",
					footnote: "a8bdffe4-8de9-4d31-9a7e-726a5b5157e5",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "0-3 days" },
			},
		},
		{
			id: "corretto-20",
			information: {
				name: "Corretto 20",
				version: 20,
				downloadSite:
					"https://docs.aws.amazon.com/corretto/latest/corretto-20-ug/downloads-list.html",
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
					deb: { present: Present.YES },
					rpm: { present: Present.YES },
					// No container images with Alpine Linux on aarch64.
					containerImages: {
						present: Present.PARTIALLY,
						footnote: "124b5cae-4563-4df5-aa71-020d2af224ff",
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
				customisations: {
					text: "few",
					footnote: "07cba2f3-0251-48ea-a5da-f76b1bdfff1d",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CPE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: { present: Present.NO },
				paidSupport: {
					present: Present.PARTIALLY,
					footnote: "b1a00daa-5bea-4f3d-a0c9-72f800b5a9fb",
				},
				eolDate: {
					text: "2023-10",
					footnote: "a8bdffe4-8de9-4d31-9a7e-726a5b5157e5",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "0-3 days" },
			},
		},
	],
	footnotes: [
		{
			id: "9960d648-de3a-42ab-85c7-462cc82a7932",
			markdown:
				"See the [Amazon Corretto FAQ](https://aws.amazon.com/corretto/faqs/) for a list of platforms " +
				"where JavaFX is available.",
		},
		{
			id: "07cba2f3-0251-48ea-a5da-f76b1bdfff1d",
			markdown:
				"See the change log of the respective Amazon Corretto version for a list of additional patches " +
				"applied to Amazon Corretto: " +
				"[8](https://github.com/corretto/corretto-8/blob/develop/CHANGELOG.md), " +
				"[11](https://github.com/corretto/corretto-11/blob/develop/CHANGELOG.md), " +
				"[17](https://github.com/corretto/corretto-17/blob/develop/CHANGELOG.md), " +
				"[20](https://github.com/corretto/corretto-20/blob/develop/CHANGELOG.md).",
		},
		{
			id: "b1a00daa-5bea-4f3d-a0c9-72f800b5a9fb",
			markdown:
				"As stated by the [Amazon Corretto FAQ](https://aws.amazon.com/corretto/faqs/), Corretto is " +
				"covered by [AWS Support Plans](https://aws.amazon.com/premiumsupport/). Separate Corretto-specific " +
				"assistance plans are not available.",
		},
		{
			id: "a8bdffe4-8de9-4d31-9a7e-726a5b5157e5",
			markdown:
				"See the [Support Calendar](https://aws.amazon.com/corretto/faqs/#support_calendar) of " +
				"Amazon Corretto for details.",
		},
		{
			id: "50c699b2-feca-4f9a-abda-55d79ba5c472",
			markdown:
				"[Shenandoah GC is not available on all " +
				"platforms](https://wiki.openjdk.org/display/shenandoah) that Amazon Corretto is offered for.",
		},
		{
			id: "fb2b4784-25df-44e6-9ae7-da3adf7dd000",
			markdown:
				"[ZGC is not available on all platforms](https://wiki.openjdk.org/display/zgc) that Amazon " +
				"Corretto is offered for. Furthermore, it is experimental on some platforms depending on the version.",
		},
		{
			id: "6eb275d4-578e-454c-aba3-a5c5e4b03295",
			markdown: "The JRE is only available on Windows and Amazon Linux 2.",
		},
		{
			id: "7c5df998-f73e-426f-8955-d6a6df6ab856",
			markdown: "The JRE is only available on Amazon Linux 2.",
		},
		{
			id: "124b5cae-4563-4df5-aa71-020d2af224ff",
			markdown:
				"Some package formats and container images are not offered for less common architectures, for " +
				"example, x86, 32-bit, and ARM with or without musl. For the full list of available container " +
				"images, see [the list on Docker Hub](https://hub.docker.com/_/amazoncorretto).",
		},
	],
};

// noinspection JSUnusedGlobalSymbols because we import dynamically
export default data;
