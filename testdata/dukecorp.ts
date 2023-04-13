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
	vendor: "Dukecorp",
	countryOfOrigin: "United States of Duke",
	website: "https://dukecorp.com/",
	jdks: [
		{
			id: "dukecorp-jdk-17",
			information: {
				name: "Dukecorp JDK 17",
				version: 17,
				downloadSite: "https://dukecorp.com/jdk17",
			},
			features: {
				virtualMachine: { text: "DukeVM" },
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
					custom: { text: "FairyGC" },
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
					containerImages: { present: Present.NO },
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
					installers: { present: Present.NO },
					containerImages: { present: Present.NO },
				},
				aqavit: { present: Present.YES },
				tck: { present: Present.YES },
				editions: { text: "JRE" },
				customisations: { text: "many" },
				notableFeatures: { text: "FairyGC" },
				license: { text: "Proprietary" },
				freeInDevelopment: { present: Present.YES },
				freeInProduction: { present: Present.NO },
				paidSupport: {
					present: Present.NO,
					footnote: "f4b31750-2c0d-4332-bfe7-6d30daa959a1",
				},
				eolDate: {
					text: "2027-10",
					footnote: "31e01ff8-ff7b-4864-ab54-1b1e18663dcf",
				},
				releaseSchedule: { text: "OpenJDK" },
				releaseDelay: { text: "none" },
			},
		},
	],
	footnotes: [
		{
			id: "f4b31750-2c0d-4332-bfe7-6d30daa959a1",
			markdown:
				"Some *remark* regarding paid support that is a really long text because we hope to trigger a linebreak when this footnote is being displayed.",
		},
		{
			id: "31e01ff8-ff7b-4864-ab54-1b1e18663dcf",
			markdown: "Some _comment_ about the end of life date.",
		},
	],
};

export default data;
