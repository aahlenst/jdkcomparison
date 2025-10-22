/*
 * Copyright 2023 the original author or authors.
 *
 * This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of
 * this license, visit http://creativecommons.org/licenses/by-sa/4.0/ or send a letter to Creative Commons, PO Box 1866,
 * Mountain View, CA 94042, USA.
 */
import { Present, Vendor } from "@/src/vendorDataTypes";

export const data: Vendor = {
	vendor: "Canonical",
	countryOfOrigin: "UK",
	website: "https://canonical.com/java",
	jdks: [
		{
			id: "canonical-openjdk-8",
			information: {
				name: "OpenJDK 8",
				version: 8,
				downloadSite: "https://ubuntu.com/download",
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
					x32: { present: Present.NO, footnote: "a55cc074-5991-456b-a7d4-98cf65c08ded" },
					x64: {
						present: Present.PARTIALLY,
						footnote: "d3e8a715-ce60-4b24-8e69-e8938cef5e57",
					},
					x64Musl: { present: Present.NO },
					aarch64: {
						present: Present.PARTIALLY,
						footnote: "d3e8a715-ce60-4b24-8e69-e8938cef5e57",
					},
					aarch64Musl: { present: Present.NO },
					aarch32: {
						present: Present.NO,
						footnote: "a55cc074-5991-456b-a7d4-98cf65c08ded",
					},
					ppc64: {
						present: Present.PARTIALLY,
						footnote: "d3e8a715-ce60-4b24-8e69-e8938cef5e57",
					},
					riscv64: {
						present: Present.PARTIALLY,
						footnote: "d3e8a715-ce60-4b24-8e69-e8938cef5e57",
					},
					s390x: {
						present: Present.PARTIALLY,
						footnote: "d3e8a715-ce60-4b24-8e69-e8938cef5e57",
					},
					apk: { present: Present.NO },
					deb: {
						present: Present.PARTIALLY,
						footnote: "d3e8a715-ce60-4b24-8e69-e8938cef5e57",
					},
					rpm: { present: Present.NO },
					containerImages: {
						present: Present.PARTIALLY,
						footnote: "d8b4748a-7f59-41ba-9a8d-20e22ad4eb9a",
					},
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
				tck: { present: Present.NO },
				editions: { text: "JRE" },
				customisations: {
					text: "few",
					footnote: "19a3adda-e046-4db7-aedf-7a864a640bbb",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: { present: Present.NO },
				paidSupport: {
					present: Present.PARTIALLY,
					footnote: "c51bc74b-47aa-48c2-a577-9e8dd2752569",
				},
				eolDate: {
					text: "2034-04",
					footnote: "1c10af1e-7669-4223-81ea-899de5e9399b",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "1-2 weeks" },
				updateTypes: {
					text: "no/tiered",
					footnote: "bd76aec7-2985-4d16-a058-cf2c4fbf919a",
				},
				remarks: { text: "none" },
			},
		},
		{
			id: "canonical-openjdk-11",
			information: {
				name: "OpenJDK 11",
				version: 11,
				downloadSite: "https://ubuntu.com/download",
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
						footnote: "8b2af03b-78c0-4a3a-93ff-fba56db0db55",
					},
					z: {
						present: Present.PARTIALLY,
						footnote: "ce313436-3f36-4c78-be2c-3d0af1359619",
					},
					custom: { text: "none" },
				},
				mac: {
					x64: { present: Present.NO },
					aarch64: { present: Present.NO },
					installers: { present: Present.NO },
				},
				linux: {
					x32: { present: Present.NO, footnote: "a55cc074-5991-456b-a7d4-98cf65c08ded" },
					x64: {
						present: Present.PARTIALLY,
						footnote: "d3e8a715-ce60-4b24-8e69-e8938cef5e57",
					},
					x64Musl: { present: Present.NO },
					aarch64: {
						present: Present.PARTIALLY,
						footnote: "d3e8a715-ce60-4b24-8e69-e8938cef5e57",
					},
					aarch64Musl: { present: Present.NO },
					aarch32: {
						present: Present.NO,
						footnote: "a55cc074-5991-456b-a7d4-98cf65c08ded",
					},
					ppc64: {
						present: Present.PARTIALLY,
						footnote: "d3e8a715-ce60-4b24-8e69-e8938cef5e57",
					},
					riscv64: {
						present: Present.PARTIALLY,
						footnote: "d3e8a715-ce60-4b24-8e69-e8938cef5e57",
					},
					s390x: {
						present: Present.PARTIALLY,
						footnote: "d3e8a715-ce60-4b24-8e69-e8938cef5e57",
					},
					apk: { present: Present.NO },
					deb: {
						present: Present.PARTIALLY,
						footnote: "d3e8a715-ce60-4b24-8e69-e8938cef5e57",
					},
					rpm: { present: Present.NO },
					containerImages: {
						present: Present.PARTIALLY,
						footnote: "d8b4748a-7f59-41ba-9a8d-20e22ad4eb9a",
					},
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
				tck: { present: Present.NO },
				editions: { text: "JRE" },
				customisations: {
					text: "few",
					footnote: "19a3adda-e046-4db7-aedf-7a864a640bbb",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: { present: Present.NO },
				paidSupport: {
					present: Present.PARTIALLY,
					footnote: "c51bc74b-47aa-48c2-a577-9e8dd2752569",
				},
				eolDate: {
					text: "2034-04",
					footnote: "1c10af1e-7669-4223-81ea-899de5e9399b",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "1-2 weeks" },
				updateTypes: {
					text: "no/tiered",
					footnote: "bd76aec7-2985-4d16-a058-cf2c4fbf919a",
				},
				remarks: { text: "none" },
			},
		},
		{
			id: "canonical-openjdk-17",
			information: {
				name: "OpenJDK 17",
				version: 17,
				downloadSite: "https://ubuntu.com/download",
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
						footnote: "8b2af03b-78c0-4a3a-93ff-fba56db0db55",
					},
					z: {
						present: Present.PARTIALLY,
						footnote: "ce313436-3f36-4c78-be2c-3d0af1359619",
					},
					custom: { text: "none" },
				},
				mac: {
					x64: { present: Present.NO },
					aarch64: { present: Present.NO },
					installers: { present: Present.NO },
				},
				linux: {
					x32: { present: Present.NO, footnote: "a55cc074-5991-456b-a7d4-98cf65c08ded" },
					x64: {
						present: Present.PARTIALLY,
						footnote: "d3e8a715-ce60-4b24-8e69-e8938cef5e57",
					},
					x64Musl: { present: Present.NO },
					aarch64: {
						present: Present.PARTIALLY,
						footnote: "d3e8a715-ce60-4b24-8e69-e8938cef5e57",
					},
					aarch64Musl: { present: Present.NO },
					aarch32: {
						present: Present.NO,
						footnote: "a55cc074-5991-456b-a7d4-98cf65c08ded",
					},
					ppc64: {
						present: Present.PARTIALLY,
						footnote: "d3e8a715-ce60-4b24-8e69-e8938cef5e57",
					},
					riscv64: {
						present: Present.PARTIALLY,
						footnote: "d3e8a715-ce60-4b24-8e69-e8938cef5e57",
					},
					s390x: {
						present: Present.PARTIALLY,
						footnote: "d3e8a715-ce60-4b24-8e69-e8938cef5e57",
					},
					apk: { present: Present.NO },
					deb: {
						present: Present.PARTIALLY,
						footnote: "d3e8a715-ce60-4b24-8e69-e8938cef5e57",
					},
					rpm: { present: Present.NO },
					containerImages: {
						present: Present.PARTIALLY,
						footnote: "d8b4748a-7f59-41ba-9a8d-20e22ad4eb9a",
					},
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
				aqavit: {
					present: Present.YES,
					footnote: "26e0e603-d744-4fcf-aeb9-cd66d7e39f2e",
				},
				tck: {
					present: Present.YES,
					footnote: "26e0e603-d744-4fcf-aeb9-cd66d7e39f2e",
				},
				editions: { text: "JRE, CRaC", footnote: "89f11427-8da6-41dd-be71-d742e98511e6" },
				customisations: {
					text: "few",
					footnote: "19a3adda-e046-4db7-aedf-7a864a640bbb",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: { present: Present.NO },
				paidSupport: {
					present: Present.PARTIALLY,
					footnote: "c51bc74b-47aa-48c2-a577-9e8dd2752569",
				},
				eolDate: {
					text: "2034-04",
					footnote: "1c10af1e-7669-4223-81ea-899de5e9399b",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "1-2 weeks" },
				updateTypes: {
					text: "no/tiered",
					footnote: "bd76aec7-2985-4d16-a058-cf2c4fbf919a",
				},
				remarks: { text: "none" },
			},
		},
		{
			id: "canonical-openjdk-21",
			information: {
				name: "OpenJDK 21",
				version: 21,
				downloadSite: "https://ubuntu.com/download",
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
						footnote: "8b2af03b-78c0-4a3a-93ff-fba56db0db55",
					},
					z: {
						present: Present.PARTIALLY,
						footnote: "ce313436-3f36-4c78-be2c-3d0af1359619",
					},
					custom: { text: "none" },
				},
				mac: {
					x64: { present: Present.NO },
					aarch64: { present: Present.NO },
					installers: { present: Present.NO },
				},
				linux: {
					x32: { present: Present.NO, footnote: "a55cc074-5991-456b-a7d4-98cf65c08ded" },
					x64: {
						present: Present.PARTIALLY,
						footnote: "d3e8a715-ce60-4b24-8e69-e8938cef5e57",
					},
					x64Musl: { present: Present.NO },
					aarch64: {
						present: Present.PARTIALLY,
						footnote: "d3e8a715-ce60-4b24-8e69-e8938cef5e57",
					},
					aarch64Musl: { present: Present.NO },
					aarch32: {
						present: Present.NO,
						footnote: "a55cc074-5991-456b-a7d4-98cf65c08ded",
					},
					ppc64: {
						present: Present.PARTIALLY,
						footnote: "d3e8a715-ce60-4b24-8e69-e8938cef5e57",
					},
					riscv64: {
						present: Present.PARTIALLY,
						footnote: "d3e8a715-ce60-4b24-8e69-e8938cef5e57",
					},
					s390x: {
						present: Present.PARTIALLY,
						footnote: "d3e8a715-ce60-4b24-8e69-e8938cef5e57",
					},
					apk: { present: Present.NO },
					deb: {
						present: Present.PARTIALLY,
						footnote: "d3e8a715-ce60-4b24-8e69-e8938cef5e57",
					},
					rpm: { present: Present.NO },
					containerImages: {
						present: Present.PARTIALLY,
						footnote: "d8b4748a-7f59-41ba-9a8d-20e22ad4eb9a",
					},
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
				aqavit: {
					present: Present.YES,
					footnote: "26e0e603-d744-4fcf-aeb9-cd66d7e39f2e",
				},
				tck: {
					present: Present.YES,
					footnote: "26e0e603-d744-4fcf-aeb9-cd66d7e39f2e",
				},
				editions: { text: "JRE, CRaC", footnote: "89f11427-8da6-41dd-be71-d742e98511e6" },
				customisations: {
					text: "few",
					footnote: "19a3adda-e046-4db7-aedf-7a864a640bbb",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: { present: Present.NO },
				paidSupport: {
					present: Present.PARTIALLY,
					footnote: "c51bc74b-47aa-48c2-a577-9e8dd2752569",
				},
				eolDate: {
					text: "2034-04",
					footnote: "1c10af1e-7669-4223-81ea-899de5e9399b",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "1-2 weeks" },
				updateTypes: {
					text: "no/tiered",
					footnote: "bd76aec7-2985-4d16-a058-cf2c4fbf919a",
				},
				remarks: { text: "none" },
			},
		},
		{
			id: "canonical-openjdk-25",
			information: {
				name: "OpenJDK 25",
				version: 25,
				downloadSite: "https://ubuntu.com/download",
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
						footnote: "8b2af03b-78c0-4a3a-93ff-fba56db0db55",
					},
					z: {
						present: Present.PARTIALLY,
						footnote: "ce313436-3f36-4c78-be2c-3d0af1359619",
					},
					custom: { text: "none" },
				},
				mac: {
					x64: { present: Present.NO },
					aarch64: { present: Present.NO },
					installers: { present: Present.NO },
				},
				linux: {
					x32: { present: Present.NO, footnote: "a55cc074-5991-456b-a7d4-98cf65c08ded" },
					x64: {
						present: Present.PARTIALLY,
						footnote: "d3e8a715-ce60-4b24-8e69-e8938cef5e57",
					},
					x64Musl: { present: Present.NO },
					aarch64: {
						present: Present.PARTIALLY,
						footnote: "d3e8a715-ce60-4b24-8e69-e8938cef5e57",
					},
					aarch64Musl: { present: Present.NO },
					aarch32: {
						present: Present.NO,
						footnote: "a55cc074-5991-456b-a7d4-98cf65c08ded",
					},
					ppc64: {
						present: Present.PARTIALLY,
						footnote: "d3e8a715-ce60-4b24-8e69-e8938cef5e57",
					},
					riscv64: {
						present: Present.PARTIALLY,
						footnote: "d3e8a715-ce60-4b24-8e69-e8938cef5e57",
					},
					s390x: {
						present: Present.PARTIALLY,
						footnote: "d3e8a715-ce60-4b24-8e69-e8938cef5e57",
					},
					apk: { present: Present.NO },
					deb: {
						present: Present.PARTIALLY,
						footnote: "d3e8a715-ce60-4b24-8e69-e8938cef5e57",
					},
					rpm: { present: Present.NO },
					containerImages: {
						present: Present.PARTIALLY,
						footnote: "d8b4748a-7f59-41ba-9a8d-20e22ad4eb9a",
					},
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
				aqavit: {
					present: Present.YES,
					footnote: "26e0e603-d744-4fcf-aeb9-cd66d7e39f2e",
				},
				tck: {
					present: Present.YES,
					footnote: "26e0e603-d744-4fcf-aeb9-cd66d7e39f2e",
				},
				editions: { text: "JRE, CRaC", footnote: "89f11427-8da6-41dd-be71-d742e98511e6" },
				customisations: {
					text: "few",
					footnote: "19a3adda-e046-4db7-aedf-7a864a640bbb",
				},
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				sbom: { present: Present.NO },
				paidSupport: {
					present: Present.PARTIALLY,
					footnote: "c51bc74b-47aa-48c2-a577-9e8dd2752569",
				},
				eolDate: {
					text: "2034-04",
					footnote: "1c10af1e-7669-4223-81ea-899de5e9399b",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "1-2 weeks" },
				updateTypes: {
					text: "no/tiered",
					footnote: "bd76aec7-2985-4d16-a058-cf2c4fbf919a",
				},
				remarks: { text: "none" },
			},
		},
	],
	footnotes: [
		{
			id: "a55cc074-5991-456b-a7d4-98cf65c08ded",
			markdown:
				"While OpenJDK packages are included in Ubuntu for those architectures, they are not validated by Canonical.",
		},
		{
			id: "d3e8a715-ce60-4b24-8e69-e8938cef5e57",
			markdown:
				"Canonical's OpenJDK distribution is only available as part of Ubuntu, not as a standalone product. It can be installed with APT, for example, `apt-get install openjdk-21-jdk`. LTS versions of Ubuntu come with LTS versions of OpenJDK. Interim versions of Ubuntu include the latest non-LTS versions of OpenJDK. For details, see the [version matrix on Canonical's website](https://canonical.com/java).",
		},
		{
			id: "d8b4748a-7f59-41ba-9a8d-20e22ad4eb9a",
			markdown:
				"Distroless-style container images with a pre-installed, stripped down runtime, called [Chiselled Ubuntu for JRE](https://hub.docker.com/r/ubuntu/jre/), are only available for x86, 64-bit and ARM, 64-bit. The full JDK can be installed on any [Ubuntu container image](https://hub.docker.com/_/ubuntu) using APT.",
		},
		{
			id: "89f11427-8da6-41dd-be71-d742e98511e6",
			markdown:
				"[CRaC](https://openjdk.org/projects/crac/) (Coordinated Restore at Checkpoint) is a potential future OpenJDK feature. So far, CRaC has only been included in Ubuntu 24.10 and newer on x86, 64-bit.",
		},
		{
			id: "1c10af1e-7669-4223-81ea-899de5e9399b",
			markdown:
				"Note that the determining factor is the [Release Cycle](https://ubuntu.com/about/release-cycle) of the Ubuntu LTS version that you are using. For example, OpenJDK 21 (released in 2023) included in Ubuntu 20.04 will only be supported until April 2032 whereas OpenJDK 21 in Ubuntu 22.04 will receive updates until April 2034. For more information, see [Canonical's OpenJDK website](https://canonical.com/java).",
		},
		{
			id: "bd76aec7-2985-4d16-a058-cf2c4fbf919a",
			markdown:
				"OpenJDK packages that are part of Ubuntu's `main` repositories receive free security updates for five years starting with the release of the Ubuntu LTS version ([Standard Support](https://ubuntu.com/about/release-cycle)). After those five years, an [Ubuntu Pro](https://ubuntu.com/pricing/pro) subscription is required to receive further updates. For OpenJDK versions included in `universe`, an Ubuntu Pro subscription is required starting with day one.",
		},
		{
			id: "c51bc74b-47aa-48c2-a577-9e8dd2752569",
			markdown:
				"Canonical provides limited assistance to [Ubuntu Pro](https://ubuntu.com/pricing/pro) subscribers experiencing problems with OpenJDK for Ubuntu itself. For example, as of 2025, Canonical does not have the capacity to solve VM or GC issues by themselves.",
		},
		{
			id: "26e0e603-d744-4fcf-aeb9-cd66d7e39f2e",
			markdown:
				"As of 2025, Canonical performs validation of OpenJDK for Ubuntu on Ubuntu 24.04 on the architectures listed in the comparison table. For further information, see [Canonical's OpenJDK website](https://canonical.com/java).",
		},
		{
			id: "19a3adda-e046-4db7-aedf-7a864a640bbb",
			markdown:
				"Customizations applied by version: [8](https://git.launchpad.net/ubuntu/+source/openjdk-8/tree/debian/patches), [11](https://git.launchpad.net/ubuntu/+source/openjdk-11/tree/debian/patches), [17](https://git.launchpad.net/ubuntu/+source/openjdk-17/tree/debian/patches), [21](https://git.launchpad.net/ubuntu/+source/openjdk-21/tree/debian/patches), [25](https://git.launchpad.net/ubuntu/+source/openjdk-25/tree/debian/patches)",
		},
		{
			id: "8b2af03b-78c0-4a3a-93ff-fba56db0db55",
			markdown:
				"[Shenandoah GC is not available on all platforms](https://wiki.openjdk.org/display/shenandoah) that Canonical's OpenJDK for Ubuntu is offered for.",
		},
		{
			id: "ce313436-3f36-4c78-be2c-3d0af1359619",
			markdown:
				"[ZGC is not available on all platforms](https://wiki.openjdk.org/display/zgc) that Canonical's OpenJDK for Ubuntu is offered for. Furthermore, it is experimental in some versions.",
		},
	],
};

// noinspection JSUnusedGlobalSymbols because we import dynamically
export default data;
