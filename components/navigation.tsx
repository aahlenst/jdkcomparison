import { Dialog, Transition } from "@headlessui/react";
import { BarsIcon, GitHubIcon, XMarkIcon } from "@/components/icons";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import logo from "../public/logo.svg";
import Image from "next/image";
import { classNames } from "@/src/utils";
import React, { Fragment, useState } from "react";

function isActive(router: NextRouter, path: string): boolean {
	return router.pathname === path;
}

export function Navigation() {
	const router = useRouter();
	const [open, setOpen] = useState(false);

	return (
		<div className="fixed left-0 top-0 right-0 h-16 z-30 bg-white shadow">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<nav
					className="relative flex h-16 justify-between"
					aria-label="Main navigation"
				>
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						{/* Mobile menu button */}
						<button
							id="mobile-menu-open"
							className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
							onClick={() => setOpen(true)}
						>
							<span className="sr-only">Open main menu</span>
							<BarsIcon
								className="block h-6 w-6"
								aria-hidden="true"
							/>
						</button>
					</div>
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<div className="flex flex-shrink-0 items-center">
							<Link href="/">
								<span className="sr-only">
									Back to homepage.
								</span>
								<Image
									id="logo"
									src={logo}
									alt="JDK Comparison logo"
									className="block h-8 w-auto"
								/>
							</Link>
						</div>
						<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
							<Link
								href="/"
								className={classNames(
									isActive(router, "/")
										? "border-red-600 text-gray-900"
										: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
									"desktop-navigation-option desktop-navigation-option-jdk-comparison inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
								)}
							>
								JDK Comparison
							</Link>
							<Link
								href="/faq"
								className={classNames(
									isActive(router, "/faq")
										? "border-red-600 text-gray-900"
										: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
									"desktop-navigation-option desktop-navigation-option-faq inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
								)}
							>
								FAQ
							</Link>
						</div>
					</div>
					<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
						<a
							href="https://github.com/aahlenst/jdkcomparison"
							type="button"
							id="github-link"
							className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
						>
							<span className="sr-only">
								Go to GitHub repository
							</span>
							<GitHubIcon className="h-6 w-6" aria-hidden="true">
								<title>Go to GitHub repository</title>
							</GitHubIcon>
						</a>
					</div>
				</nav>
			</div>

			<Transition.Root show={open} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-40 lg:hidden"
					onClose={() => setOpen(false)}
				>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
					</Transition.Child>

					<div className="fixed inset-0 z-40 flex">
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="-translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="-translate-x-full"
						>
							<Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none">
								<Transition.Child
									as={Fragment}
									enter="ease-in-out duration-300"
									enterFrom="opacity-0"
									enterTo="opacity-100"
									leave="ease-in-out duration-300"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
								>
									<div className="absolute right-0 top-0 -mr-12 pt-2">
										<button
											id="mobile-menu-close"
											type="button"
											className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
											onClick={() => setOpen(false)}
										>
											<span className="sr-only">
												Close sidebar
											</span>
											<XMarkIcon
												className="h-6 w-6 text-white"
												aria-hidden="true"
											/>
										</button>
									</div>
								</Transition.Child>
								<div className="h-0 flex-1 overflow-y-auto pb-4 pt-5">
									<div className="flex flex-shrink-0 items-center px-4">
										<Image
											id="logo"
											src={logo}
											alt="JDK Comparison logo"
											className="h-8 w-auto"
										/>
									</div>
									<nav
										aria-label="Sidebar navigation"
										className="mt-5"
									>
										<div className="space-y-1">
											<Link
												href="/"
												className={classNames(
													isActive(router, "/")
														? "border-red-600 bg-red-50 text-red-600"
														: "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900",
													"mobile-navigation-option mobile-navigation-option-jdk-comparison group flex items-center border-l-4 px-3 py-2 text-sm font-medium"
												)}
												aria-current={
													isActive(router, "/")
														? "page"
														: undefined
												}
											>
												JDK Comparison
											</Link>
											<Link
												href="/faq"
												className={classNames(
													isActive(router, "/faq")
														? "border-red-600 bg-red-50 text-red-600"
														: "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900",
													"mobile-navigation-option mobile-navigation-option-faq group flex items-center border-l-4 px-3 py-2 text-sm font-medium"
												)}
												aria-current={
													isActive(router, "/faq")
														? "page"
														: undefined
												}
											>
												FAQ
											</Link>
										</div>
									</nav>
								</div>
							</Dialog.Panel>
						</Transition.Child>
						<div className="w-14 flex-shrink-0" aria-hidden="true">
							{/* Force sidebar to shrink to fit close icon */}
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</div>
	);
}
