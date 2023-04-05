import {Present, Vendor} from "@/src/vendorDataTypes";

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
				downloadSite: "https://docs.aws.amazon.com/corretto/latest/corretto-8-ug/downloads-list.html",
			},
			features: {
				virtualMachine: {text: "HotSpot"},
				classLibraries: {text: "OpenJDK"},
				javaFX: {present: Present.PARTIALLY, footnote: "9960d648-de3a-42ab-85c7-462cc82a7932"},
				flightRecorder: {present: Present.YES},
				javaWS: {present: Present.NO},
				aqavit: {present: Present.NO},
				tck: {present: Present.YES},
				editions: {text: "JRE"},
				customisations: {text: "few", footnote: "07cba2f3-0251-48ea-a5da-f76b1bdfff1d"},
				notableFeatures: {text: "none"},
				license: {text: "GPLv2+CPE"},
				freeInDevelopment: {present: Present.YES},
				freeInProduction: {present: Present.YES},
				paidSupport: {present: Present.PARTIALLY, footnote: "b1a00daa-5bea-4f3d-a0c9-72f800b5a9fb"},
				eolDate: {text: "2026-06", footnote: "a8bdffe4-8de9-4d31-9a7e-726a5b5157e5"}
			}
		},
		{
			id: "corretto-11",
			information: {
				name: "Corretto 11",
				version: 11,
				downloadSite: "https://docs.aws.amazon.com/corretto/latest/corretto-11-ug/downloads-list.html",
			},
			features: {
				virtualMachine: {text: "HotSpot"},
				classLibraries: {text: "OpenJDK"},
				javaFX: {present: Present.NO},
				flightRecorder: {present: Present.YES},
				javaWS: {present: Present.NO},
				aqavit: {present: Present.NO},
				tck: {present: Present.YES},
				editions: {text: "JRE"},
				customisations: {text: "few", footnote: "07cba2f3-0251-48ea-a5da-f76b1bdfff1d"},
				notableFeatures: {text: "none"},
				license: {text: "GPLv2+CPE"},
				freeInDevelopment: {present: Present.YES},
				freeInProduction: {present: Present.YES},
				paidSupport: {present: Present.PARTIALLY, footnote: "b1a00daa-5bea-4f3d-a0c9-72f800b5a9fb"},
				eolDate: {text: "2027-09", footnote: "a8bdffe4-8de9-4d31-9a7e-726a5b5157e5"}
			}
		},
		{
			id: "corretto-17",
			information: {
				name: "Corretto 17",
				version: 17,
				downloadSite: "https://docs.aws.amazon.com/corretto/latest/corretto-17-ug/downloads-list.html",
			},
			features: {
				virtualMachine: {text: "HotSpot"},
				classLibraries: {text: "OpenJDK"},
				javaFX: {present: Present.NO},
				flightRecorder: {present: Present.YES},
				javaWS: {present: Present.NO},
				aqavit: {present: Present.NO},
				tck: {present: Present.YES},
				editions: {text: "JRE"},
				customisations: {text: "none", footnote: "07cba2f3-0251-48ea-a5da-f76b1bdfff1d"},
				notableFeatures: {text: "none"},
				license: {text: "GPLv2+CPE"},
				freeInDevelopment: {present: Present.YES},
				freeInProduction: {present: Present.YES},
				paidSupport: {present: Present.PARTIALLY, footnote: "b1a00daa-5bea-4f3d-a0c9-72f800b5a9fb"},
				eolDate: {text: "2029-10", footnote: "a8bdffe4-8de9-4d31-9a7e-726a5b5157e5"}
			}
		},
		{
			id: "corretto-20",
			information: {
				name: "Corretto 20",
				version: 20,
				downloadSite: "https://docs.aws.amazon.com/corretto/latest/corretto-20-ug/downloads-list.html",
			},
			features: {
				virtualMachine: {text: "HotSpot"},
				classLibraries: {text: "OpenJDK"},
				javaFX: {present: Present.NO},
				flightRecorder: {present: Present.YES},
				javaWS: {present: Present.NO},
				aqavit: {present: Present.NO},
				tck: {present: Present.YES},
				editions: {text: "none"},
				customisations: {text: "none", footnote: "07cba2f3-0251-48ea-a5da-f76b1bdfff1d"},
				notableFeatures: {text: "none"},
				license: {text: "GPLv2+CPE"},
				freeInDevelopment: {present: Present.YES},
				freeInProduction: {present: Present.YES},
				paidSupport: {present: Present.PARTIALLY, footnote: "b1a00daa-5bea-4f3d-a0c9-72f800b5a9fb"},
				eolDate: {text: "2023-10", footnote: "a8bdffe4-8de9-4d31-9a7e-726a5b5157e5"}
			}
		},
	],
	footnotes: [
		{
			id: "9960d648-de3a-42ab-85c7-462cc82a7932",
			markdown: "See the [Amazon Corretto FAQ](https://aws.amazon.com/corretto/faqs/) for a list of platforms " +
				"where JavaFX is available."
		},
		{
			id: "07cba2f3-0251-48ea-a5da-f76b1bdfff1d",
			markdown: "See the list of additional patches applied to [Amazon Corretto " +
				"8](https://docs.aws.amazon.com/corretto/latest/corretto-8-ug/patches.html), " +
				"[11](https://docs.aws.amazon.com/corretto/latest/corretto-11-ug/patches.html), " +
				"[17](https://docs.aws.amazon.com/corretto/latest/corretto-17-ug/patches.html)."
		},
		{
			id: "b1a00daa-5bea-4f3d-a0c9-72f800b5a9fb",
			markdown: "As stated by the [Amazon Corretto FAQ](https://aws.amazon.com/corretto/faqs/), Corretto is " +
				"covered by [AWS Support Plans](https://aws.amazon.com/premiumsupport/). Separate Corretto-specific " +
				"assistance plans are not available."
		},
		{
			id: "a8bdffe4-8de9-4d31-9a7e-726a5b5157e5",
			markdown: "See the [Support Calendar](https://aws.amazon.com/corretto/faqs/#support_calendar) of " +
				"Amazon Corretto for details."
		},
	]
};

// noinspection JSUnusedGlobalSymbols because we import dynamically
export default data;
