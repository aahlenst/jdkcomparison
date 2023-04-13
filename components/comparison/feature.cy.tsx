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
import { Feature } from "./feature";
import { Model } from "../../src/modelTypes";

describe("<Feature/>", () => {
	it("renders feature's presence per product", () => {
		const data: (Model.FeaturePresence & Model.Keyable)[] = [
			{ id: "coffeecorp-jdk-11", present: Model.Present.YES },
			{ id: "dukecorp-jdk-11", present: Model.Present.NO },
		];

		cy.mount(<Feature id="technologies-jfx" name="JavaFX" values={data} />);

		cy.get(".feature-name").should("have.text", "JavaFX");
		cy.get(".feature-value svg").eq(0).should("have.class", "present-yes");
		cy.get(".feature-value svg").eq(1).should("have.class", "present-no");
	});
});
