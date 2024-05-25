/*
 * Copyright 2023 the original author or authors.
 *
 * This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of
 * this license, visit http://creativecommons.org/licenses/by-sa/4.0/ or send a letter to Creative Commons, PO Box 1866,
 * Mountain View, CA 94042, USA.
 */
import { Present, Vendor } from "@/src/vendorDataTypes";

export const data: Vendor = {
	vendor: "Red Hat",
	countryOfOrigin: "USA",
	website: "https://developers.redhat.com/products/openjdk/",
	jdks: [
		{
			id: "rh-build-of-openjdk-8",
			information: {
				name: "Build of OpenJDK 8",
				version: 8,
				downloadSite: "https://developers.redhat.com/products/openjdk/download",
			},
			features: {
				virtualMachine: { text: "HotSpot" },
				classLibraries: { text: "OpenJDK" },
				javaFX: { present: Present.NO },
				flightRecorder: { present: Present.YES },
				javaWS: {
					present: Present.NO,
					footnote: "ddd0d680-8f33-4f7a-b89a-1b895c315848",
				},
				gc: {
					cms: { present: Present.YES },
					epsilon: { present: Present.NO },
					g1: { present: Present.YES },
					parallel: { present: Present.YES },
					serial: { present: Present.YES },
					shenandoah: {
						present: Present.PARTIALLY,
						footnote: "5cc2a923-cca5-4984-93bb-861cb304b64b",
					},
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
					aarch64: {
						present: Present.PARTIALLY,
						footnote: "f4cfc6a3-190c-4266-96a5-76947275f457",
					},
					aarch64Musl: { present: Present.NO },
					aarch32: { present: Present.NO },
					ppc64: {
						present: Present.PARTIALLY,
						footnote: "f4cfc6a3-190c-4266-96a5-76947275f457",
					},
					riscv64: { present: Present.NO },
					s390x: {
						present: Present.PARTIALLY,
						footnote: "f4cfc6a3-190c-4266-96a5-76947275f457",
					},
					apk: { present: Present.NO },
					deb: { present: Present.NO },
					rpm: {
						present: Present.PARTIALLY,
						footnote: "f4cfc6a3-190c-4266-96a5-76947275f457",
					},
					containerImages: { present: Present.YES },
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
				aqavit: { present: Present.YES },
				tck: { present: Present.YES },
				editions: { text: "JRE" },
				customisations: { text: "few", footnote: "b40e7cb3-f459-4331-b9fb-bd36c6740b5a" },
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: { present: Present.NO },
				paidSupport: {
					present: Present.YES,
					footnote: "16864047-89f2-4d27-af78-2233b8b10960",
				},
				eolDate: {
					text: "2026-11",
					footnote: "2ce6dbb8-bba6-4012-99f1-970796ba79f9",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "0-3 days" },
				updateTypes: { text: "no/free" },
				remarks: { text: "none" },
			},
		},
		{
			id: "rh-build-of-openjdk-11",
			information: {
				name: "Build of OpenJDK 11",
				version: 11,
				downloadSite: "https://developers.redhat.com/products/openjdk/download",
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
						footnote: "5cc2a923-cca5-4984-93bb-861cb304b64b",
					},
					z: {
						present: Present.PARTIALLY,
						footnote: "17cf5639-7d55-4800-8c17-62950b37420c",
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
					x64Musl: { present: Present.NO },
					aarch64: {
						present: Present.PARTIALLY,
						footnote: "f4cfc6a3-190c-4266-96a5-76947275f457",
					},
					aarch64Musl: { present: Present.NO },
					aarch32: { present: Present.NO },
					ppc64: {
						present: Present.PARTIALLY,
						footnote: "f4cfc6a3-190c-4266-96a5-76947275f457",
					},
					riscv64: { present: Present.NO },
					s390x: {
						present: Present.PARTIALLY,
						footnote: "f4cfc6a3-190c-4266-96a5-76947275f457",
					},
					apk: { present: Present.NO },
					deb: { present: Present.NO },
					rpm: {
						present: Present.PARTIALLY,
						footnote: "f4cfc6a3-190c-4266-96a5-76947275f457",
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
				aqavit: { present: Present.YES },
				tck: { present: Present.YES },
				editions: { text: "JRE" },
				customisations: { text: "few", footnote: "b40e7cb3-f459-4331-b9fb-bd36c6740b5a" },
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: { present: Present.NO },
				paidSupport: {
					present: Present.YES,
					footnote: "16864047-89f2-4d27-af78-2233b8b10960",
				},
				eolDate: {
					text: "2027-10",
					footnote: "2ce6dbb8-bba6-4012-99f1-970796ba79f9",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "0-3 days" },
				updateTypes: {
					text: "no/tiered",
					footnote: "c72abe89-1bad-4edf-9dd7-6bfa60724c47",
				},
				remarks: { text: "none" },
			},
		},
		{
			id: "rh-build-of-openjdk-17",
			information: {
				name: "Build of OpenJDK 17",
				version: 17,
				downloadSite: "https://developers.redhat.com/products/openjdk/download",
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
						footnote: "5cc2a923-cca5-4984-93bb-861cb304b64b",
					},
					z: {
						present: Present.PARTIALLY,
						footnote: "17cf5639-7d55-4800-8c17-62950b37420c",
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
					x64Musl: { present: Present.NO },
					aarch64: {
						present: Present.PARTIALLY,
						footnote: "f4cfc6a3-190c-4266-96a5-76947275f457",
					},
					aarch64Musl: { present: Present.NO },
					aarch32: { present: Present.NO },
					ppc64: {
						present: Present.PARTIALLY,
						footnote: "f4cfc6a3-190c-4266-96a5-76947275f457",
					},
					riscv64: { present: Present.NO },
					s390x: {
						present: Present.PARTIALLY,
						footnote: "f4cfc6a3-190c-4266-96a5-76947275f457",
					},
					apk: { present: Present.NO },
					deb: { present: Present.NO },
					rpm: {
						present: Present.PARTIALLY,
						footnote: "f4cfc6a3-190c-4266-96a5-76947275f457",
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
				aqavit: { present: Present.YES },
				tck: { present: Present.YES },
				editions: { text: "JRE" },
				customisations: { text: "few", footnote: "b40e7cb3-f459-4331-b9fb-bd36c6740b5a" },
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: { present: Present.NO },
				paidSupport: {
					present: Present.YES,
					footnote: "16864047-89f2-4d27-af78-2233b8b10960",
				},
				eolDate: {
					text: "2027-10",
					footnote: "2ce6dbb8-bba6-4012-99f1-970796ba79f9",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "0-3 days" },
				updateTypes: { text: "no/free" },
				remarks: { text: "none" },
			},
		},
		{
			id: "rh-build-of-openjdk-21",
			information: {
				name: "Build of OpenJDK 21",
				version: 21,
				downloadSite: "https://developers.redhat.com/products/openjdk/download",
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
						footnote: "5cc2a923-cca5-4984-93bb-861cb304b64b",
					},
					z: {
						present: Present.PARTIALLY,
						footnote: "17cf5639-7d55-4800-8c17-62950b37420c",
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
					x64Musl: { present: Present.NO },
					aarch64: {
						present: Present.PARTIALLY,
						footnote: "f4cfc6a3-190c-4266-96a5-76947275f457",
					},
					aarch64Musl: { present: Present.NO },
					aarch32: { present: Present.NO },
					ppc64: {
						present: Present.PARTIALLY,
						footnote: "f4cfc6a3-190c-4266-96a5-76947275f457",
					},
					riscv64: { present: Present.NO },
					s390x: {
						present: Present.PARTIALLY,
						footnote: "f4cfc6a3-190c-4266-96a5-76947275f457",
					},
					apk: { present: Present.NO },
					deb: { present: Present.NO },
					rpm: {
						present: Present.PARTIALLY,
						footnote: "f4cfc6a3-190c-4266-96a5-76947275f457",
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
				aqavit: { present: Present.YES },
				tck: { present: Present.YES },
				editions: { text: "JRE" },
				customisations: { text: "few", footnote: "b40e7cb3-f459-4331-b9fb-bd36c6740b5a" },
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: { present: Present.NO },
				paidSupport: {
					present: Present.YES,
					footnote: "16864047-89f2-4d27-af78-2233b8b10960",
				},
				eolDate: {
					text: "2029-12",
					footnote: "2ce6dbb8-bba6-4012-99f1-970796ba79f9",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "0-3 days" },
				updateTypes: { text: "no/free" },
				remarks: { text: "none" },
			},
		},
	],
	footnotes: [
		{
			id: "ddd0d680-8f33-4f7a-b89a-1b895c315848",
			markdown:
				"[Red Hat's migration guide for Java Web Start](https://access.redhat.com/solutions/5087601) states " +
				"that IcedTea-Web is included in Red Hat Build of OpenJDK 8 for Windows and older versions of Red Hat " +
				"Enterprise Linux.",
		},
		{
			id: "5cc2a923-cca5-4984-93bb-861cb304b64b",
			markdown:
				"[Shenandoah GC is not available on all platforms](https://wiki.openjdk.org/display/shenandoah) that " +
				"Red Hat Build of OpenJDK is offered for.",
		},
		{
			id: "f4cfc6a3-190c-4266-96a5-76947275f457",
			markdown:
				"Red Hat Build of OpenJDK is only available as part of Red Hat Enterprise Linux, not as a " +
				"stand-alone product. [Red Hat recommends to install Eclipse Temurin on other Linux distributions and " +
				"operating systems like macOS](https://developers.redhat.com/products/openjdk/install).",
		},
		{
			id: "16864047-89f2-4d27-af78-2233b8b10960",
			markdown:
				"[According to Red Hat's support documentation](https://access.redhat.com/articles/1299013), Red Hat " +
				"support covers Red Hat Enterprise Linux and Windows. On other platforms, Red Hat provides support " +
				"for Eclipse Temurin.",
		},
		{
			id: "2ce6dbb8-bba6-4012-99f1-970796ba79f9",
			markdown:
				"See Red Hat's [OpenJDK Life Cycle and Support " +
				"Policy](https://access.redhat.com/articles/1299013#OpenJDK_Life_Cycle) for details.",
		},
		{
			id: "17cf5639-7d55-4800-8c17-62950b37420c",
			markdown:
				"[ZGC is not available on all platforms](https://wiki.openjdk.org/display/zgc) that Red Hat Build of " +
				"OpenJDK is offered for. Furthermore, it is experimental on some platforms depending on the version.",
		},
		{
			id: "b40e7cb3-f459-4331-b9fb-bd36c6740b5a",
			markdown:
				"Customisations applied to Red Hat Build of OpenJDK are listed in the release notes of the " +
				"respective version: " +
				"[8](https://access.redhat.com/documentation/en-us/openjdk/8), " +
				"[11](https://access.redhat.com/documentation/en-us/openjdk/11), " +
				"[17](https://access.redhat.com/documentation/en-us/openjdk/17), " +
				"[21](https://access.redhat.com/documentation/en-us/openjdk/21).",
		},
		{
			id: "c72abe89-1bad-4edf-9dd7-6bfa60724c47",
			markdown:
				"Free updates are made available until 2024-10. For more information, see Red Hat's [OpenJDK Life " +
				"Cycle and Support Policy](https://access.redhat.com/articles/1299013#OpenJDK_Life_Cycle)",
		},
	],
};

// noinspection JSUnusedGlobalSymbols because we import dynamically
export default data;
