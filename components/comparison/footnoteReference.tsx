import {Model} from "../../src/modelTypes";

type FootnoteReferenceProps = {
	footnoteReference?: Model.FootnoteReference
}

export function FootnoteReference({footnoteReference}: FootnoteReferenceProps) {
	if (footnoteReference === undefined) {
		return (<></>);
	}

	return (
		<sup id={`fnref-${footnoteReference.number}:${footnoteReference.backReference}`} className="ml-0.5">
			<a href={`#fn-${footnoteReference.number}`} className="footnote-ref"
			   role="doc-noteref">[{footnoteReference.number}]</a>
		</sup>
	);
}
