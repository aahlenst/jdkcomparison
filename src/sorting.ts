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
import { Model } from "@/src/modelTypes";

export class AscendingVendorComparator implements Model.Comparator<
	Pick<Model.FeatureComparison, "vendor">
> {
	id: string = "v-a";
	label: string = "Vendor, A-Z";

	compare(
		a: Pick<Model.FeatureComparison, "vendor">,
		b: Pick<Model.FeatureComparison, "vendor">,
	): number {
		return a.vendor.localeCompare(b.vendor, "en");
	}
}

export class DescendingVendorComparator implements Model.Comparator<
	Pick<Model.FeatureComparison, "vendor">
> {
	id: string = "v-d";
	label: string = "Vendor, Z-A";

	compare(
		a: Pick<Model.FeatureComparison, "vendor">,
		b: Pick<Model.FeatureComparison, "vendor">,
	): number {
		return a.vendor.localeCompare(b.vendor, "en") * -1;
	}
}

export class AscendingVersionComparator implements Model.Comparator<
	Pick<Model.FeatureComparison, "version">
> {
	id: string = "v-o";
	label: string = "Oldest";

	compare(
		a: Pick<Model.FeatureComparison, "version">,
		b: Pick<Model.FeatureComparison, "version">,
	): number {
		return a.version - b.version;
	}
}

export class DescendingVersionComparator implements Model.Comparator<
	Pick<Model.FeatureComparison, "version">
> {
	id: string = "v-n";
	label: string = "Newest";

	compare(
		a: Pick<Model.FeatureComparison, "version">,
		b: Pick<Model.FeatureComparison, "version">,
	): number {
		return b.version - a.version;
	}
}

export class AscendingNameComparator implements Model.Comparator<
	Pick<Model.FeatureComparison, "name">
> {
	id: string = "n-a";
	label: string = "JDK Name, A-Z";

	compare(
		a: Pick<Model.FeatureComparison, "name">,
		b: Pick<Model.FeatureComparison, "name">,
	): number {
		return a.name.localeCompare(b.name, "en");
	}
}

export class DescendingNameComparator implements Model.Comparator<
	Pick<Model.FeatureComparison, "name">
> {
	id: string = "n-d";
	label: string = "JDK Name, Z-A";

	compare(
		a: Pick<Model.FeatureComparison, "name">,
		b: Pick<Model.FeatureComparison, "name">,
	): number {
		return b.name.localeCompare(a.name, "en");
	}
}

export const DefaultComparator = new DescendingVersionComparator();

export const AllComparators = [
	new DescendingVersionComparator(),
	new AscendingVersionComparator(),
	new AscendingVendorComparator(),
	new DescendingVendorComparator(),
	new AscendingNameComparator(),
	new DescendingNameComparator(),
];

export function sortFeatureComparisons(
	comparisons: Model.FeatureComparison[],
	comparators: Model.Comparator<Model.FeatureComparison>[],
) {
	comparisons.sort((a, b) => {
		for (const comparator of comparators) {
			const result = comparator.compare(a, b);
			if (result != 0) {
				return result;
			}
		}
		return 0;
	});

	return comparisons;
}
