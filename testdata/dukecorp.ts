import {Present, Vendor} from "@/src/vendorDataTypes";

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
				virtualMachine: {text: "DukeVM"},
				classLibraries: {text: "OpenJDK"},
				javaFX: {present: Present.NO},
				flightRecorder: {present: Present.YES},
				javaWS: {present: Present.NO},
				gc: {
					cms: {present: Present.NO},
					epsilon: {present: Present.YES},
					g1: {present: Present.YES},
					parallel: {present: Present.YES},
					serial: {present: Present.YES},
					shenandoah: {present: Present.NO},
					z: {present: Present.YES},
					custom: {text: "FairyGC"},
				},
				aqavit: {present: Present.YES},
				tck: {present: Present.YES},
				editions: {text: "JRE"},
				customisations: {text: "many"},
				notableFeatures: {text: "FairyGC"},
				license: {text: "Proprietary"},
				freeInDevelopment: {present: Present.YES},
				freeInProduction: {present: Present.NO},
				paidSupport: {present: Present.NO, footnote: "f4b31750-2c0d-4332-bfe7-6d30daa959a1"},
				eolDate: {text: "2027-10", footnote: "31e01ff8-ff7b-4864-ab54-1b1e18663dcf"},
				releaseSchedule: {text: "OpenJDK"},
				releaseDelay: {text: "none"},
			}
		}
	],
	footnotes: [
		{
			id: "f4b31750-2c0d-4332-bfe7-6d30daa959a1",
			markdown: "Some *remark* regarding paid support that is a really long text because we hope to trigger a linebreak when this footnote is being displayed."
		},
		{
			id: "31e01ff8-ff7b-4864-ab54-1b1e18663dcf",
			markdown: "Some _comment_ about the end of life date."
		}
	]
};

export default data;
