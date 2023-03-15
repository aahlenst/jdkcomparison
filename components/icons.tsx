type IconProps = {
	[key: string]: any
}

export function ChevronDownIcon(props: IconProps) {
	// Font Awesome Free v6, CC BY 4.0, solid/chevron-down.svg
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" {...props}>
			<path
				d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
		</svg>
	);
}

export function XMarkIcon(props: IconProps) {
	// Font Awesome Free v6, CC BY 4.0, solid/xmark.svg
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor" {...props}>
			<path
				d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
		</svg>
	);
}

export function InfoIcon(props: IconProps) {
	// Font Awesome Free v6, CC BY 4.0, solid/circle-info.svg
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" fill="currentColor" {...props}>
			<path
				d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"/>
		</svg>
	);
}

export function SquarePlusIcon(props: IconProps) {
	// Font Awesome Free v6, CC BY 4.0, solid/square-plus.svg
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
			<path
				d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/>
		</svg>
	);
}

export function SquareMinusIcon(props: IconProps) {
	// Font Awesome Free v6, CC BY 4.0, solid/square-minus.svg
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
			<path
				d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 200H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/>
		</svg>
	);
}
