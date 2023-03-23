import {Disclosure} from "@headlessui/react";
import {BarsIcon, GitHubIcon, XMarkIcon} from "@/components/icons";
import Link from "next/link";
import {NextRouter, useRouter} from "next/router";
import duke from "../public/duke.svg";
import Image from "next/image";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

function isActive(router: NextRouter, path: string): boolean {
	return router.pathname === path;
}

export function Navigation() {
	const router = useRouter();

	return (
		<Disclosure as="nav" className="bg-white shadow">
			{({open}) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-16 justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button */}
								<Disclosure.Button
									id="mobile-menu-toggle"
									className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
									) : (
										<BarsIcon className="block h-6 w-6" aria-hidden="true"/>
									)}
								</Disclosure.Button>
							</div>
							<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
								<div className="flex flex-shrink-0 items-center">
									<Image src={duke} alt="Duke" className="block h-8 w-auto"/>
								</div>
								<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
									<Link href="/"
										  className={classNames(isActive(router, "/") ? "border-indigo-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700", "desktop-navigation-option desktop-navigation-option-jdk-comparison inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium")}>
										JDK Comparison
									</Link>
									<Link href="/faq"
										  className={classNames(isActive(router, "/faq") ? "border-indigo-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700", "desktop-navigation-option desktop-navigation-option-faq inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium")}>
										FAQ
									</Link>
								</div>
							</div>
							<div
								className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								<a href="https://github.com/"
								   type="button"
								   className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
								>
									<span className="sr-only">Go to GitHub repository</span>
									<GitHubIcon className="h-6 w-6" aria-hidden="true"/>
								</a>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 pt-2 pb-4">
							{/* Current: "bg-indigo-50 border-indigo-500 ", Default: "" */}
							<Link href="/" passHref={true} legacyBehavior={true}>
								<Disclosure.Button
									as="a"
									className={classNames(isActive(router, "/") ? "border-indigo-500 bg-indigo-50 text-indigo-700" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700", "mobile-navigation-option mobile-navigation-option-jdk-comparison block border-l-4 py-2 pl-3 pr-4 text-base font-medium")}
								>
									JDK Comparison
								</Disclosure.Button>
							</Link>
							<Link href="/faq" passHref={true} legacyBehavior={true}>
								<Disclosure.Button
									as="a"
									className={classNames(isActive(router, "/faq") ? "border-indigo-500 bg-indigo-50 text-indigo-700" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700", "mobile-navigation-option mobile-navigation-option-faq block border-l-4 py-2 pl-3 pr-4 text-base font-medium")}
								>
									FAQ
								</Disclosure.Button>
							</Link>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
