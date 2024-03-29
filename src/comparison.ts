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
import { FeatureDescription, FeaturePresence, Present, Vendor } from "@/src/vendorDataTypes";
import { micromark } from "micromark";
import { Model } from "@/src/modelTypes";
import FootnoteReference = Model.FootnoteReference;
import {
	AscendingNameComparator,
	AscendingVendorComparator,
	DescendingVersionComparator,
	sortFeatureComparisons,
} from "@/src/sorting";

const FeatureComparisonComparatorChain = [
	new DescendingVersionComparator(),
	new AscendingVendorComparator(),
	new AscendingNameComparator(),
];

class FootnoteCounter {
	#counter: number = 1;

	getAndAdd(): number {
		const value = this.#counter;
		this.#counter++;
		return value;
	}
}

export function extractComparisonData(vendors: Vendor[]): Model.Comparison {
	vendors.sort((a, b) => a.vendor.localeCompare(b.vendor, "en"));

	let footnoteCounter: FootnoteCounter = new FootnoteCounter();
	const aggregatedFootnotes: Model.Footnote[] = [];
	for (const vendor of vendors) {
		aggregatedFootnotes.push(...extractFootnotes(vendor, footnoteCounter));
	}

	const aggregatedFeatureComparisons: Model.FeatureComparison[] = [];
	for (const vendor of vendors) {
		aggregatedFeatureComparisons.push(
			...extractFeatureComparisons(vendor, aggregatedFootnotes),
		);
	}

	sortFeatureComparisons(aggregatedFeatureComparisons, FeatureComparisonComparatorChain);
	return {
		productsInComparison: aggregatedFeatureComparisons,
		footnotes: aggregatedFootnotes,
	};
}

function extractFootnotes(vendor: Vendor, counter: FootnoteCounter) {
	return vendor.footnotes.map((footnote) => {
		return {
			id: footnote.id,
			number: counter.getAndAdd(),
			html: micromark(footnote.markdown),
			backReferences: 0,
		};
	});
}

