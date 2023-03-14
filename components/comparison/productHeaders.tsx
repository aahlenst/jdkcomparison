import {Model} from "@/src/modelTypes";

type ProductHeader = Pick<Model.FeatureComparison, "id" | "name" | "vendor" | "downloadUrl" | "websiteUrl">;

type ProductHeadersProps = {
	headers: ProductHeader[]
}

export function ProductHeaders({headers}: ProductHeadersProps) {
	const productHeaders = headers.map(product => {
		return (
			<div key={product.id} className="flex flex-col py-2 px-4">
				<div className="product-vendor text-sm text-gray-500">{product.vendor}</div>
				<div className="product-name font-semibold">{product.name}</div>
				<div className="product-download mt-4 text-xs">
					<a href={product.downloadUrl} className="py-1 underline">Download</a>
				</div>
				<div className="product-website mt-2 text-xs">
					<a href={product.websiteUrl} className="py-1 underline">Website</a>
				</div>
			</div>
		);
	});

	return (
		<section id="product-header">
			<div className="feature grid divide-x"
				 style={{gridTemplateColumns: `repeat(${productHeaders.length + 1}, 12rem)`}}>
				<div></div>
				{productHeaders}
			</div>
		</section>
	);
}
