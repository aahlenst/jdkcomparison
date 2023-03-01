export type FeaturePresence = {
	present: string
}

export type FeatureText = {
	text: string
}

export type ProductData = {
	id: string,
	jfx: FeaturePresence,
	jfr: FeaturePresence,
	paidSupport: FeaturePresence,
	eolDate: FeatureText
}
