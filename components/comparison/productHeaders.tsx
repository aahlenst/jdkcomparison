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
import { DifferencesOnlyToggle } from "./differencesOnlyToggle";

type ProductHeader = Pick<
	Model.FeatureComparison,
	"id" | "name" | "vendor" | "downloadUrl" | "websiteUrl"
>;

type ProductHeadersProps = {
	headers: ProductHeader[];
};

export function ProductHeaders({ headers }: ProductHeadersProps) {
	const productHeaders = headers.map((product) => {
		return (
			<div key={product.id} className="flex flex-col px-4 border-r last:border-r-transparent">
				<div className="product-vendor text-sm text-gray-500">{product.vendor}</div>
				<div className="product-name font-semibold">
					<h1>{product.name}</h1>
				</div>
				<div className="product-download mt-4 text-xs">
					<a
						href={product.downloadUrl}
						className="py-1 underline hover:no-underline text-blue-600 visited:text-violet-600"
					>
						Download
					</a>
				</div>
				<div className="product-website mt-2 text-xs">
					<a
						href={product.websiteUrl}
						className="py-1 underline hover:no-underline text-blue-600 visited:text-violet-600"
					>
						Website
					</a>
				</div>
			</div>
		);
	});

	return (
		<section id="product-header" className="sticky top-28 z-20 bg-white">
			<div
				className="feature grid"
				style={{
					gridTemplateColumns: `repeat(${productHeaders.length + 1}, 12rem)`,
				}}
			>
				<div className="sticky left-0 flex flex-col place-content-end bg-white px-4 border-r">
					<DifferencesOnlyToggle />
				</div>
				{productHeaders}
			</div>
		</section>
	);
}
