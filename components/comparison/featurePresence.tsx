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
import { Model } from "../../src/modelTypes";
import React from "react";
import {
	CircleHalfStrokeIcon,
	CircleIcon,
	MinusIcon,
	QuestionIcon,
} from "../icons";

type FeaturePresenceProps = {
	present: Model.Present;
};

export function FeaturePresence({ present }: FeaturePresenceProps) {
	let presenceIcon: JSX.Element;
	switch (present) {
		case Model.Present.YES:
			presenceIcon = (
				<CircleIcon
					className="present-yes h-4 w-4 inline"
					role="img"
					aria-label="yes"
				>
					<title>yes</title>
				</CircleIcon>
			);
			break;
		case Model.Present.PARTIALLY:
			presenceIcon = (
				<CircleHalfStrokeIcon
					className="present-partially h-4 w-4 inline"
					role="img"
					aria-label="partially"
				>
					<title>partially</title>
				</CircleHalfStrokeIcon>
			);
			break;
		case Model.Present.NO:
			presenceIcon = (
				<MinusIcon
					className="present-no h-4 w-4 inline"
					role="img"
					aria-label="no"
				>
					<title>no</title>
				</MinusIcon>
			);
			break;
		case Model.Present.UNKNOWN:
			presenceIcon = (
				<QuestionIcon
					className="present-unknown h-4 w-4 inline"
					role="img"
					aria-label="unknown"
				>
					<title>unknown</title>
				</QuestionIcon>
			);
			break;
		default:
			throw new Error(`Unknown presence: ${present}`);
	}

	return <>{presenceIcon}</>;
}
