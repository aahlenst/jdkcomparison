import {PropsWithChildren} from "react";
import {Navigation} from "@/components/navigation";

export default function Layout({children}: PropsWithChildren) {
	return (
		<>
			<Navigation/>
			<div className="relative top-16">
				{children}
			</div>
		</>
	);
}
