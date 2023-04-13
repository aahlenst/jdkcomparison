import React from "react";
import { Feature } from "@/components/comparison/feature";
import { Model } from "@/src/modelTypes";
import { ComparisonSection } from "./comparisonSection";
import { useShowDifferencesOnly } from "@/hooks/useShowDifferencesOnly";

type SupportSectionProps = {
	productData: Model.FeatureComparison[];
	showDifferencesOnly: boolean;
};

export function SupportSection({
	productData,
	showDifferencesOnly,
}: SupportSectionProps) {
	const eolDate = productData.map((product) => ({
		...product.eolDate,
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
	const [showSection, showFeatures] = useShowDifferencesOnly(
		showDifferencesOnly,
		{
			eolDate: eolDate,
			schedule: schedule,
			delay: delay,
			paidSupport: paidSupport,
		}
	);

	if (!showSection) {
		return <></>;
	}

	return (
		<ComparisonSection id="support" label="Support">
			{showFeatures.eolDate && (
				<Feature
					id="support-eol-date"
					name="Patches Until"
					values={eolDate}
				>
					Date (Year-Month) until the JDK receives patches from the
					vendor.
				</Feature>
			)}
			{showFeatures.schedule && (
				<Feature
					id="support-release-schedule"
					name="Release Schedule"
					values={schedule}
				>
					Indicates whether the vendor follows the OpenJDK release
					schedule and releases an update every time the OpenJDK
					project does. OpenJDK releases scheduled updates in the
					second half of January, April, July, and October.
				</Feature>
			)}
			{showFeatures.delay && (
				<Feature
					id="support-release-delay"
					name="Release Delay"
					values={delay}
				>
					How long it <strong>typically</strong> takes the vendor to
					release an update once the source code has been released by
					OpenJDK. Does not apply to vendors on a custom schedule.
				</Feature>
			)}
			{showFeatures.paidSupport && (
				<Feature
					id="support-paid"
					name="Paid support"
					values={paidSupport}
				/>
			)}
		</ComparisonSection>
	);
}
