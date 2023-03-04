export type Vendor = {
	/**
	 * Name of the vendor, for example, `Dukecorp`.
	 */
	vendor: string

	/**
	 * Name of the country where the vendor is headquartered, for example, `Denmark`.
	 */
	countryOfOrigin: string

	/**
	 * URL of the vendor's website.
	 */
	website: string

	/**
	 * The JDKs being offered by the vendor.
	 */
	jdks: JDK[]

	footnotes: Footnote[]
}

export type JDK = {
	/**
	 * Uniquely identifies the product. Only lowercase characters, numbers, and minus (-) are allowed. Typically, it is
	 * a composition of the JDK's name and its version number, for example, `dukecorp-jdk-17`.
	 */
	id: string,
	information: JDKInformation
	features: JDKFeatures
}

export type JDKInformation = {
	/**
	 * Human-readable name of the product, possibly including the vendor name, for example, `Dukecorp JDK 17`.
	 */
	name: string,
	/**
	 * The feature version of the JDK according to {@link https://openjdk.org/jeps/322|JEP 322}.
	 */
	version: number,
	/**
	 * Full URL to the site where the JDK can be downloaded from.
	 */
	downloadSite: string
}

export type JDKFeatures = {
	javaFX: FeaturePresence
	flightRecorder: FeaturePresence
	paidSupport: FeaturePresence,
	eolDate: FeatureDescription
}

export type FeatureDescription = {
	/**
	 * Textual description of the feature. Plain text only, no Markdown allowed.
	 */
	text: string,

	/**
	 * Optional reference to a {@link Footnote}.
	 */
	footnote?: FootnoteReference
}

export type FeaturePresence = {
	present: Present,
	footnote?: FootnoteReference
}

export enum Present {
	YES,
	PARTIALLY,
	NO,
	UNKNOWN
}

export type FootnoteReference = string

export type Footnote = {
	id: string,
	markdown: string
}
