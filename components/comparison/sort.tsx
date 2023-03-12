import {Menu, Transition} from "@headlessui/react";
import {ChevronDownIcon} from "../icons";
import {Fragment} from "react";

export function Sort() {
	return (
		<Menu as="div" className="relative inline-block text-left invisible">
			<div>
				<Menu.Button
					className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
					Sort
					<ChevronDownIcon
						className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
						aria-hidden="true"
					/>
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items
					className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1">
						<Menu.Item>
							<span className="block px-4 py-2 text-sm font-medium text-gray-900">Version</span>
						</Menu.Item>
						<Menu.Item>
							<span className="block px-4 py-2 text-sm font-medium text-gray-900">Vendor</span>
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
