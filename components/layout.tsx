import {PropsWithChildren} from "react";
import {Navigation} from "@/components/navigation";

export default function Layout({children}: PropsWithChildren) {
	return (
		<>
			<Navigation/>
			{children}
		</>
	);
}
