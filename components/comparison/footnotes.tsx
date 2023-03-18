import {Model} from "../../src/modelTypes";

type FootnotesProps = {
	footnotes: Model.Footnote[]
}

export function Footnotes({footnotes}: FootnotesProps) {
	const notes = footnotes.map(fn => {
		return (
			<li key={fn.number} id={`fn-${fn.number}`} className="[&_*]:inline">
				<div dangerouslySetInnerHTML={{__html: fn.html}}/>
				<div>
					&nbsp;
					<a href={`#fnref-${fn.number}`} className="footnote-backref underline hover:no-underline"
					   role="doc-backlink">↩︎</a></div>
			</li>
		);
	});

	return (
		<div id="footnotes" className="m-4 mt-8" role="doc-endnotes">
			<h2>Footnotes</h2>
			<ol className="list-decimal columns-1 mt-2 mx-4 sm:columns-2 sm:gap-x-8 text-sm">
				{notes}
			</ol>
		</div>
	);
}
