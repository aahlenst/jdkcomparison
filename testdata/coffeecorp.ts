/*
 * Copyright 2023 the original author or authors.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */
import { Present, Vendor } from "@/src/vendorDataTypes";

export const data: Vendor = {
	vendor: "Coffeecorp",
	countryOfOrigin: "Coffeeland",
	website: "https://coffeecorp.com/",
	jdks: [
		{
			id: "coffeecorp-jdk-8",
			information: {
				name: "Coffeecorp JDK 8",
				version: 8,
				downloadSite: "https://coffeecorp.com/jdk8",
			},
			features: {
				virtualMachine: { text: "CoffeeVM" },
				classLibraries: { text: "OpenJDK" },
				javaFX: {
					present: Present.YES,
					footnote: "6a296137-f4e4-4d34-b64e-3c95375f3db0",
				},
				flightRecorder: { present: Present.NO },
				javaWS: { present: Present.NO },
				gc: {
					cms: { present: Present.YES },
					epsilon: { present: Present.NO },
					g1: { present: Present.YES },
					parallel: { present: Present.YES },
					serial: { present: Present.YES },
					shenandoah: { present: Present.PARTIALLY },
					z: { present: Present.PARTIALLY },
					custom: { text: "none" },
				},
				linux: {
					x32: { present: Present.YES },
					x64: { present: Present.YES },
					x64Musl: { present: Present.NO },
					aarch64: { present: Present.YES },
					aarch64Musl: { present: Present.NO },
					aarch32: { present: Present.NO },
					ppc64: { present: Present.YES },
					riscv64: { present: Present.NO },
					s390x: { present: Present.NO },
					apk: { present: Present.NO },
					deb: { present: Present.YES },
					rpm: { present: Present.YES },
					containerImages: { present: Present.PARTIALLY },
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
					containerImages: { present: Present.PARTIALLY },
				},
				aqavit: { present: Present.YES },
				tck: { present: Present.YES },
				editions: { text: "JRE" },
				customisations: { text: "medium" },
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CPE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				paidSupport: { present: Present.NO },
				eolDate: { text: "2026-10" },
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "0-3 days" },
			},
		},
		{
			id: "coffeecorp-jdk-17",
			information: {
				name: "Coffeecorp JDK 17",
				version: 17,
				downloadSite: "https://coffeecorp.com/jdk17",
			},
			features: {
				virtualMachine: { text: "CoffeeVM" },
				classLibraries: { text: "OpenJDK" },
				javaFX: {
					present: Present.NO,
					footnote: "6a296137-f4e4-4d34-b64e-3c95375f3db0",
				},
				flightRecorder: { present: Present.YES },
				javaWS: { present: Present.NO },
				gc: {
					cms: { present: Present.NO },
					epsilon: { present: Present.YES },
					g1: { present: Present.YES },
					parallel: { present: Present.YES },
					serial: { present: Present.YES },
					shenandoah: { present: Present.PARTIALLY },
					z: { present: Present.PARTIALLY },
					custom: { text: "none" },
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
					s390x: { present: Present.YES },
					apk: { present: Present.YES },
					deb: { present: Present.YES },
					rpm: { present: Present.YES },
					containerImages: { present: Present.PARTIALLY },
				},
				mac: {
					x64: { present: Present.YES },
					aarch64: { present: Present.YES },
					installers: { present: Present.YES },
				},
				windows: {
					x32: { present: Present.NO },
					x64: { present: Present.YES },
					aarch64: { present: Present.YES },
					installers: { present: Present.YES },
					containerImages: { present: Present.PARTIALLY },
				},
				aqavit: { present: Present.YES },
				tck: { present: Present.YES },
				editions: { text: "JRE" },
				customisations: { text: "few" },
				notableFeatures: { text: "none" },
				license: { text: "GPLv2+CPE" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.YES },
				paidSupport: { present: Present.NO },
				eolDate: { text: "2027-10" },
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "0-3 days" },
			},
		},
	],
	footnotes: [
		{
			id: "6a296137-f4e4-4d34-b64e-3c95375f3db0",
			markdown:
				"Some **clarifications** regarding JavaFX that include a really long text because we hope to trigger a linebreak when this footnote is being displayed.",
		},
	],
};

export default data;
