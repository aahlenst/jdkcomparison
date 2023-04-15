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
type ComparisonMessageProps = {
	message: string;
};

export function ComparisonMessage({ message }: ComparisonMessageProps) {
	return (
		<div className="relative top-12 grid place-content-center h-[calc(100vh-theme(space.28))]">
			<h1 id="comparison-message" className="font-medium text-gray-900">
				{message}
			</h1>
		</div>
	);
}
