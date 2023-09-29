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
import React from "react";
import { Feature } from "@/components/comparison/feature";
import { Model } from "@/src/modelTypes";
import { ComparisonSection } from "./comparisonSection";
import { useShowDifferencesOnly } from "@/hooks/useShowDifferencesOnly";
import Link from "next/link";

export type SupportFeaturesSlice = Pick<
	Model.FeatureComparison,
	"id" | "eolDate" | "updateTypes" | "releaseSchedule" | "releaseDelay" | "paidSupport"
>;

type SupportSectionProps = {
	productData: SupportFeaturesSlice[];
	showDifferencesOnly: boolean;
};

export function SupportSection({ productData, showDifferencesOnly }: SupportSectionProps) {
	const eolDate = productData.map((product) => ({
		...product.eolDate,
		id: product.id,
	}));
	const updateTypes = productData.map((product) => ({
		...product.updateTypes,
		id: product.id,
	}));
	const schedule = productData.map((product) => ({
		...product.releaseSchedule,
		id: product.id,
	}));
	const delay = productData.map((product) => ({
		...product.releaseDelay,
		id: product.id,
	}));
	const paidSupport = productData.map((product) => ({
		...product.paidSupport,
		id: product.id,
	}));
	const [showSection, showFeatures] = useShowDifferencesOnly(showDifferencesOnly, {
		eolDate: eolDate,
		updateTypes: updateTypes,
		schedule: schedule,
		delay: delay,
		paidSupport: paidSupport,
	});

	if (!showSection) {
		return <></>;
	}

	return (
		<ComparisonSection id="support" label="Support">
			{showFeatures.eolDate && (
				<Feature id="support-eol-date" name="Patches Until" values={eolDate}>
					Date (Year-Month) until the JDK receives patches from the vendor.
				</Feature>
			)}
			{showFeatures.updateTypes && (
				<Feature id="support-update-types" name="CPU/PSU" values={updateTypes}>
					Indicates whether the vendor publishes Critical Patch Updates (CPU) and Patch
					Set Updates (PSU) and whether those are free or only accessible to paying
					customers. See the{" "}
					<Link href="/faq/#what-is-the-difference-between-the-update-types">
						FAQ entry about update types
					</Link>{" "}
					for further information.
				</Feature>
			)}
			{showFeatures.schedule && (
				<Feature id="support-release-schedule" name="Release Schedule" values={schedule}>
					Indicates whether the vendor follows the OpenJDK release schedule and releases
					an update every time the OpenJDK project does. OpenJDK releases scheduled
					updates in the second half of January, April, July, and October.
				</Feature>
			)}
			{showFeatures.delay && (
				<Feature id="support-release-delay" name="Release Delay" values={delay}>
					How long it <strong>typically</strong> takes the vendor to release an update
					once the source code has been released by OpenJDK. Does not apply to vendors on
					a custom schedule.
				</Feature>
			)}
			{showFeatures.paidSupport && (
				<Feature id="support-paid" name="Paid Support" values={paidSupport} />
			)}
		</ComparisonSection>
	);
}
