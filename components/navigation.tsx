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
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { BarsIcon, EnvelopeIcon, GitHubIcon, XMarkIcon } from "@/components/icons";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import logo from "../public/logo.svg";
import Image from "next/image";
import { classNames } from "@/src/utils";
import React, { useState } from "react";

function isActive(router: NextRouter, path: string): boolean {
	return router.pathname === path;
}

const mainNavigation = [
	{ id: "jdk-comparison", href: "/", label: "JDK Comparison" },
	{ id: "faq", href: "/faq", label: "FAQ" },
];

export function Navigation() {
	const router = useRouter();
	const [open, setOpen] = useState(false);

	return (
		<div className="fixed left-0 top-0 right-0 h-16 z-30 bg-white shadow-sm">
			<div className="mx-auto px-2 sm:px-6 lg:px-8">
				<nav className="relative flex h-16 justify-between" aria-label="Main navigation">
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						{/* Mobile menu button */}
						<button
							id="mobile-menu-open"
							className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-inset focus:ring-red-500"
							onClick={() => setOpen(true)}
						>
							<span className="sr-only">Open main menu</span>
							<BarsIcon
								className="block h-6 w-6"
								aria-hidden="true"
								stroke="currentColor"
								fill="currentColor"
							/>
						</button>
					</div>
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<div className="flex shrink-0 items-center">
							<Link href="/">
								<span className="sr-only">Back to homepage.</span>
								<Image
									id="logo"
									src={logo}
									alt="JDK Comparison logo"
									className="block h-8 w-auto"
								/>
							</Link>
						</div>
						<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
							{mainNavigation.map((item) => (
								<Link
									key={item.id}
									href={item.href}
									className={classNames(
										isActive(router, item.href)
											? "border-red-600 text-gray-900"
											: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
										`desktop-navigation-option desktop-navigation-option-${item.id} inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium`,
									)}
									aria-current={isActive(router, item.href) ? "page" : undefined}
								>
									{item.label}
								</Link>
							))}
						</div>
					</div>
					<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
						<a
							href="mailto:hello@jdkcomparison.com"
							type="button"
							id="e-mail-link"
							className="secondary-navigation-option rounded-full bg-white p-1 text-gray-600 hover:text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
						>
							<span className="sr-only">Send an e-mail</span>
							<EnvelopeIcon
								className="h-6 w-6"
								aria-hidden="true"
								stroke="currentColor"
								fill="currentColor"
							>
								<title>Send an e-mail</title>
							</EnvelopeIcon>
						</a>
						<a
							href="https://github.com/aahlenst/jdkcomparison"
							type="button"
							id="github-link"
							className="secondary-navigation-option rounded-full bg-white p-1 ml-3 text-gray-600 hover:text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
						>
							<span className="sr-only">Go to GitHub repository</span>
							<GitHubIcon
								className="h-6 w-6"
								aria-hidden="true"
								stroke="currentColor"
								fill="currentColor"
							>
								<title>Go to GitHub repository</title>
							</GitHubIcon>
						</a>
					</div>
				</nav>
			</div>

			<Dialog className="relative z-40 lg:hidden" open={open} onClose={setOpen}>
				<DialogBackdrop
					transition
					className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity duration-300 ease-linear data-closed:opacity-0"
				/>

				<div className="fixed inset-0 z-40 flex">
					<DialogPanel
						transition
						className="relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-hidden transition duration-300 ease-in-out data-closed:-translate-x-full"
					>
						<div className="absolute right-0 top-0 -mr-12 pt-2">
							<button
								id="mobile-menu-close"
								type="button"
								className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-hidden focus:ring-2 focus:ring-inset focus:ring-white"
								onClick={() => setOpen(false)}
							>
								<span className="sr-only">Close sidebar</span>
								<XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
							</button>
						</div>
						<div className="h-0 flex-1 overflow-y-auto pb-4 pt-5">
							<div className="flex shrink-0 items-center px-4">
								<Image
									id="logo"
									src={logo}
									alt="JDK Comparison logo"
									className="h-8 w-auto"
								/>
							</div>
							<nav aria-label="Sidebar navigation" className="mt-5">
								<div className="space-y-1">
									{mainNavigation.map((item) => (
										<Link
											key={item.id}
											href={item.href}
											className={classNames(
												isActive(router, item.href)
													? "border-red-600 bg-red-50 text-red-600"
													: "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900",
												`mobile-navigation-option mobile-navigation-option-${item.id} group flex items-center border-l-4 px-3 py-2 text-sm font-medium`,
											)}
											aria-current={
												isActive(router, item.href) ? "page" : undefined
											}
										>
											{item.label}
										</Link>
									))}
								</div>
							</nav>
						</div>
					</DialogPanel>
					<div className="w-14 shrink-0" aria-hidden="true">
						{/* Force sidebar to shrink to fit close icon */}
					</div>
				</div>
			</Dialog>
		</div>
	);
}
