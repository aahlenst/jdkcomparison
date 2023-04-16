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
import React, { PropsWithChildren } from "react";
import { Model } from "../../src/modelTypes";
import { FeatureExplanation } from "./featureExplanation";
import { FeaturePresence } from "./featurePresence";
import { Footnote } from "@/components/comparison/footnote";

type FeatureProps = {
	id: string;
	name: string;
	values:
		| (Model.FeaturePresence & Model.Keyable)[]
		| (Model.FeatureDescription & Model.Keyable)[];
};

export function Feature({
	id,
	name,
	values,
	children,
}: PropsWithChildren<FeatureProps>) {
	const features = values.map((value) => {
		return (
			<div
				key={value.id}
				className="feature-value py-2 px-4 content-center border-r text-sm last:border-r-transparent"
			>
				{"present" in value && (
					<FeaturePresence present={value.present} />
				)}
				{"text" in value && value.text}
				{"footnoteReference" in value && value.footnoteReference && (
					<Footnote footnoteReference={value.footnoteReference} />
				)}
			</div>
		);
	});

	return (
		<div
			id={id}
			className="feature grid overflow-visible"
			style={{
				gridTemplateColumns: `repeat(${features.length + 1}, 12rem)`,
			}}
		>
			<div className="sticky left-0 z-10 inline-flex items-center bg-white py-2 px-4 border-r">
				<span className="feature-name mr-1 text-sm font-medium">
					{name}
				</span>
				{children && (
					<FeatureExplanation>{children}</FeatureExplanation>
				)}
			</div>
			{features}
		</div>
	);
}
