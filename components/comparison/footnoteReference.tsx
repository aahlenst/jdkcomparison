type FootnoteReferenceProps = {
	footnoteNumber?: number
}

export function FootnoteReference({footnoteNumber}: FootnoteReferenceProps) {
	if (typeof (footnoteNumber) !== "number") {
		return (<></>);
	}

	return (
		<sup id={`fnref-${footnoteNumber}`} className="ml-0.5">
			<a href={`#fn-${footnoteNumber}`} className="footnote-ref" role="doc-noteref">[{footnoteNumber}]</a>
		</sup>
	);
}