function extractFeatureComparisons(
	vendor: Vendor,
	footnotes: Model.Footnote[],
): Model.FeatureComparison[] {
	return vendor.jdks.map((jdk) => {
		return {
			id: jdk.id,
			name: jdk.information.name,
			vendor: vendor.vendor,
			version: jdk.information.version,
			downloadUrl: jdk.information.downloadSite,
			websiteUrl: vendor.website,
			countryOfOrigin: vendor.countryOfOrigin,
			virtualMachine: mapFeatureDescription(jdk.features.virtualMachine, footnotes),
			classLibraries: mapFeatureDescription(jdk.features.classLibraries, footnotes),
			jfx: mapFeaturePresence(jdk.features.javaFX, footnotes),
			jfr: mapFeaturePresence(jdk.features.flightRecorder, footnotes),
			jaws: mapFeaturePresence(jdk.features.javaWS, footnotes),
			cms: mapFeaturePresence(jdk.features.gc.cms, footnotes),
			epsilon: mapFeaturePresence(jdk.features.gc.epsilon, footnotes),
			g1: mapFeaturePresence(jdk.features.gc.g1, footnotes),
			parallel: mapFeaturePresence(jdk.features.gc.parallel, footnotes),
			serial: mapFeaturePresence(jdk.features.gc.serial, footnotes),
			shenandoah: mapFeaturePresence(jdk.features.gc.shenandoah, footnotes),
			z: mapFeaturePresence(jdk.features.gc.z, footnotes),
			customGCs: mapFeatureDescription(jdk.features.gc.custom, footnotes),
			linuxx32: mapFeaturePresence(jdk.features.linux.x32, footnotes),
			linuxx64: mapFeaturePresence(jdk.features.linux.x64, footnotes),
			linuxx64Musl: mapFeaturePresence(jdk.features.linux.x64Musl, footnotes),
			linuxAArch32: mapFeaturePresence(jdk.features.linux.aarch32, footnotes),
			linuxAArch64: mapFeaturePresence(jdk.features.linux.aarch64, footnotes),
			linuxAArch64Musl: mapFeaturePresence(jdk.features.linux.aarch64Musl, footnotes),
			linuxPPC64: mapFeaturePresence(jdk.features.linux.ppc64, footnotes),
			linuxRISCV64: mapFeaturePresence(jdk.features.linux.riscv64, footnotes),
			linuxs390x: mapFeaturePresence(jdk.features.linux.s390x, footnotes),
			linuxAPK: mapFeaturePresence(jdk.features.linux.apk, footnotes),
			linuxDeb: mapFeaturePresence(jdk.features.linux.deb, footnotes),
			linuxRPM: mapFeaturePresence(jdk.features.linux.rpm, footnotes),
			linuxContainerImages: mapFeaturePresence(jdk.features.linux.containerImages, footnotes),
			macx64: mapFeaturePresence(jdk.features.mac.x64, footnotes),
			macAArch64: mapFeaturePresence(jdk.features.mac.aarch64, footnotes),
			macInstallers: mapFeaturePresence(jdk.features.mac.installers, footnotes),
			windowsx32: mapFeaturePresence(jdk.features.windows.x32, footnotes),
			windowsx64: mapFeaturePresence(jdk.features.windows.x64, footnotes),
			windowsAArch64: mapFeaturePresence(jdk.features.windows.aarch64, footnotes),
			windowsInstallers: mapFeaturePresence(jdk.features.windows.installers, footnotes),
			windowsContainerImages: mapFeaturePresence(
				jdk.features.windows.containerImages,
				footnotes,
			),
			aixPPC: mapFeaturePresence(jdk.features.otherPlatforms.aixPPC, footnotes),
			solarisSPARC: mapFeaturePresence(jdk.features.otherPlatforms.solarisSPARC, footnotes),
			solarisx64: mapFeaturePresence(jdk.features.otherPlatforms.solarisx64, footnotes),
			aqavit: mapFeaturePresence(jdk.features.aqavit, footnotes),
			tck: mapFeaturePresence(jdk.features.tck, footnotes),
			editions: mapFeatureDescription(jdk.features.editions, footnotes),
			customisations: mapFeatureDescription(jdk.features.customisations, footnotes),
			notableFeatures: mapFeatureDescription(jdk.features.notableFeatures, footnotes),
			license: mapFeatureDescription(jdk.features.license, footnotes),
			freeInDevelopment: mapFeaturePresence(jdk.features.freeInDevelopment, footnotes),
			freeInProduction: mapFeaturePresence(jdk.features.freeInProduction, footnotes),
			sbom: mapFeaturePresence(jdk.features.sbom, footnotes),
			paidSupport: mapFeaturePresence(jdk.features.paidSupport, footnotes),
			eolDate: mapFeatureDescription(jdk.features.eolDate, footnotes),
			releaseSchedule: mapFeatureDescription(jdk.features.releaseSchedule, footnotes),
			releaseDelay: mapFeatureDescription(jdk.features.releaseDelay, footnotes),
			updateTypes: mapFeatureDescription(jdk.features.updateTypes, footnotes),
			remarks: mapFeatureDescription(jdk.features.remarks, footnotes),
		};
	});
}

function resolveFootnote(
	id: string | undefined,
	footnotes: Model.Footnote[],
): FootnoteReference | undefined {
	if (id === undefined) {
		return undefined;
	}
	for (const footnote of footnotes) {
		if (footnote.id === id) {
			footnote.backReferences += 1;
			return {
				number: footnote.number,
				backReference: footnote.backReferences,
			};
		}
	}
	throw Error(`Unresolvable footnote: ${id}`);
}

function mapFeaturePresence(
	presence: FeaturePresence,
	footnotes: Model.Footnote[],
): Model.FeaturePresence {
	const retVal: Model.FeaturePresence = {
		present: mapPresent(presence.present),
	};

	// Next.JS does not accept properties that are `undefined` because they cannot be serialized to JSON.
	if (presence.footnote !== undefined) {
		retVal.footnoteReference = resolveFootnote(presence.footnote, footnotes);
	}

	return retVal;
}

function mapFeatureDescription(
	description: FeatureDescription,
	footnotes: Model.Footnote[],
): Model.FeatureDescription {
	const retVal: Model.FeatureDescription = {
		text: description.text,
	};

	// Next.JS does not accept properties that are `undefined` because they cannot be serialized to JSON.
	if (description.footnote !== undefined) {
		retVal.footnoteReference = resolveFootnote(description.footnote, footnotes);
	}

	return retVal;
}

function mapPresent(present: Present): Model.Present {
	switch (present) {
		case Present.YES:
			return Model.Present.YES;
		case Present.PARTIALLY:
			return Model.Present.PARTIALLY;
		case Present.NO:
			return Model.Present.NO;
		case Present.UNKNOWN:
			return Model.Present.UNKNOWN;
		default:
			throw new Error(`Unknown presence: ${present}`);
	}
}
