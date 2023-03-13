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
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
			<path
				d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
		</svg>
	);
}
